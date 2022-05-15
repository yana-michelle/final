function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("chan-top").innerHTML =
      this.responseText;
    }
}