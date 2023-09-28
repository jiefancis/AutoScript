import browser from 'webextension-polyfill';

class BackgroundUtils {
  static TabIds: any[] = [];
  static cacheTabId: any = null;

  static setTab(tabId: any) {
    BackgroundUtils.cacheTabId = tabId;
    BackgroundUtils.setTabIds(tabId);
  }

  static setTabIds(tabId: any) {
    const hasTab = BackgroundUtils.hasTab(tabId);
    if (!hasTab) {
      BackgroundUtils.TabIds.push(tabId);
    }
  }
  static resetTabIds() {
    BackgroundUtils.TabIds = [];
  }

  static hasTab = (tabId: any) => {
    return BackgroundUtils.TabIds.includes(tabId);
  };

  static removeTab = async (tabId: any) => {
    return await browser.tabs.remove(tabId);
  };

  static removeDiscardTabs = async () => {
    BackgroundUtils.TabIds.pop();

    chrome.tabs.query({ currentWindow: true }, (tabs) => {
      tabs.map((tab) => {
        if (BackgroundUtils.hasTab(tab?.id)) {
          BackgroundUtils.removeTab(tab?.id);
        }
      });
    });
    const ids = BackgroundUtils.TabIds.slice(0, -1);

    return await browser.tabs.remove(ids);
  };

  static sendMessage = (message: any) => {
    const tabId = BackgroundUtils.cacheTabId;
    console.log('sendMessage:', message);
    chrome.tabs.sendMessage(tabId, message);
  };

  static runtimeSendMessage = (message: any) => {
    chrome.runtime.sendMessage(message);
  };

  static createTab = async (options: chrome.tabs.CreateProperties) => {
    try {
      const tabId = await chrome.tabs.create(options);
      return Promise.resolve(tabId);
    } catch (error) {
      return Promise.reject(error);
    }
  };
}

export default BackgroundUtils;
