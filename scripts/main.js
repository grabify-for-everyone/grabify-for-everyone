const generate = function() {
  var url = document.getElementById("url").value
  var xhr = new XMLHttpRequest()
  xhr.open('POST', 'https://grabify-webserver.tympanicblock612.repl.co/generate')
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.responseType = 'json'
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr.response)
      window.resp = xhr.response
    } else {
      console.error(xhr.response)
    }
  };
  xhr.onerror = () => {
    console.error('An error occurred while making the request')
  };
  const body = JSON.stringify({"url":url})
  xhr.send(body)
  
  var label = document.getElementById("reLinkLabel")
  label.style.visibility = "visible"
  var p = document.getElementById("reLink")
  p.style.visibility = "visible"
  p.innerText = window.resp["url"]
}
const view = function() {
  var sessionId = document.getElementById("view").value
  var xhr = new XMLHttpRequest()
  xhr.open("GET", `https://grabify-webserver.tympanicblock612.repl.co/get/${sessionId}`)
  xhr.responseType = 'json'
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr.response)
      window.view = xhr.response
    } else {
      console.error(xhr.response)
    }
  };
  xhr.onerror = () => {
    console.error('An error occurred while making the request')
  };
  xhr.send()
  
  var pLabel = document.getElementById("pLabel")
  pLabel.style.visibility = "visible"
  var p = document.getElementById("paragraph")
  p.style.visibility = "visible"
  p.innerText = window.view
}
window.onload = function() {
  var label = document.getElementById("reLinkLabel")
  label.style.visibility = "hidden"
  var p = document.getElementById("reLink")
  p.style.visibility = "hidden"
  var anotherp = document.getElementById("paragraph")
  anotherp.style.visibility = "hidden"
  var pLabel = document.getElementById("pLabel")
  pLabel.style.visibility = "hidden"
}
