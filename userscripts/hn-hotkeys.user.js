// ==UserScript==
// @name       Hacker News shortcuts
// @version    1.6
// @updateURL   https://raw.githubusercontent.com/nikeshpatel/dotfiles/master/userscripts/hn-hotkeys.user.js
// @downloadURL   https://raw.githubusercontent.com/nikeshpatel/dotfiles/master/userscripts/hn-hotkeys.user.js
// @description  Hotkeys for use on Hacker News
// @match      https://news.ycombinator.com/
// @match      https://news.ycombinator.com/news
// @copyright  2012+, You
// ==/UserScript==

(function () {
    var titles_helper = [],
        title,
        comments,
        links,
        currentLink = 0,
        ref = document.createElement('meta');
    ref.setAttribute('name','referrer');
    ref.setAttribute('content','always');
    document.head.appendChild(ref);
    document.onkeydown = function (e) {
        //var e = e;
        if (e.code === "Tab" && titles_helper.length === 0) { //tab
            titles_helper = document.querySelectorAll('.votelinks');
            title = titles_helper[currentLink].previousSibling.previousSibling;
            comments = document.querySelectorAll('.hnuser+ .age a');
            links = document.querySelectorAll('.votelinks+ .title .titleline > a');
            currentLink = 0;
            title.innerText = "▶ " + title.innerText;
            e.preventDefault();
        }
        if (e.code === "ArrowRight" && titles_helper!==0 && currentLink!==(titles_helper.length - 1)) { // right (to go down)
            //if (currentLink === 29) {break};
            title.innerText = title.innerText.replace("▶ ","");
            currentLink = currentLink + 1;
            title = titles_helper[currentLink].previousSibling.previousSibling;
            title.innerText = "▶ " + title.innerText;
            e.preventDefault();
        }
        if (e.code === "ArrowLeft" && titles_helper!==0 && currentLink!==0) { // left (to go up)
            title.innerText = title.innerText.replace("▶ ","");
            currentLink = currentLink - 1;
            title = titles_helper[currentLink].previousSibling.previousSibling;
            title.innerText = "▶ " + title.innerText;
            e.preventDefault();
        }
        if (e.code === "Enter" && titles_helper!==0) { // enter
            if (document.activeElement.tagName !== "INPUT") {
                window.open(links[currentLink].href);
                e.preventDefault();
            }
        }
        if (e.code === "Slash" && titles_helper!==0) { // slash
            window.open(comments[currentLink].href);
            e.preventDefault();
        }

    };
})();