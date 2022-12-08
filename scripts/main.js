const generate = function() {
  
  var url = document.getElementById("url").value
  var xhr = new XMLHttpRequest();
  
  xhr.open("POST", "webserver", true)
  xhr.send(url)
}
