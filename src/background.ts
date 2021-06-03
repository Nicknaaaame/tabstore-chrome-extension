chrome.runtime.onInstalled.addListener(() => {
  chrome.webNavigation.onCompleted.addListener(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, ([{ id }]) => {
      chrome.pageAction.show(id as number);
    });
  }, { url: [{ urlMatches: 'google.com' }] });
});
