'use strict';

/*
chrome.omnibox.onInputStarted.addListener(function () {
    console.log('Use input started');
});

chrome.omnibox.onInputChanged.addListener(function (s, f){
    console.log(s);
});
*/

chrome.webRequest.onBeforeRequest.addListener(function (req) {
    var regex = /golang/i;
    console.log(req);
    if (regex.test(req.url)) {
        return {redirectUrl: req.url.replace('golang', 'dlang')};
    }
}, { urls: ['*://www.google.co.jp/search?*'] },
                                             ['blocking']);
