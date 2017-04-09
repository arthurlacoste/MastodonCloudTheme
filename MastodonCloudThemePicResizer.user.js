// ==UserScript==
// @name         Mastodon Cloud Theme Pic Resizer
// @namespace    http://arthurlacoste.com
// @version      0.1
// @description  Change default Mastodon Theme Pic Resizer
// @author       Arthur Lacoste (aidé de @Darathor@mastodon.social)
// @match        *://*/web*

// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    
GM_addStyle ( `	
   .status__content + div:not(:last-child) {
    height: 300px !important;
  }
  
  .status__content + div:not(:last-child) a {
    background-size: contain !important;
  }

  .status__content + div:not(:last-child) video {
    transform: translateY(0%) !important;
    object-fit: scale-down !important;
  }
`);
                                 
})();

