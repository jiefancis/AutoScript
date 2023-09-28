type Xpaths = Array<{
  xpath: string;
  subTaskId: string;
  subTaskStatus: number;
  taskId: any;
  stop?: any;
  canSkip?: boolean | number;
}>;
class BackgroundState {
  static twitterXpaths: Xpaths = [
    // task 1
    {
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[5]/div/div[1]/div/div/div[2]/div[1]/div/button/div[1]/div[1]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e34',
      subTaskStatus: 0,
      taskId: 'e43ca89b-7ca6-4e77-8f6b-00534f002e03',
    },
    {
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[5]/div/div[1]/div/div/div[2]/div[1]/div/div/div/a',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e34',
      subTaskStatus: 1,
      taskId: 'e43ca89b-7ca6-4e77-8f6b-00534f002e03',
    },
    {
      xpath: '//*[@id="app"]/div[1]/main/div/div/div/div[4]/a',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e34',
      subTaskStatus: 1,
      taskId: 'e43ca89b-7ca6-4e77-8f6b-00534f002e03',
    },
    {
      xpath: '//*[@id="layers"]/div[2]/div/div/div/div/div/div[2]/div[2]/div[2]/div[1]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e34',
      subTaskStatus: 1,
      taskId: 'e43ca89b-7ca6-4e77-8f6b-00534f002e03',
    },
    {
      // refresh
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[5]/div/div[1]/div/div/div[2]/div[1]/div/button/div[2]/div/div/div/div/div',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e34',
      subTaskStatus: 3,
      taskId: 'e43ca89b-7ca6-4e77-8f6b-00534f002e03',
      canSkip: true,
    },

    // task 2
    {
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[5]/div/div[1]/div/div/div[3]/div[1]/div/button/div[1]/div[1]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e33',
      subTaskStatus: 0,
      taskId: 'e43ca89b-7ca6-4e77-8f6b-00534f002e03',
    },
    {
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[5]/div/div[1]/div/div/div[3]/div[1]/div/div/div/a',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e33',
      subTaskStatus: 1,
      taskId: 'e43ca89b-7ca6-4e77-8f6b-00534f002e03',
    },
    {
      xpath: '//*[@id="app"]/div/main/div/div/div/div[4]/a',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e33',
      subTaskStatus: 1,
      taskId: 'e43ca89b-7ca6-4e77-8f6b-00534f002e03',
    },
    {
      xpath: '//*[@id="layers"]/div[2]/div/div/div/div/div/div[2]/div[2]/div[2]/div[1]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e33',
      subTaskStatus: 1,
      taskId: 'e43ca89b-7ca6-4e77-8f6b-00534f002e03',
    },
    {
      // refresh
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[5]/div/div[1]/div/div/div[3]/div[1]/div/button/div[2]/div/div/div/div/div',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e33',
      subTaskStatus: 3,
      taskId: 'e43ca89b-7ca6-4e77-8f6b-00534f002e03',
      canSkip: 1,
    },
    // '//*[@id="ga-data-campaign-model-2"]/div[2]/div[2]/div/div[1]/div[2]/div/div/button',
  ];

  static web3Xpaths: Xpaths = [
    // task 1
    {
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[5]/div/div[1]/div/div/div[2]/div[1]/div/button/div[1]/div[1]',
      taskId: 'ebfbf199-e7c9-422f-85f9-bcccf8b98ada',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274a34',
      subTaskStatus: 1,
    },
    {
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[5]/div/div[1]/div/div/div[2]/div[1]/div/div/div/a',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274a34',
      subTaskStatus: 1,
      taskId: 'ebfbf199-e7c9-422f-85f9-bcccf8b98ada',
    },
    {
      xpath: '//*[@id="app"]/div/main/div/div/div/div[4]/a',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274a34',
      taskId: 'ebfbf199-e7c9-422f-85f9-bcccf8b98ada',
      subTaskStatus: 1,
    },
    // '//*[@id="__next"]/div[2]/div/div[4]/div/div/div/div[1]/div/div/div[2]/div[1]/button[2]/span', // max
    {
      xpath: '//*[@id="Deposit-field"]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274a34',
      subTaskStatus: 1,
      taskId: 'ebfbf199-e7c9-422f-85f9-bcccf8b98ada',
    },
    {
      xpath: '//*[@id="__next"]/div[2]/div/div[4]/div/div/div/div[1]/div/div/div[4]/button', // review swap按钮，click后，需要不停的loopGetElm来查找start swap按钮，直到出现后才执行下一步。
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274a34',
      subTaskStatus: 1,
      taskId: 'ebfbf199-e7c9-422f-85f9-bcccf8b98ada',
    },
    {
      xpath:
        '//*[@id="__next"]/div[2]/div/div[3]/div/div/div/div[1]/div/div[1]/div/div/div/div/div/div[2]/button[1]', // start swap按钮，
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274a34',
      subTaskStatus: 1,
      taskId: 'ebfbf199-e7c9-422f-85f9-bcccf8b98ada',
      stop: true,
    },
    // {
    //   xpath:
    //     '//*[@id="__next"]/div[2]/div/div[3]/div/div/div/div[1]/div/div[1]/div/div/div/div/div/div[2]/button[2]', // Send to a deposit address instead
    //   subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274a34',
    //   subTaskStatus: 3,
    //   taskId: 'ebfbf199-e7c9-422f-85f9-bcccf8b98ada',
    //   stop: 1,
    // },

    // task2
    {
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[5]/div/div[1]/div/div/div[3]/div[1]/div/button/div[1]/div[1]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274a33',
      subTaskStatus: 1,
      taskId: 'ebfbf199-e7c9-422f-85f9-bcccf8b98ada',
    },
    {
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[5]/div/div[1]/div/div/div[3]/div[1]/div/div/div/a',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274a33',
      subTaskStatus: 1,
      taskId: 'ebfbf199-e7c9-422f-85f9-bcccf8b98ada',
    },
    {
      xpath: '//*[@id="app"]/div/main/div/div/div/div[4]/a',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274a33',
      subTaskStatus: 1,
      taskId: 'ebfbf199-e7c9-422f-85f9-bcccf8b98ada',
    },
    {
      xpath: '//*[@id="layers"]/div[2]/div/div/div/div/div/div[2]/div[2]/div[2]/div[1]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274a33',
      subTaskStatus: 3,
      taskId: 'ebfbf199-e7c9-422f-85f9-bcccf8b98ada',
    },

    // task3
    {
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[5]/div/div[1]/div/div/div[4]/div[1]/div/button/div[1]/div[1]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274a32',
      subTaskStatus: 1,
      taskId: 'ebfbf199-e7c9-422f-85f9-bcccf8b98ada',
    },
    {
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[5]/div/div[1]/div/div/div[4]/div[1]/div/div/div/a',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274a32',
      subTaskStatus: 1,
      taskId: 'ebfbf199-e7c9-422f-85f9-bcccf8b98ada',
    },
    {
      xpath: '//*[@id="app"]/div/main/div/div/div/div[4]/a',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274a32',
      subTaskStatus: 1,
      taskId: 'ebfbf199-e7c9-422f-85f9-bcccf8b98ada',
    },
    {
      xpath: '//*[@id="layers"]/div[2]/div/div/div/div/div/div[2]/div[2]/div[2]/div[1]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274a32',
      subTaskStatus: 3,
      taskId: 'ebfbf199-e7c9-422f-85f9-bcccf8b98ada',
    },

    // task4
    {
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[5]/div/div[1]/div/div/div[5]/div[1]/div/button/div[1]/div[1]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274a31',
      subTaskStatus: 1,
      taskId: 'ebfbf199-e7c9-422f-85f9-bcccf8b98ada',
    },
    {
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[5]/div/div[1]/div/div/div[5]/div[1]/div/div/div/a',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274a31',
      subTaskStatus: 1,
      taskId: 'ebfbf199-e7c9-422f-85f9-bcccf8b98ada',
    },
    {
      xpath: '//*[@id="app"]/div/main/div/div/div/div[4]/a',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274a31',
      subTaskStatus: 1,
      taskId: 'ebfbf199-e7c9-422f-85f9-bcccf8b98ada',
    },
    {
      xpath: '//*[@id="layers"]/div[2]/div/div/div/div/div/div[2]/div[2]/div[2]/div[1]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274a31',
      subTaskStatus: 3,
      taskId: 'ebfbf199-e7c9-422f-85f9-bcccf8b98ada',
    },
  ];

  static task3Xpaths: Array<any> = [
    {
      xpath:
        '//*[@id="ga-campaign-collection-page"]/div/div[2]/div[2]/div[1]/a/div/div[2]/div[1]/div[1]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e00',
      subTaskStatus: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[2]/div[5]/div/div[1]/div/div/div[2]/div[1]/div/button/div[1]/div[1]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e00',
      subTaskStatus: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[2]/div[5]/div/div[1]/div/div/div[2]/div[1]/div/div/div/a',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e00',
      subTaskStatus: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      xpath: '//*[@id="app"]/div/main/div/div/div/div[4]/a',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e00',
      subTaskStatus: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      xpath:
        '//*[@id="app-mount"]/div[2]/div[1]/div[1]/div/div[2]/div/div/div/section/div[2]/button', // 接受邀请，然后暂停，等网页自动刷新页面--onUpdated -- 可以重新运行
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e00',
      subTaskStatus: 1,
      stopNewTab: true,
      stop: false,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      xpath: '//*[@id="app-mount"]/div[2]/div[1]/div[1]/div/div/div/section/div[2]/button', // continue to discord
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e00',
      subTaskStatus: 1,
      stop: false,
      canSkip: true,
      stopNewTab: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      xpath: '//*[@id="channels"]/ul/li[2]/div/div/a/div', // get-verified--切换到verify位置
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e00',
      subTaskStatus: 1,
      stopNewTab: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    // 下面几步可能会被跳过（默认授权过了）
    {
      xpath:
        '//*[@id="app-mount"]/div[2]/div[1]/div[1]/div/div[2]/div/div/div/div[2]/div[2]/div/main/form/div/div[2]/button', // complete按钮
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e00',
      subTaskStatus: 1,
      canSkip: true,
      stopNewTab: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      xpath:
        '//*[@id="app-mount"]/div[2]/div[1]/div[3]/div[2]/div/div/div[2]/div[1]/div[1]/div/div/div/div[3]/label', // 弹窗，click 勾选同意规则
      canSkip: true,
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e00',
      subTaskStatus: 1,
      stopNewTab: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      xpath: '//*[@id="app-mount"]/div[2]/div[1]/div[3]/div[2]/div/div/div[2]/div[2]/button', // 同意按钮
      stop: false,
      canSkip: true,
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e00',
      subTaskStatus: 1,
      stopNewTab: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      xpath: '//*[@id="message-accessories-1129829903206985759"]/div/div/div/button[1]', // Verify
      canSkip: false,
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e00',
      subTaskStatus: 1,
      stopNewTab: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      xpath:
        '/html/body/div[1]/div[2]/div[1]/div[1]/div/div/div/div/div/div/div/div/main/div/div/div/ol/li[2]/div/div/div/div/div/button',
      // xpath: '//*[@id="message-accessories-1151344092102541323"]/div[1]/div/div/button[1]', // Continue，有可能失败
      canSkip: false,
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e00',
      subTaskStatus: 1,
      stopNewTab: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      // /html/body/div[1]/div[2]/div[1]/div[1]/div/div[2]/div/div/div/div/div[3]/div[2]/main/div[1]/div/div/ol/li[2]/div/div[3]/div[1]/div/div/button
      xpath:
        '/html/body/div[1]/div[2]/div[1]/div[1]/div/div/div/div/div/div/div/div/main/div/div/div/ol/li[2]/div/div/div/div/div/button',
      // xpath: '//*[@id="message-accessories-1151344092102541323"]/div[1]/div/div/button', // Continue-2
      canSkip: false,
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e00',
      subTaskStatus: 1,
      stopNewTab: true,
      stop: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    // {
    //   // /html/body/div[1]/div[2]/div[1]/div[1]/div/div[2]/div/div/div/div/div[3]/div[2]/main/div[1]/div/div/ol/li[2]/div/div[3]/div[1]/div/div/button
    //   xpath: 'xxx',
    //   // xpath: '//*[@id="message-accessories-1151344092102541323"]/div[1]/div/div/button', // Continue-3
    //   canSkip: false,
    //   stop: true,
    //   subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e00',
    //   subTaskStatus: 1,
    //   stopNewTab: true,
    //   taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    // },

    {
      xpath:
        '//*[@id="ga-campaign-collection-page"]/div/div[2]/div[2]/div[1]/div/div/div/div[1]/div/div/div[2]/div[1]/div/button/div[2]/div/div/div/div/div',
      canSkip: true,
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e00',
      subTaskStatus: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    // Claimed
    {
      xpath:
        '//*[@id="ga-campaign-collection-page"]/div/div[2]/div[2]/div[1]/a/div/div[2]/div[2]/div/div/button',
      canSkip: true,
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e00',
      subTaskStatus: 3,
      // openNewTab: 1,
      // stop: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },

    // // 任务暂停，等到用户手动输入验证码后再继续
    // // 验证成功
    // '//*[@id="ga-campaign-collection-page"]/div/div[2]/div[2]/div[1]/div/div/div/div[1]/div/div/div[2]/div[1]/div/button/div[2]/div/div/div/div/div', // 刷新第一个任务转圈,这时候会弹窗，这个过程需要暂停任务。让用户进行账号登陆和人机校验
    // // 暂停任务--（等待用户手动刷新页面可以领取后，进入插件点击继续任务）

    // // 备用方案：65s后，chrome.tabs.reload()刷新页面，isTabReload = true，在onUpdated操作中，判断是否为真，真的情况下，不触发。
    // // 检测button（Not Eligible是否禁用？'//*[@id="ga-campaign-collection-page"]/div/div[2]/div[2]/div[1]/a/div/div[2]/div[2]/div/div/button'，禁用
    // // 1分钟后，

    // '//*[@id="ga-campaign-collection-page"]/div/div[2]/div[2]/div[1]/a/div/div[2]/div[2]/div/div/button',
    // // 非禁用模式，点击领取，领取后，

    // task2
    {
      xpath:
        '//*[@id="ga-campaign-collection-page"]/div/div[2]/div[2]/div[2]/a/div/div[2]/div[1]/div[1]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e11',
      subTaskStatus: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[2]/div[5]/div/div[1]/div/div/div[2]/div[1]/div/button/div[1]/div[1]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e11',
      subTaskStatus: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[2]/div[5]/div/div[1]/div/div/div[2]/div[1]/div/div/div/a',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e11',
      subTaskStatus: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      xpath: '//*[@id="app"]/div/main/div/div/div/div[4]/a',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e11',
      subTaskStatus: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      xpath: '//*[@id="layers"]/div[2]/div/div/div/div/div/div[2]/div[2]/div[2]/div[1]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e11',
      subTaskStatus: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      xpath:
        '//*[@id="ga-campaign-collection-page"]/div/div[2]/div[2]/div[2]/div/div/div/div[1]/div/div/div[2]/div[1]/div/button/div[2]/div/div/div/div/div',
      canSkip: true,
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e11',
      subTaskStatus: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      xpath:
        '//*[@id="ga-campaign-collection-page"]/div/div[2]/div[2]/div[2]/a/div/div[2]/div[2]/div/div/button',
      canSkip: true,
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e11',
      subTaskStatus: 3,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    // Claimed
    {
      xpath:
        '//*[@id="ga-campaign-collection-page"]/div/div[2]/div[2]/div[2]/a/div/div[2]/div[2]/div/div/button',
      canSkip: true,
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e11',
      subTaskStatus: 3,
      openNewTab: 1,
      // stop: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },

    // task3-1
    {
      xpath:
        '//*[@id="ga-campaign-collection-page"]/div/div[2]/div[2]/div[3]/a/div/div[2]/div[1]/div[1]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e22',
      subTaskStatus: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[2]/div[5]/div/div[1]/div/div/div[2]/div[1]/div/button/div[1]/div[1]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e22',
      subTaskStatus: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[2]/div[5]/div/div[1]/div/div/div[2]/div[1]/div/div/div/a',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e22',
      subTaskStatus: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      xpath: '//*[@id="app"]/div/main/div/div/div/div[4]/a',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e22',
      subTaskStatus: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      xpath: '//*[@id="layers"]/div[2]/div/div/div/div/div/div[2]/div[2]/div[2]/div[1]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e22',
      subTaskStatus: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    // {
    //   xpath: '//*[@id="layers"]/div[2]/div/div/div/div/div/div[2]/div[2]/div[2]/div[1]',
    //   subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e22',
    //   subTaskStatus: 1,
    //   task: '3-1-000',
    // },
    // task3-2
    {
      xpath:
        '//*[@id="ga-campaign-collection-page"]/div/div[2]/div[2]/div[3]/a/div/div[2]/div[1]/div[1]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e33',
      subTaskStatus: 1,
      task: '3-2',
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[2]/div[5]/div/div[1]/div/div/div[3]/div[1]/div/button/div[1]/div[1]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e33',
      subTaskStatus: 1,
      task: '3-2',
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[2]/div[5]/div/div[1]/div/div/div[3]/div[1]/div/div/div/a',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e33',
      subTaskStatus: 1,
      task: '3-2',
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      xpath: '//*[@id="app"]/div/main/div/div/div/div[4]/a',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e33',
      subTaskStatus: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      xpath: '//*[@id="layers"]/div[2]/div/div/div/div/div/div[2]/div[2]/div[2]/div[1]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e33',
      subTaskStatus: 1,
      canSkip: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      xpath: '//*[@id="layers"]/div[2]/div/div/div/div/div/div[2]/div[2]/div[2]/div[1]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e33',
      subTaskStatus: 1,
      canSkip: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },

    // Claimed
    {
      xpath:
        '//*[@id="ga-campaign-collection-page"]/div/div[2]/div[2]/div[3]/a/div/div[2]/div[2]/div/div/button',
      canSkip: true,
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e33',
      subTaskStatus: 3,
      openNewTab: 1,
      // stop: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },

    // task4
    {
      xpath:
        '//*[@id="ga-campaign-collection-page"]/div/div[2]/div[2]/div[4]/div/div/div/div[1]/div/div/div[2]/div[1]/div/button/div[1]/div[2]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e90',
      subTaskStatus: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      xpath: '//*[@id="app"]/div/main/div/div/div/div/div[1]/p/button',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e90',
      subTaskStatus: 1,
      canSkip: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      // scroll
      xpath: '//*[@id="__next"]/div[2]/div/div[2]/div', // 假 element
      scroll: true,
      canSkip: true,
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e90',
      subTaskStatus: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      xpath: '//*[@id="__next"]/div[2]/div/div[2]/div', // 假 element
      canSkip: true,
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e90',
      subTaskStatus: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      // refresh
      xpath:
        '//*[@id="ga-campaign-collection-page"]/div/div[2]/div[2]/div[4]/div/div/div/div[1]/div/div/div[2]/div[1]/div/button/div[2]/div/div/div/div/div',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e90',
      subTaskStatus: 3,
      canSkip: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    // Claimed
    {
      xpath:
        '//*[@id="ga-campaign-collection-page"]/div/div[2]/div[2]/div[4]/a/div/div[2]/div[2]/div/div/button',
      canSkip: true,
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e90',
      subTaskStatus: 3,
      openNewTab: 1,
      // stop: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },

    // task5
    {
      xpath:
        '//*[@id="ga-campaign-collection-page"]/div/div[2]/div[2]/div[5]/div/div/div/div[1]/div/div/div[2]/div[1]/div/button/div[1]/div[2]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e91',
      subTaskStatus: 1,
      canSkip: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      xpath: '//*[@id="app"]/div/main/div/div/div/div/div[1]/p/button',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e91',
      subTaskStatus: 1,
      canSkip: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      // scroll
      xpath: '//*[@id="__next"]/div[2]/div/div[2]/div',
      scroll: true,
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e91',
      subTaskStatus: 1,
      canSkip: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      // null
      xpath: '//*[@id="__next"]/div[2]/div/div[2]/div',
      canSkip: true,
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e91',
      subTaskStatus: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      // refresh
      xpath:
        '//*[@id="ga-campaign-collection-page"]/div/div[2]/div[2]/div[5]/div/div/div/div[1]/div/div/div[2]/div[1]/div/button/div[2]/div/div/div/div/div',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e91',
      subTaskStatus: 3,
      canSkip: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    // Claimed
    {
      xpath:
        '//*[@id="ga-campaign-collection-page"]/div/div[2]/div[2]/div[5]/a/div/div[2]/div[2]/div/div/button',
      canSkip: true,
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e91',
      subTaskStatus: 3,
      openNewTab: 1,
      // stop: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },

    // task 6
    {
      xpath:
        '//*[@id="ga-campaign-collection-page"]/div/div[2]/div[2]/div[6]/div/div/div/div[1]/div/div/div[2]/div[1]/div/button/div[1]/div[2]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e92',
      subTaskStatus: 1,
      canSkip: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },

    {
      xpath: '//*[@id="app"]/div/main/div/div/div/div/div[1]/p/button',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e92',
      subTaskStatus: 1,
      canSkip: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      // scroll
      xpath: '//*[@id="__next"]/div[2]/div/div[2]/div',
      scroll: true,
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e92',
      subTaskStatus: 1,
      canSkip: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      // null
      xpath: '//*[@id="__next"]/div[2]/div/div[2]/div',
      canSkip: true,
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e92',
      subTaskStatus: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      // refresh
      xpath:
        '//*[@id="ga-campaign-collection-page"]/div/div[2]/div[2]/div[6]/div/div/div/div[1]/div/div/div[2]/div[1]/div/button/div[2]/div/div/div/div/div',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e92',
      subTaskStatus: 3,
      canSkip: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    // Claimed
    {
      xpath:
        '//*[@id="ga-campaign-collection-page"]/div/div[2]/div[2]/div[6]/a/div/div[2]/div[2]/div/div/button',
      canSkip: true,
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e92',
      subTaskStatus: 3,
      openNewTab: 1,
      // stop: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },

    // task 7
    {
      // xpath: '//*[@id="ga-campaign-collection-page"]/div/div[2]/div[2]/div[7]/a',
      xpath:
        '//*[@id="ga-campaign-collection-page"]/div/div[2]/div[2]/div[7]/a/div/div[2]/div[1]/div[1]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e93',
      subTaskStatus: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[2]/div[5]/div/div[1]/div/div/div[2]/div[1]/div/button',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e93',
      subTaskStatus: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      // start
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[2]/div[5]/div/div[1]/div/div/div[2]/div[1]/div/button/div[2]/div/div/button',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e93',
      subTaskStatus: 1,
      canSkip: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      // D
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[2]/div[5]/div/div[1]/div/div/div[2]/div[1]/div/div/div/div/div/div[1]/div[4]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e93',
      subTaskStatus: 1,
      canSkip: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      // next
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[2]/div[5]/div/div[1]/div/div/div[2]/div[1]/div/div/div/div/div/div[2]/div[1]/div/button',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e93',
      subTaskStatus: 1,
      canSkip: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      // C
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[2]/div[5]/div/div[1]/div/div/div[2]/div[1]/div/div/div/div/div/div[1]/div[3]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e93',
      subTaskStatus: 1,
      canSkip: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      // next
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[2]/div[5]/div/div[1]/div/div/div[2]/div[1]/div/div/div/div/div/div[2]/div[1]/div[2]/button',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e93',
      subTaskStatus: 1,
      canSkip: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      // B
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[2]/div[5]/div/div[1]/div/div/div[2]/div[1]/div/div/div/div/div/div[1]/div[2]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e93',
      subTaskStatus: 1,
      canSkip: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      // submit
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[2]/div[5]/div/div[1]/div/div/div[2]/div[1]/div/div/div/div/div/div[2]/div[1]/div[2]/button',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e93',
      subTaskStatus: 3,
      openNewTab: 1,
      stop: 1,
      canSkip: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    // Claimed
    {
      xpath:
        '//*[@id="ga-campaign-collection-page"]/div/div[2]/div[2]/div[7]/a/div/div[2]/div[2]/div/div/button',
      canSkip: true,
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e93',
      subTaskStatus: 3,
      openNewTab: 1,
      // stop: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },

    // task 8
    {
      xpath:
        '//*[@id="ga-campaign-collection-page"]/div/div[2]/div[2]/div[8]/div/div/div/div[1]/div/div/div[2]/div[1]/div/button/div[1]/div[2]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e94',
      subTaskStatus: 1,
      canSkip: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      xpath: '//*[@id="app"]/div/main/div/div/div/div/div[1]/p/button',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e94',
      subTaskStatus: 1,
      canSkip: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      // null
      xpath: '//*[@id="doc"]/h1',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e94',
      subTaskStatus: 1,
      canSkip: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      // refresh
      xpath:
        '//*[@id="ga-campaign-collection-page"]/div/div[2]/div[2]/div[8]/div/div/div/div[1]/div/div/div[2]/div[1]/div/button/div[2]/div/div/div/div/div',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e94',
      subTaskStatus: 3,
      canSkip: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    // Claimed
    {
      xpath:
        '//*[@id="ga-campaign-collection-page"]/div/div[2]/div[2]/div[8]/a/div/div[2]/div[2]/div/div/button',
      canSkip: true,
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e94',
      subTaskStatus: 3,
      openNewTab: 1,
      // stop: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },

    // task 9
    {
      // xpath: '//*[@id="ga-campaign-collection-page"]/div/div[2]/div[2]/div[9]/a',
      xpath:
        '//*[@id="ga-campaign-collection-page"]/div/div[2]/div[2]/div[9]/a/div/div[2]/div[1]/div[1]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e95',
      subTaskStatus: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[2]/div[5]/div/div[1]/div/div/div[2]/div[1]/div/button',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e95',
      subTaskStatus: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[2]/div[5]/div/div[1]/div/div/div[2]/div[1]/div/button/div[2]/div/div/button',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e95',
      subTaskStatus: 1,
      canSkip: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      // B
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[2]/div[5]/div/div[1]/div/div/div[2]/div[1]/div/div/div/div/div/div[1]/div[2]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e95',
      subTaskStatus: 1,
      canSkip: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      // next
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[2]/div[5]/div/div[1]/div/div/div[2]/div[1]/div/div/div/div/div/div[2]/div[1]/div/button',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e95',
      subTaskStatus: 1,
      canSkip: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      // C
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[2]/div[5]/div/div[1]/div/div/div[2]/div[1]/div/div/div/div/div/div[1]/div[3]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e95',
      subTaskStatus: 1,
      canSkip: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      // next
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[2]/div[5]/div/div[1]/div/div/div[2]/div[1]/div/div/div/div/div/div[2]/div[1]/div[2]/button',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e95',
      subTaskStatus: 1,
      canSkip: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      // C
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[2]/div[5]/div/div[1]/div/div/div[2]/div[1]/div/div/div/div/div/div[1]/div[3]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e95',
      subTaskStatus: 1,
      canSkip: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      // next
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[2]/div[5]/div/div[1]/div/div/div[2]/div[1]/div/div/div/div/div/div[2]/div[1]/div[2]/button',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e95',
      subTaskStatus: 1,
      canSkip: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      // C
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[2]/div[5]/div/div[1]/div/div/div[2]/div[1]/div/div/div/div/div/div[1]/div[3]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e95',
      subTaskStatus: 1,
      canSkip: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      // next
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[2]/div[5]/div/div[1]/div/div/div[2]/div[1]/div/div/div/div/div/div[2]/div[1]/div[2]/button',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e95',
      subTaskStatus: 1,
      canSkip: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      // B
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[2]/div[5]/div/div[1]/div/div/div[2]/div[1]/div/div/div/div/div/div[1]/div[2]',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e95',
      subTaskStatus: 1,
      canSkip: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    {
      // submit
      xpath:
        '//*[@id="ga-data-campaign-model-2"]/div[2]/div[1]/div[2]/div[5]/div/div[1]/div/div/div[2]/div[1]/div/div/div/div/div/div[2]/div[1]/div[2]/button',
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e95',
      subTaskStatus: 3,
      openNewTab: 1,
      stop: 1,
      canSkip: true,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
    // Claimed
    {
      xpath:
        '//*[@id="ga-campaign-collection-page"]/div/div[2]/div[2]/div[9]/a/div/div[2]/div[2]/div/div/button',
      canSkip: true,
      subTaskId: '907eda84-b7bf-459f-b0ac-1d54dd274e95',
      subTaskStatus: 3,
      openNewTab: 1,
      // stop: 1,
      taskId: '18498520-50e7-4d5e-9803-451feb9cddf8',
    },
  ];
  static taskIdMap: { [id: string]: Array<any> } = {
    'e43ca89b-7ca6-4e77-8f6b-00534f002e03': BackgroundState.twitterXpaths,
    'ebfbf199-e7c9-422f-85f9-bcccf8b98ada': BackgroundState.web3Xpaths,
    '18498520-50e7-4d5e-9803-451feb9cddf8': BackgroundState.task3Xpaths,
  };
  static getXpathByTaskId = (taskId: string) => {
    return BackgroundState.taskIdMap[taskId];
  };
}

export default BackgroundState;
