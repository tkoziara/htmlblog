/* https://www.w3schools.com/howto/howto_html_include.asp */
function w3include() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /* Search for elements with a certain atrribute */
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
	  /* Remove the attribute, and call this function once more */
          elmnt.removeAttribute("w3-include-html");
          w3include(); } }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function */
      return;
    }
  }
  /* Move to anchor link if set */
  if(location.hash) location.href = location.hash;
}

/* https://stackoverflow.com/questions/38837835/include-html-in-another-html-file */
function jqinclude() {
  $(function(){
    $('[jq-include-html]').each(function (){
      var jqi = $(this).attr("jq-include-html")
      $(this).load(jqi, function() {
        if(location.hash) location.href = location.hash;
      });
    });
  });
}

/* https://www.michalspacek.com/using-javascript-to-modify-urls-and-hide-fbclid */
(function() {
  var param = 'fbclid';
  if (location.search.indexOf(param + '=') !== -1) {
    var replace = '';
    try {
      var url = new URL(location);
      url.searchParams.delete(param);
      replace = url.href;
    } catch (ex) {
      var regExp = new RegExp('[?&]' + param + '=.*$');
      replace = location.search.replace(regExp, '');
      replace = location.pathname + replace + location.hash;
   }
   history.replaceState(null, '', replace);
  }
})();
