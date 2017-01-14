/**
 * React BabylonJS - originally cloned from:
 * Babel Starter Kit (https://www.kriasoft.com/babel-starter-kit)
 * 
 * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import 'babel/polyfill';
import onStats from './js/onStats';

const run = async () => {
  try {
    console.log('Welcome to React BabylonJS!'); // eslint-disable-line no-console
    if (document.querySelector('.stats')) {
      onStats(stats => {
        document.querySelector('.stats-forks span').innerText = stats.forks;
        document.querySelector('.stats-stars span').innerText = stats.watchers;
        document.querySelector('.stats-subscribers span').innerText = stats.subscribers;
        document.querySelector('.stats-open-issues span').innerText = stats.openIssues;
      });
    }
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
  }
};

if (window.addEventListener) {
  window.addEventListener('DOMContentLoaded', run);
} else {
  window.attachEvent('onload', run);
}
