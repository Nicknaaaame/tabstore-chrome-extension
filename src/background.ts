import {devCons} from './environments/environment';

devCons.log('Store is clean');
chrome.storage.local.clear();
chrome.storage.onChanged.addListener(changes => {
  devCons.log('bg:', changes);
});

