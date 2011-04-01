/*
 * jQuery replaceText - v1.1 - 11/21/2009
 * http://benalman.com/projects/jquery-replacetext-plugin/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($){$.fn.replaceText=function(b,a,c){return this.each(function(){var f=this.firstChild,g,e,d=[];if(f){do{if(f.nodeType===3){g=f.nodeValue;e=g.replace(b,a);if(e!==g){if(!c&&/</.test(e)){$(f).before(e);d.push(f)}else{f.nodeValue=e}}}}while(f=f.nextSibling)}d.length&&$(d).remove()})}})(jQuery);

function imageTagForString(str) {
  // TODO what is the desired behavior if the image doesn't exist
  
  return "<img alt='" + str + "' title='" + str + "' src='https://github.com/flogic/emogc/raw/develop/images/" + str + ".png' />";
}

function emogcize() {
  $('p').replaceText(/:([a-z_-]|[0-9])*:/gi, emogcize)
}
