// ==UserScript==
// @name         Mastodon cloud theme
// @namespace    http://arthurlacoste.com
// @version      0.2
// @description  Change default Mastodon Theme
// @author       Arthur Lacoste
// @match        *://*/web/*

// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    
    
// espace de commentaire
GM_addStyle ( `

/* comments */
.drawer__inner { 
	background: #c9cfe4 !important; 
}

/* bottom of toots */
.status {   
	border-bottom: 1px solid #c9cfe4; 
} 

/* columns */
.column>.scrollable, .column, .detailed-status, .detailed-status__action-bar{
	background: #c9cfe4;
}

/* couleur du texte du statut */
.status__content {
	color: #393f4f  !important;
}
    
/* La scrollbar */
::-webkit-scrollbar-thumb { 
	background: #8088a6;
}   
    
/* Couleur de fond */
body.app-body, body, .ui { 
	background: #e1e4ec !important;
}
        
/* Recherche */
.search__input { 
	background: #c9cfe4; color: #9baec8; 
}

/* username tooter */
.status__display-name strong, .account__display-name strong { 
	color: #393f4f; 
}
    
/* liens */
.status__content a, .reply-indicator__content a {   
	color: #8190a6; 
}
    
/* retirer les barres dans le statuts détaillés */
.detailed-status__action-bar, .account { 
	border-top:0px;
	border-bottom: 0px;
}
   
/* fond profil */
.account__header>div {
	background: rgba(201, 207, 228,0.7);
}
    
/* profil, décompte followers */
.account__action-bar__tab strong { 
	color: #606984;
}

/* description profil */
.account__header .account__header__content {
    color: #1f232b;
}

`);
                                 
})();

