// ==UserScript==
// @name       Reddit shortcuts
// @version    1.0
// @updateURL   https://raw.githubusercontent.com/nikeshpatel/dotfiles/master/userscripts/reddit-hotkeys.user.js
// @downloadURL   https://raw.githubusercontent.com/nikeshpatel/dotfiles/master/userscripts/reddit-hotkeys.user.js
// @description  enter something useful
// @match      https://www.reddit.com/*
// @match      https://www.reddit.com/r/*
// @exclude    https://www.reddit.com/r/*/comments/*
// @grant GM_addStyle
// @copyright  2012+, You
// ==/UserScript==

// Code
(function () {
    var titles = [],
        comments,
        links,
        currentLink = 0,
        ref = document.createElement('meta');
    ref.setAttribute('name','referrer');
    ref.setAttribute('content','always');
    document.head.appendChild(ref);
    document.onkeydown = function (e) {
        //var e = e;
        if (e.keyCode === 9 && titles.length === 0) { //tab
            GM_addStyle(".TMselected {border: 3px dashed red;}");
            titles = document.querySelectorAll('#siteTable .link');
            comments = document.querySelectorAll('#siteTable .comments');
            links = document.querySelectorAll('#siteTable .title > a');
            currentLink = 0;
            titles[currentLink].className += " TMselected ";
            e.preventDefault();
        }
        if (e.keyCode === 40 && titles.length > 0 && currentLink!==(titles.length - 1)) { //down
            //if (currentLink === 29) {break};
            titles[currentLink].className = titles[currentLink].className.replace( /(?:^|\s)TMselected(?!\S)/ , '' );
            currentLink = currentLink + 1;
            titles[currentLink].className += " TMselected ";
            e.preventDefault();
        }
        if (e.keyCode === 38 && titles.length > 0 && currentLink!==0) { //up
            titles[currentLink].className = titles[currentLink].className.replace( /(?:^|\s)TMselected(?!\S)/ , '' );
            currentLink = currentLink - 1;
            titles[currentLink].className += " TMselected ";
            e.preventDefault();
        }
        if (e.keyCode === 13 && titles.length > 0) { // enter
            window.open(links[currentLink].href);
            e.preventDefault();
        }
        if (e.keyCode === 191 && titles.length > 0) { // slash
            window.open(comments[currentLink].href);
            e.preventDefault();
        }

    };
})();
