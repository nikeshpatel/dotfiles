// ==UserScript==
// @name         Console.save script
// @namespace    http://your.homepage/
// @version      1.0
// @updateURL   https://raw.githubusercontent.com/nikeshpatel/dotfiles/master/userscripts/console-save.user.js
// @downloadURL   https://raw.githubusercontent.com/nikeshpatel/dotfiles/master/userscripts/console-save.user.js
// @description  enter something useful
// @author       You
// @include http://*
// @include https://*
// @noframes
// @exclude https://mail.google.com
// @grant        none
// ==/UserScript==

window.init_save = function init_save() {
    (function(console){

        window.console.save = function(data, filename){

            if(!data) {
                window.console.error('Console.save: No data');
                return;
            }

            if(!filename) filename = 'console.json';

            if(typeof data === "object"){
                data = JSON.stringify(data, undefined, 4);
            }

            var blob = new Blob([data], {type: 'text/json'}),
                e    = document.createEvent('MouseEvents'),
                a    = document.createElement('a');

            a.download = filename;
            a.href = window.URL.createObjectURL(blob);
            a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':');
            e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            a.dispatchEvent(e);
        };
    })(window.console);
};