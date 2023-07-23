function getOSName() {
  var userAgent = navigator.userAgent;
  var osName = "Неизвестная ОС";
  
  if (userAgent.indexOf("Win") != -1) {
    osName = "Windows";
    if (userAgent.indexOf("Windows NT 10.0") != -1) {
      osName += " 10";
    } else if (userAgent.indexOf("Windows NT 6.3") != -1) {
      osName += " 8.1";
    } else if (userAgent.indexOf("Windows NT 6.2") != -1) {
      osName += " 8";
    } else if (userAgent.indexOf("Windows NT 6.1") != -1) {
      osName += " 7";
    } else if (userAgent.indexOf("Windows NT 6.0") != -1) {
      osName += " Vista";
    } else if (userAgent.indexOf("Windows NT 5.1") != -1 || userAgent.indexOf("Windows XP") != -1) {
      osName += " XP";
    }
  } else if (userAgent.indexOf("Mac") != -1) {
    osName = "Macintosh";
  } else if (userAgent.indexOf("Linux") != -1) {
    osName = "Linux";
  } else if (userAgent.indexOf("Android") != -1) {
    osName = "Android";
  } else if (userAgent.indexOf("like Mac") != -1) {
    osName = "iOS";
  } else if (userAgent.indexOf("FreeBSD") != -1) {
    osName = "FreeBSD";
  } else if (userAgent.indexOf("OpenBSD") != -1) {
    osName = "OpenBSD";
  } else if (userAgent.indexOf("NetBSD") != -1) {
    osName = "NetBSD";
  } else if (userAgent.indexOf("SunOS") != -1) {
    osName = "Solaris";
  } else if (userAgent.indexOf("OS/2") != -1) {
    osName = "OS/2";
  } else if (userAgent.indexOf("BeOS") != -1) {
    osName = "BeOS";
  } else if (userAgent.indexOf("Chrome OS") != -1) {
    osName = "Chrome OS";
  }

  return osName;
}

function getBrowserInfo() {
  var userAgent = navigator.userAgent;
  var browserInfo = "Браузер: Неизвестный";

  if (userAgent.indexOf("Firefox") != -1) {
    browserInfo = "Браузер: Firefox";
  } else if (userAgent.indexOf("OPR") != -1 || userAgent.indexOf("Opera") != -1) {
    browserInfo = "Браузер: Opera";
  } else if (userAgent.indexOf("Edg") != -1) {
    browserInfo = "Браузер: Microsoft Edge";
  } else if (userAgent.indexOf("Chrome") != -1) {
    browserInfo = "Браузер: Chrome";
  } else if (userAgent.indexOf("Safari") != -1) {
    browserInfo = "Браузер: Safari";
  }

  return browserInfo;
}

document.write('Твоя ОС: ' + getOSName() + '<br>');
document.write(getBrowserInfo() + '<br>');
document.write('Текущее время: ' + new Date().toLocaleString());