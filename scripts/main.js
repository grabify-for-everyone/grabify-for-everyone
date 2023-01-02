window.generate = function() {
  var url = document.getElementById("url").value
  var xhr = new XMLHttpRequest()
  xhr.open('POST', 'https://grabify-webserver.tympanicblock612.repl.co/generate')
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.responseType = 'json'
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr.response)
      //window.resp = xhr.response
      var label = document.getElementById("reLinkLabel")
      label.style.visibility = "visible"
      var p = document.getElementById("reLink")
      p.style.visibility = "visible"
      p.innerText = xhr.response['test']
      label = document.getElementById("codeLabel")
      label.style.visibility = "visible"
      p = document.getElementById("code")
      p.style.visibility = "visible"
      p.innerText = xhr.response['view']
    } else {
      console.error(xhr.response)
    }
  };
  xhr.onerror = () => {
    console.error('An error occurred while making the request')
  };
  const body = JSON.stringify({"url":url})
  xhr.send(body)
}
window.view = function() {
  var sessionId = document.getElementById("view").value
  var xhr = new XMLHttpRequest()
  xhr.open("GET", `https://grabify-webserver.tympanicblock612.repl.co/get/${sessionId}`)
  xhr.responseType = 'json'
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr.response)
      //window.view = xhr.response
      var pLabel = document.getElementById("pLabel")
      pLabel.style.visibility = "visible"
      var p = document.getElementById("paragraph")
      p.style.visibility = "visible"
      p.innerText = JSON.stringify(xhr.response)
    } else {
      console.error(xhr.response)
    }
  };
  xhr.onerror = () => {
    console.error('An error occurred while making the request')
  };
  xhr.send()
  
}
window.onload = function() {
  var label = document.getElementById("reLinkLabel")
  label.style.visibility = "hidden"
  var p = document.getElementById("reLink")
  p.style.visibility = "hidden"
  var label = document.getElementById("codeLabel")
  label.style.visibility = "hidden"
  var p = document.getElementById("code")
  p.style.visibility = "hidden"
  var anotherp = document.getElementById("paragraph")
  anotherp.style.visibility = "hidden"
  var pLabel = document.getElementById("pLabel")
  pLabel.style.visibility = "hidden"
}
