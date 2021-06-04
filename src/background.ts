console.log('Store is clean');
chrome.storage.local.clear();
chrome.storage.onChanged.addListener(changes => {
  console.log(changes);
});

