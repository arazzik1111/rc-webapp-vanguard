import { facebookService } from '@services/facebook.service';
import { rcWindow } from '@stores/window.store';

const FACEBOOK_APP_ID = '212384205474225';
const FACEBOOK_API_VERSION = 'v15.0';

/**
 * Initialize Facebook SDK by attaching FB object to the window object
 * - If passed true as the first parameter we also do the login call
 */
export async function initFacebookSdk(withLogin = false) {
  return new Promise((resolve) => {
    function initFacebook() {
      rcWindow.FB.init({
        appId: FACEBOOK_APP_ID,
        cookie: true,
        xfbml: true,
        version: FACEBOOK_API_VERSION,
      });

      // Auto authenticate with the api if already logged in with facebook
      if (withLogin) {
        facebookService.getLoginStatus().then((response) => {
          if (response) {
            return null;
          }
          facebookService.doLogin().then(() => {
            return null;
          });
        });
      }

      return null;
    }

    // Already present in the page
    if (rcWindow.FB) {
      resolve(initFacebook);
    }

    // fbAsyncInit will be called when Facebook SDK Script is loaded in the page
    rcWindow.fbAsyncInit = function () {
      initFacebook();
      resolve(null);
    };

    loadFacebookSDKScript();
  });
}

/**
 * Load Facebook Graph API script into the DOM
 */
const loadFacebookSDKScript = (scriptId: string = 'facebook-jssdk') => {
  if (document.getElementById(scriptId)) {
    // already loaded
    return;
  }

  const script: HTMLScriptElement = document.createElement('script');
  script.id = scriptId;
  script.src = 'https://connect.facebook.net/en_US/sdk.js';

  const firstScripInPage = document.getElementsByTagName('script')[0];
  if (firstScripInPage && firstScripInPage.parentNode) {
    firstScripInPage.parentNode.insertBefore(script, firstScripInPage);
  } else {
    console.error('Facebook SDK | Load Js Script | No firstScripInPage');
  }
};
