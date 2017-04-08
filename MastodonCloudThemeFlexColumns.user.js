// ==UserScript==
// @name         Mastodon cloud theme - Flex columns
// @namespace    http://arthurlacoste.com
// @version      0.1
// @description  Change default Mastodon Theme and adding flex columns
// @author       Arthur Lacoste
// @match        *://*/web/*

// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

GM_addStyle ( "div.column { flex-grow: 1; flex-shrink: 1;}");	
                                 
})();

