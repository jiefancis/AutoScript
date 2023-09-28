import browser from 'webextension-polyfill';
import type Browser from 'webextension-polyfill';
import { INDEX_PAGE_NAME, STORE_ACCESS_TOKEN } from '@/constants';
import { logoutApi } from '@/services';

type CreateCreatePropertiesType = Browser.Tabs.CreateCreatePropertiesType;

class BrowserExtension {
  private static instance: BrowserExtension;

  static getInstance() {
    if (!BrowserExtension.instance) {
      BrowserExtension.instance = new BrowserExtension();
    }
    return BrowserExtension.instance;
  }

  reload() {
    browser.runtime.reload();
  }

  async openTab(options: CreateCreatePropertiesType) {
    await browser.tabs.create(options);
  }

  async getAuthToken() {
    const authToken = await chrome.identity.getAuthToken({ interactive: true });
    if (chrome.runtime.lastError) {
      this.sendMessage({
        name: 'loginLastError',
        message: chrome.runtime.lastError,
      });
      return Promise.resolve({});
    }
    const userInfo = await chrome.identity.getProfileUserInfo({});
    console.log('getAuthToken', authToken);
    console.log('getUserInfo', userInfo);
    return Promise.resolve({ token: authToken?.token, userInfo: userInfo });
  }

  async login() {
    const authToken = await this.getAuthToken();
    this.sendMessage({ name: 'user_auth', [STORE_ACCESS_TOKEN]: authToken });

    if (authToken) {
      this.storageSet(STORE_ACCESS_TOKEN, authToken);
    }
    return Promise.resolve(authToken);
  }

  async launchWebAuthFlow() {
    return new Promise((resolve) => {
      const manifest: Record<string, any> = browser.runtime.getManifest();

      const clientId = encodeURIComponent(manifest?.oauth2?.client_id);
      const scopes = encodeURIComponent(manifest.oauth2.scopes.join(''));
      const redirectUri = chrome.identity.getRedirectURL();
      const url =
        // 'https://accounts.google.com/o/oauth2/auth' +
        'https://accounts.google.com/o/oauth2/v2/auth' +
        '?client_id=' +
        clientId +
        '&response_type=id_token' +
        '&access_type=offline' +
        '&redirect_uri=*' +
        redirectUri +
        '&scope=' +
        scopes;

      chrome.identity.launchWebAuthFlow(
        {
          url,
          interactive: true,
        },
        (redirectedTo) => {
          if (chrome.runtime.lastError) {
            console.log(chrome.runtime.lastError.message);
            resolve(null);
            return;
          }

          let idToken = redirectedTo?.substring?.(redirectedTo.indexOf('id_token=') + 9);
          idToken = idToken?.substring(0, idToken.indexOf('&'));
          resolve(idToken);
          console.log('登录成功-idToken', idToken);
        },
      );
    });
  }

  async logout(tokenKey: string = STORE_ACCESS_TOKEN) {
    // const res = await this.storageGet(tokenKey);
    // const authToken = res[tokenKey];
    await logoutApi();
    this.storageSet(tokenKey, '');

    return new Promise((resolve) => {
      chrome.identity.removeCachedAuthToken({ token: 'authToken' }, () => resolve(true));
    });
  }

  async sendMessage(params: Record<string, any>) {
    return await browser.runtime.sendMessage(params);
  }

  storageSet(key: string, value: any) {
    browser.storage.local.set({ [key]: value });
  }

  storageGet(key: string) {
    return browser.storage.local.get(key);
  }

  async openExtensionInBrowser(route?: string, queryString?: string) {
    const extensionURL = this.getExtensionURL(route, queryString);
    this.openTab({
      url: extensionURL,
    });
  }

  getExtensionURL(route?: string, queryString?: string): string {
    let extensionURL = browser.runtime.getURL(INDEX_PAGE_NAME);
    if (route) {
      extensionURL += `#${route}`;
    }

    if (queryString) {
      extensionURL += `?${queryString}`;
    }

    return extensionURL;
  }

  async openPopup(tabUrl: string) {
    const windowOptions = {
      top: 0,
      left: 0,
      width: 1920,
      height: 800,
      url: tabUrl,
      type: 'popup',
    };
    browser.windows.create(windowOptions as any);
  }

  // 待补充...
}

export default BrowserExtension;
