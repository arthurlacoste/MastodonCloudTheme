// ==UserScript==
// @name         Mastodon Cloud Theme Cute♥Witches
// @namespace    http://amburuhime.free.fr 
// @version      0.1
// @description  Change default Mastodon Theme to a Cute Witches pink theme
// @author       @Amburu@witches.town
// @match        *://*/web*

// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    
GM_addStyle ( `	
 .ui {
    background-color: #fff;
   background-image:url('http://oi63.tinypic.com/153s61g.jpg');
   background-position:top right;
   background-repeat:repeat-x;
   background-attachment:fixed;
   background-size:contain;
  }
  .column>.scrollable {
	background: transparent;
  }

  .drawer__inner {
    background-color:transparent;
  }
  .drawer__header, .column-header, .tabs-bar, .button:hover{
    background-color:#ff71c2;
    border-radius:10px; 
  }
  .drawer__tab{
    color:#fff;
  }
  .column-back-button, .column-icon collapsable-collapsed, .column-icon, .column-icon collapsable-collapsed{
    background-color:transparent;
    color:#fff;
  }
  .column, .column-link{
    background-color:transparent;
  }
  .scrollable{
    margin:5px;
  }
  .status__display-name, .account {
    padding-bottom:2px;
    border-bottom:#ff71c2 dashed 2px;
  }
  .display-name {
    color:#ffbbe2;
  }
  .status.muted, .tabs-bar__link, .tabs-bar__link.active, .detailed-status__action-bar{
    border:none;
  }
  .status__relative-time{
    color:#72445e;
  }
  .drawer__header a:hover, .column-link:hover, .static-content.getting-started span, .tabs-bar__link:hover, .tabs-bar__link:focus, .tabs-bar__link:active, .reply-indicator, .button, .detailed-status, detailed-status__action-bar {
    background-color:rgb(78, 10, 60);
  }
  .account__header > div{
    background-color:rgb(78, 10, 60,0.9);
  }
  .autosuggest-textarea__suggestions{
    box-shadow: 0 0 15px rgba(78, 10, 60,0.4);
    background: rgb(78, 10, 60);
  }
  .autosuggest-textarea__suggestions__item.selected{
    background-color:#000;
  }
  .status, .search__input{
    background-color:rgb(78, 10, 60);
    border-radius:10px;
    margin:5px auto 10px auto;
    opacity:0.9;
    color:#fff;
  }
  .status, .status__display-name, .tabs-bar__link.active, .reply-indicator__content{
    color:#fff;
  }
  .status.muted strong, .status.muted p, .icon-button, .reply-indicator__content a {
    color:#c5c5c5;
  }
  .mention hashtag, .status__content a{
    color:#fed78a;
  }
  time{
    color:#dadada;
  }
  .status__prepend, .status__prepend a.status__display-name strong, .notification__message, .fa.fa-fw.fa-retweet, .fa.fa-fw.fa-user-plus{
    color:rgb(78, 10, 60);
    font-weight: bold;
  }
  .fa.fa-fw.fa-home, .fa.fa-fw.fa-photo, .getting-started a{
    color:#fff;
  }
  a.status__display-name.muted{
    border:none;
  }
  .status__avatar{
    border:solid 2px #ff71c2;
    border-radius:5px;
  }
  ::-webkit-scrollbar-thumb { 
    background-color: rgb(78, 10, 60);
  }
`);
	
})();

