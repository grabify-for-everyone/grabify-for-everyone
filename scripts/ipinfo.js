function ipinfo() {
  fetch("https://ip.seeip.org/json/").then(res => res.json()).then(data => Ip = data['ip'])
  fetch(`https://vpnapi.io/api/${Ip}/`).then(res => res.json()).then(data => IpLog = data)
  //fetch(`https://ipapi.co/${Ip}/json/`).then(res => res.json()).then(data => IpLog2 = data)
  
  return IpLog
}
