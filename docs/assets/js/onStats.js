/**
 * React BabylonJS - originally cloned from:
 * Babel Starter Kit (https://www.kriasoft.com/babel-starter-kit)
 * 
 * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/**
 * Loads data asynchronously via JSONP.
 */
const load = (() => {
  let index = 0;
  const timeout = 5000;

  return url => new Promise((resolve, reject) => {
    const callback = '__callback' + index++;
    const timeoutID = window.setTimeout(() => {
      reject(new Error('Request timeout.'));
    }, timeout);

    window[callback] = response => {
      window.clearTimeout(timeoutID);
      resolve(response);
    };

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = url + (url.indexOf('?') === -1 ? '?' : '&') + 'callback=' + callback;
    document.getElementsByTagName('head')[0].appendChild(script);
  });
})();

/**
 * Loads project stats from GitHub.com
 */
const onStats = (() => {
  const key = 'github.repo';
  return async (callback) => {
    const { value, timestamp } = JSON.parse(window.localStorage.getItem(key)) || {};
    if (value) {
      callback(value);
    }
    if (!value || (new Date() - new Date(timestamp)) > 300000 /* 5 min */) {
      const response = await load('https://api.github.com/repos/brianzinn/react-babylonJS');
      if (response.meta.status === 200) {
        const data = {
          value: {
            createdAt: response.data.created_at,
            updatedAt: response.data.updated_at,
            pushedAt: response.data.pushed_at,
            forks: response.data.forks,
            watchers: response.data.watchers,
            subscribers: response.data.subscribers_count,
            openIssues: response.data.open_issues,
          },
          timestamp: new Date(),
        };
        window.localStorage.setItem(key, JSON.stringify(data));
        callback(data.value);
      } else {
        throw new Error('Request failed. ' + response);
      }
    }
  };
})();

export default onStats;
