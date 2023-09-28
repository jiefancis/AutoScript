const INPUT_VALUE = 0.001;
const DELAY_TIME = 2000;
const LOOP_GET_ELM_DURATION = 2000;
const LINK_DELAY_TIME = 100;
const CLICK_DELAY_TIME = 500;

// const FormInputXpath = '//*[@id="Deposit-field"]';

const INTERVAL_TIMES = 100;
let loopGetElmTimes = INTERVAL_TIMES;
let catchErrorTimes = INTERVAL_TIMES;
// let _isWeb3Task = false;

let currentTaskId: any = '';
let stoped: any = false;

const updateStoped = {
  setFalse: () => {
    stoped = false;
  },
  setTrue: () => {
    stoped = true;
  },
  value: () => stoped,
};

enum EVENT_TYPE {
  RUN_TO_EARN = 'runToEarn',
  CLICK_ACTION = 'clickAction',
  NEXT_CLICK_ACTION = 'nextClickAction',
  NEXT_OPEN_TAB = 'openNewTabAction',
  TASK_START = 'start_task',
  TASK_STOP = 'stop_task',
  TASK_RESTART = 'restart_task',
  LOG_OUT = 'log_out',
  GO_BACK = 'go_back',
}

enum ELM_TAGNAME_ENUM {
  BUTTON = 'BUTTON',
  INPUT = 'INPUT',
}

// const shotFullPage = () => {
//   const options = {
//     allowTaint: true,
//     useCORS: true,
//   };
//   html2canvas(document.body, options).then((canvas) => {
//     const outerHTML = document.documentElement.outerHTML;
//     const url = canvas.toDataURL('image/jpeg', 1.0);

//     sendMessage({
//       url,
//       dom: outerHTML,
//       event: 'runToEarn',
//       token: '',
//     });
//   });
// };

// const isButtonElm = (tagName: string) => {
//   return ELM_TAGNAME_ENUM.BUTTON === tagName;
// };

const isFormInputElm = (elm: any) => {
  return elm?.tagName === ELM_TAGNAME_ENUM.INPUT;
};
function setFormElementValue(elm: any, value: any, xpath?: string) {
  elm.value = value;
  return new Promise((resolve) => {
    function setNativeValue(element: any, value: any) {
      try {
        const valueSetter = Object.getOwnPropertyDescriptor(element, 'value')?.set;
        const prototype = Object.getPrototypeOf(element);
        const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value')?.set;

        if (valueSetter && valueSetter !== prototypeValueSetter) {
          prototypeValueSetter && prototypeValueSetter.call(element, value);
        } else {
          valueSetter && valueSetter.call(element, value);
        }

        resetCatchErrorTimes();
        element.dispatchEvent(new Event('change', { bubbles: true }));
        delay().then(() => resolve(true));
      } catch (error) {
        --catchErrorTimes;
        if (catchErrorTimes < 0) {
          resetCatchErrorTimes();
          resolve(false);
          return;
        }
        const newElm = getElmByXPath(xpath);
        delay().then(() => setNativeValue(newElm, value));
      }
    }
    setNativeValue(elm, value);
  });
}

// ======================================== message pass =======================

const sendMessage = (params: any) => {
  chrome.runtime.sendMessage(params);
};

// ======================================== task utils ========================
const taskStop = () => {
  sendMessage({
    event: EVENT_TYPE.TASK_STOP,
    taskId: currentTaskId,
  });
};

// const taskRestart = () => {
//   sendMessage({
//     event: EVENT_TYPE.TASK_RESTART,
//   });
// };

// =========================================task utils =========================

const resetIntervalTimes = () => {
  loopGetElmTimes = INTERVAL_TIMES;
};

const resetCatchErrorTimes = () => {
  catchErrorTimes = INTERVAL_TIMES;
};

const delay = (time?: any) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time || DELAY_TIME);
  });
};

const next = (resolve: any, elm: any = {}) => {
  delay(LINK_DELAY_TIME).then(() => resolve(elm?.href || false));
  delay(CLICK_DELAY_TIME).then(() => elm?.click?.());
};
const beforeClick = (resolve: any, elm: any, xpath?: string) => {
  if (isFormInputElm(elm)) {
    delay().then(() => setFormElementValue(elm, INPUT_VALUE, xpath).then(() => next(resolve, elm)));
  } else {
    next(resolve, elm);
  }
};

function getElmByXPath(xpath?: string) {
  if (xpath) {
    const res = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
    return res?.iterateNext?.();
  }
}

const loopGetElm = function (xpath: string) {
  return new Promise((resolve) => {
    let elm = getElmByXPath(xpath) as any;
    const loopFn = () => {
      elm = getElmByXPath(xpath) as any;

      if (!elm) {
        --loopGetElmTimes;
        if (loopGetElmTimes < 0) {
          resetIntervalTimes();
          return;
        }
        console.log('没找到', elm, xpath);
        delay(LOOP_GET_ELM_DURATION).then(() => loopFn());
      } else {
        console.log('找到了', elm, xpath);
        resetIntervalTimes();
        beforeClick(resolve, elm, xpath);
      }
    };
    loopFn();
  });
};

const handleClickAction = async function (request: MessageParams) {
  const { canSkip, selector } = request || {};
  const elm = getElmByXPath(selector) as any;

  return new Promise((resolve) => {
    if (elm) {
      beforeClick(resolve, elm, selector);
    } else {
      if (canSkip) {
        next(resolve);
      } else {
        loopGetElm(selector).then((res) => {
          resolve(res);
        });
      }
    }
  });
};
// ==================================================utils==============================
const isGalxeWebsite = () => {
  return location.href.includes('galxe.com');
};

const needReturnTaskHomeSite = ['demo.chainflip.io', 'discord.com'];
const needReturnTaskHomeFilter = () => {
  return needReturnTaskHomeSite.some((url) => location.href.includes(url));
};

const needOpenNewTab = (stopNewTab: boolean) => {
  if (stopNewTab) {
    return false;
  }
  if (needReturnTaskHomeFilter()) {
    return false;
  }
  return !isGalxeWebsite();
};

// ================================================== utils ==============================

const scrollToBottom = () => {
  window.scrollTo({
    left: 0,
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });

  delay(DELAY_TIME + 3000).then(() => {
    sendMessage({
      event: EVENT_TYPE.NEXT_CLICK_ACTION,
      from: 'content_script',
    });
  });
};

const exceuteFlow = (request: MessageParams) => {
  const { stopTask, scroll, taskId, stopNewTab } = request;
  currentTaskId = taskId;

  if (scroll) {
    scrollToBottom();
  } else {
    handleClickAction(request).then(async (isLink) => {
      delay().then(() => {
        if (stopTask) {
          if (request?.openNewTab) {
            sendMessage({
              event: EVENT_TYPE.NEXT_OPEN_TAB,
              isLink,
            });
          }
          taskStop();
          return;
        } else {
          sendMessage({
            event: needOpenNewTab(!!stopNewTab)
              ? EVENT_TYPE.NEXT_OPEN_TAB
              : EVENT_TYPE.NEXT_CLICK_ACTION,
            isLink,
            from: 'content_script',
          });
        }
      });
    });
  }
};

// ============================================= message interface ===============================

interface MessageParams {
  event: EVENT_TYPE;
  selector: string;
  isWeb3Task?: boolean;
  subTaskId: string;
  subTaskStatus?: number;
  taskId?: string;
  stopTask?: boolean;
  stop?: number | boolean;
  scroll?: boolean;
  stopNewTab: boolean | number;
  openNewTab?: boolean;
  canSkip?: boolean;
}

// ============================================= message listener ===============================

class MessageListener {
  listeners: Record<string, any> = {};
  contructor() {
    this.listeners = {};
  }

  on(name: string, listener: (message: any, sender: any) => void) {
    if (!this.listeners[name]) {
      this.listeners[name] = listener;
    }
    return this;
  }

  listener() {
    return this.listen.bind(this);
  }

  listen(message: any, sender: any) {
    const listener = this.listeners[message.event];
    listener && listener.call({ message, sender }, message, sender);
  }
}
const messageListener = new MessageListener();

messageListener.on(EVENT_TYPE.NEXT_CLICK_ACTION, function (message: MessageParams) {
  console.log('接收消息', message);
  // const { selector, stopNewTab } = message;
  // exceuteFlow(selector, stopNewTab, message);
  if (!updateStoped.value()) {
    exceuteFlow(message);
  }
});
messageListener.on(EVENT_TYPE.TASK_STOP, function (message: MessageParams) {
  console.log('接收消息', message);
  updateStoped.setTrue();
});
messageListener.on(EVENT_TYPE.TASK_RESTART, function (message: MessageParams) {
  console.log('接收消息', message);
  updateStoped.setFalse();
});

chrome.runtime.onMessage.addListener(messageListener.listener());

// chrome.runtime.onMessage.addListener(function (request) {
//   // sender, sendResponse

//   // console.log('content-script-message', request);
//   const { event, selector, stopNewTab } = request; // isWeb3Task
//   // _isWeb3Task = !!isWeb3Task;

//   if (event === 'shotFullPagebg') {
//     // shotFullPage();
//     sendMessage({
//       url: '',
//       dom: '',
//       event: 'runToEarn',
//       token: '',
//     });
//   } else if (event === CLICK_ACTION) {
//     // handleClickAction();
//     sendMessage({ event: EVENT_TYPE.RUN_TO_EARN });
//   } else if (event === EVENT_TYPE.NEXT_CLICK_ACTION) {
//     exceuteFlow(selector, stopNewTab, request);
//   }
// });
