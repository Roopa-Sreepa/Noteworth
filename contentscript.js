var dom = document.getElementsByTagName('html')[0].innerHTML;
chrome.extension.sendRequest({message: dom});

