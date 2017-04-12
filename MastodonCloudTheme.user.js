// ==UserScript==
// @name         Mastodon cloud theme
// @namespace    http://arthurlacoste.com
// @version      0.1
// @description  Change default Mastodon Theme
// @author       Arthur Lacoste
// @match        *://*/web/*

// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    
    
// espace de commentaire
GM_addStyle ( ".drawer__inner { background: #c9cfe4 !important; }");

// bord bas des toots
GM_addStyle ( ".status {    border-bottom: 1px solid #c9cfe4; } ");

// olones
GM_addStyle ( ".column>.scrollable, .column, .detailed-status, .detailed-status__action-bar{background: #c9cfe4;}"); 

// couleur du texte du statut
GM_addStyle ( ".status__content {color: #393f4f  !important;}"); 
    
// La scrollbar
GM_addStyle ( "::-webkit-scrollbar-thumb { background: #8088a6;}");   
    
// Couleur de fond
GM_addStyle ( "body.app-body, body, .ui { background: #e1e4ec !important;}");
        
// Recherche
GM_addStyle ( ".search__input { background: #c9cfe4; color: #9baec8; } ");

// username tooter
GM_addStyle ( ".status__display-name strong, .account__display-name strong { color: #393f4f; }");
    
// liens   
GM_addStyle ( ".status__content a, .reply-indicator__content a {   color: #8190a6; }");
    
// retirer les barres dans le statuts détaillés
GM_addStyle ( ".detailed-status__action-bar, .account { border-top:0px;border-bottom: 0px;}");
   
// fond profil
GM_addStyle ( ".account__header>div {background: rgba(201, 207, 228,0.7);}");
    
// profil, décompte followers
GM_addStyle ( ".account__action-bar__tab strong { color: #606984;}");
                                 
})();

