const generate = function() {
  
  var url = document.getElementById("url").value
  var xhr = new XMLHttpRequest();
  fetch("https://ip.seeip.org/json/").then(res => res.json()).then(data => Ip = data['ip'])
  xhr.open("POST", "https://grabify-webserver.tympanicblock612.repl.co/generate", true)
  xhr.send(JSON.stringify({"url":url, "ip":Ip}))
}
