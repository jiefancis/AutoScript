// import browser from 'webextension-polyfill';
import BackgroundState from './backgroundState';
import Utils from './backgroundUtils';
import messageListener from './MessageListener';

const API_TASK_RUN_TO_EARN = 'http://3.208.255.189:3007/autoape/v1/task/run-to-earn';

// =========================================== constants =============================
const LOOP_DURATION = 1000;
const SUCCESS_CODE = 200;

// =========================================== state ================================
let taskId: any = '';
let token: any = '';
let targetUrl: any = '';
let isWeb3Task: any = false;
let stoping: any = false;
let prevTabId: any = null;
// let isOpenNewTab: boolean = false;
// let currentXpath: any = '';
// let task_step: any = 1;

let web3Xpaths = BackgroundState.web3Xpaths;

interface Xpath {
  xpath: string;
  subTaskId: string;
  subTaskStatus: number;
  stop?: boolean;
  stopNewTab?: boolean;
  scroll?: boolean;
  taskId?: any;
}
let xpaths: Array<Xpath> = [];

// =========================================== enum ==================================

enum EVENT_TYPE {
  BG_TASK_ID = 'taskId',
  BG_RUN_TO_EARN = 'runToEarn',
  BG_CLICK_ACTION = 'clickAction',
  BG_NEXT_CLICK_ACTION = 'nextClickAction',
  BG_NEXT_OPEN_TAB = 'openNewTabAction',
  BG_TASK_STOP = 'stop_task',
  BG_TASK_START = 'start_task',
  BG_TASK_RESTART = 'restart_task',
  BG_LOG_OUT = 'log_out',
  BG_GO_BACK = 'go_back',
}

// task_status // 0:初始化 1:执行中 2:暂停执行 3:执行完毕 4:执行失败
enum TASK_STATUS_ENUM {
  INIT = 0,
  RUNNING = 1,
  PAUSE = 2,
  SUCCESS = 3,
  FAIL = 4,
}

// function dataURLtoFile(dataURI: string, filename: string) {
//   const byteString = atob(dataURI.split(',')[1]);
//   // const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
//   const arrayBuffer = new ArrayBuffer(byteString.length);
//   const uint8Array = new Uint8Array(arrayBuffer);
//   for (let i = 0; i < byteString.length; i++) {
//     uint8Array[i] = byteString.charCodeAt(i);
//   }
//   const blob = new Blob([arrayBuffer], { type: 'image/jpeg' });
//   return new File([blob], filename);
// }

const taskRunToEarn = async (params: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
      });
    }, 500);
  });
  return fetch(API_TASK_RUN_TO_EARN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(params),
  });
};

// ================================ utils =================================

const initialVars = (request: any) => {
  taskId = request?.taskId;
  token = request?.token;
  targetUrl = request?.targetUrl;
  isWeb3Task = !!request?.isWeb3Task;
};
const resetXpaths = (taskId: string) => {
  const _xpath = BackgroundState.getXpathByTaskId(taskId) || [];
  xpaths = [..._xpath];
  web3Xpaths = [..._xpath];
};

const getTaskStep = () => {
  return web3Xpaths.length - xpaths.length + 1;
};

const getTaskStatus = (isInit?: boolean) => {
  return xpaths.length === 0
    ? TASK_STATUS_ENUM.SUCCESS
    : isInit
    ? TASK_STATUS_ENUM.INIT
    : TASK_STATUS_ENUM.RUNNING;
};

const updatePrevTabId = (tabId: any) => {
  prevTabId = tabId || null;
};

const loopFinish = async (taskId: string) => {
  // Utils.removeDiscardTabs();
  resetXpaths(taskId);
  await doneTask(taskId);
  // reload();
};

const loop = async (taskId: any, isInit?: boolean) => {
  if (stoping) return;

  const task_status = getTaskStatus(isInit);
  const task_step = getTaskStep();

  taskRunToEarn({
    data: {
      task_id: xpaths[0]?.taskId,
      screenshot_url: '',
      dom_data: '',
      task_step,
      task_status,
      sub_task_id: xpaths[0]?.subTaskId,
      sub_task_status: xpaths[0]?.subTaskStatus,
    },
  }).then(async (res: any) => {
    const len = xpaths.length;
    if (res.status === SUCCESS_CODE) {
      const xpath = xpaths?.shift?.();

      if (xpath?.stop) {
        stopLoop();
        stopTask(taskId);
      }

      if (Utils.cacheTabId) {
        console.log('接口执行成功--taskRunToEarn', xpaths.length, xpath, xpath?.stop);

        // currentXpath = xpath?.xpath;
        await delayFn();
        Utils.sendMessage({
          ...xpath,
          event: EVENT_TYPE.BG_NEXT_CLICK_ACTION,
          selector: xpath?.xpath,
          isWeb3Task,
          stopTask: xpath?.stop,
        });

        if (len === 0) {
          loopFinish(taskId);
        }
      }
    } else if (len === 0) {
      // resetXpaths(!!isWeb3Task);
      resetXpaths(taskId);
    }
  });
};

const stopTaskMessage = () => {
  Utils.sendMessage({
    event: EVENT_TYPE.BG_TASK_STOP,
  });
};
const restartTaskMessage = () => {
  Utils.sendMessage({
    event: EVENT_TYPE.BG_TASK_RESTART,
  });
};

const stopTask = async (taskId: string) => {
  await taskRunToEarn({
    data: {
      task_id: taskId || xpaths[0]?.taskId,
      screenshot_url: '',
      dom_data: '',
      task_step: 2,
      task_status: TASK_STATUS_ENUM.PAUSE,
      sub_task_id: xpaths[0]?.subTaskId,
      sub_task_status: TASK_STATUS_ENUM.PAUSE,
    },
  });
};
const doneTask = async (taskId: string) => {
  await taskRunToEarn({
    data: {
      screenshot_url: '',
      dom_data: '',
      task_step: 666,
      task_id: taskId || xpaths[0]?.taskId,
      sub_task_id: xpaths[0]?.subTaskId,
      task_status: TASK_STATUS_ENUM.SUCCESS,
      sub_task_status: TASK_STATUS_ENUM.PAUSE,
    },
  });
};
const restarkTask = async () => {
  await taskRunToEarn({
    data: {
      task_id: taskId,
      screenshot_url: '',
      dom_data: '',
      task_step: web3Xpaths.length - xpaths.length + 1,
      task_status: TASK_STATUS_ENUM.INIT,
      sub_task_id: xpaths[0]?.subTaskId,
      sub_task_status: xpaths[0]?.subTaskStatus,
    },
  });
};

// const uploadFile = function (params: any) {
//   const { url, dom } = params;
//   const file = dataURLtoFile(url, Date.now() + '.jpeg');
//   const fd = new FormData();
//   fd.append('file', file);
//   fetch('http://3.208.255.189:8889//upload/v1/photo?thumb=0', {
//     method: 'POST',
//     body: fd,
//   })
//     .then((res) => res.json())
//     .then((res) => {
//       // console.log('上传图片成功', res);
//       if (res.code === 200) {
//         const imgUrl = res.data.url;
//         taskRunToEarn({
//           data: {
//             task_id: taskId,
//             screenshot_url: imgUrl,
//             dom_data: dom,
//           },
//         });
//       }
//     });
// };

const delayFn = (time: any = LOOP_DURATION) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

const resetStopingFlag = () => {
  stoping = false;
};

const stopLoop = () => {
  stoping = true;
};

const isTabUpdate = (tabId: any) => {
  return tabId === prevTabId;
};

// =============================================== tabs ==========================

chrome.tabs.onUpdated.addListener(async function (tabId, changeInfo) {
  if (changeInfo.status === 'complete') {
    Utils.setTab(tabId);

    if (isTabUpdate(tabId) || stoping) return;

    resetStopingFlag();
    updatePrevTabId(tabId);

    await delayFn();
    loop(taskId, true);
  }
});

// =============================================== event listener ========================

messageListener.on(EVENT_TYPE.BG_TASK_ID, function (message) {
  const { taskId } = message || {};
  initialVars(message);
  resetXpaths(taskId);
});

messageListener.on(EVENT_TYPE.BG_NEXT_CLICK_ACTION, async function (message) {
  const { taskId, isLink } = message || {};
  if (!isLink) {
    await delayFn();
    loop(taskId);
  }
});
messageListener.on(EVENT_TYPE.BG_NEXT_OPEN_TAB, async function () {
  Utils.createTab({ url: targetUrl });
});

messageListener.on(EVENT_TYPE.BG_TASK_STOP, async function (message) {
  const { taskId } = message || {};
  stopLoop();
  stopTaskMessage();
  await stopTask(taskId);
  console.log('任务暂停', stoping);
});
messageListener.on(EVENT_TYPE.BG_TASK_RESTART, async function (message) {
  resetStopingFlag();
  initialVars(message);
  restarkTask();
  restartTaskMessage();
  console.log('重启任务', stoping);
});

chrome.runtime.onMessage.addListener(messageListener.listener());

chrome.runtime.onMessageExternal.addListener(function (request) {
  const { event } = request;
  if (event === EVENT_TYPE.BG_LOG_OUT) {
    chrome.runtime.sendMessage({
      event: EVENT_TYPE.BG_LOG_OUT,
    });
  }
});
