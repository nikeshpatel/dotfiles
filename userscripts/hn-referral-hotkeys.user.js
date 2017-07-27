// ==UserScript==
// @name       Hacker News referral shortcuts
// @version    1.0
// @updateURL   https://raw.githubusercontent.com/nikeshpatel/dotfiles/master/userscripts/hn-referral-hotkeys.user.js
// @downloadURL   https://raw.githubusercontent.com/nikeshpatel/dotfiles/master/userscripts/hn-referral-hotkeys.user.js
// @description  enter something useful
// @include http://*
// @include https://*
// @exclude https://news.ycombinator.com/
// @exclude https://*.google.com/*
// @noframes
// @copyright  2012+, You
// ==/UserScript==

(function () {
    document.onkeydown = function (e) {
        if (e.shiftKey && e.keyCode === 191 && document.referrer === "https://news.ycombinator.com/") {
            window.close();
        }
        if (e.shiftKey && e.keyCode === 191 && document.referrer.indexOf("https://www.reddit.com/") > -1) {
            window.close();
        }
    };
})();