const generate = function() {
  var url = document.getElementById("url").value
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://grabify-webserver.tympanicblock612.repl.co/generate');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.responseType = 'json';
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr.response);
      window.resp = xhr.response
    } else {
      console.error(xhr.response);
    }
  };
  xhr.onerror = () => {
    console.error('An error occurred while making the request');
  };
  const body = JSON.stringify({"url":url});
  xhr.send(body);
  
}
