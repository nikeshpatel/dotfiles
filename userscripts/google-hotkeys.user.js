// ==UserScript==
// @name       Google search results hotkeys
// @version    1.0
// @updateURL   https://raw.githubusercontent.com/nikeshpatel/dotfiles/master/userscripts/google-hotkeys.user.js
// @downloadURL   https://raw.githubusercontent.com/nikeshpatel/dotfiles/master/userscripts/google-hotkeys.user.js
// @description  Re-enable 'instant search' hotkeys for Google search results
// @include      https://www.google.com/search?*
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    var links, TAB, ENTER, UP, DOWN, LEFT, RIGHT, currentLink = 0, init = false;
    TAB = 9;
    ENTER = 13;
    UP = 38;
    DOWN = 40;
    LEFT = 37;
    RIGHT = 39;
    document.onkeydown = function (e) {
        if (e.keyCode === TAB && init === false) {
            GM_addStyle(".selected::before {content: '►'; color: #4273db; position: absolute; left: -13px; top: 4px; font: 11px arial,sans-serif !important;}");
            init = true;
            links = document.querySelectorAll('.rc .r a');
            // Add arrow to the first result link
            links[currentLink].classList.add('selected');
            e.preventDefault();
        }
        if (e.keyCode === ENTER && init === true && document.activeElement.tagName !== "INPUT") {
            window.open(links[currentLink].href);
            e.preventDefault();
        }
        if (e.keyCode === RIGHT && init === true && currentLink!==(links.length - 1) && document.activeElement.tagName !== "INPUT") { // left (to go down)
            links[currentLink].classList.remove('selected');
            currentLink++;
            links[currentLink].classList.add('selected');
            e.preventDefault();
        }
        if (e.keyCode === LEFT && init === true && currentLink!==0 && document.activeElement.tagName !== "INPUT") {  // right (to go up)
            links[currentLink].classList.remove('selected');
            currentLink--;
            links[currentLink].classList.add('selected');
            e.preventDefault();
        }
    };
})();