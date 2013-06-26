jQuery.noConflict();
jQuery(document).ready(function($){
var i=0;
while (i<=10) {
jQuery('#myRapidContent'+i+' script').remove();
jQuery('#myRapidContent'+i).prepend('<div id="rapidContainer"+i>');
jQuery('#rapidContainer'+i).load(RwGet.baseurl("rc/","rc" +i + ".html"));

i++;
}

});
