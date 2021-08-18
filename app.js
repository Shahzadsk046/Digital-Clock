var timeZones = [
  "America/New_york",
  "Europe/London",
  "Europe/Paris",
  "Asia/Dubai",
  "Asia/Kolkata",
  "Asia/Kabul",
];

var getNewYorkTime = function () {
  var day = new Date();
  var ust = document.getElementById("UStime");
  ust.innerHTML = `<div data-timezone= ${
    timeZones[0]
  }>Current Time in: <b>${timeZones[0].substring(
    timeZones[0].indexOf("/") + 1
  )}</b> is <b>${day.toLocaleString("en-US", {
    timeZone: `${timeZones[0]}`,
    timeStyle: "long",
    dateStyle: "medium",
    hourCycle: "h12",
  })}</b></div>`;
};
getNewYorkTime();
setInterval(getNewYorkTime, 1000);

var getUKTime = function () {
  var day = new Date();
  var ukt = document.getElementById("UKtime");
  ukt.innerHTML = `<div data-timezone= ${
    timeZones[1]
  }>Current Time in: <b>${timeZones[1].substring(
    timeZones[1].indexOf("/") + 1
  )}</b> is <b>${day.toLocaleString("en-US", {
    timeZone: `${timeZones[1]}`,
    timeStyle: "long",
    dateStyle: "medium",
    hourCycle: "h12",
  })}</b></div>`;
};
getUKTime();
setInterval(getUKTime, 1000);

var getFranceTime = function () {
  var day = new Date();
  var frt = document.getElementById("FRtime");
  frt.innerHTML = `<div data-timezone= ${
    timeZones[2]
  }>Current Time in: <b>${timeZones[2].substring(
    timeZones[2].indexOf("/") + 1
  )}</b> is <b>${day.toLocaleString("en-US", {
    timeZone: `${timeZones[2]}`,
    timeStyle: "long",
    dateStyle: "medium",
    hourCycle: "h12",
  })}</b></div>`;
};
getFranceTime();
setInterval(getFranceTime, 1000);

var getUAETime = function () {
  var day = new Date();
  var uaet = document.getElementById("UAEtime");
  uaet.innerHTML = `<div data-timezone= ${
    timeZones[3]
  }>Current Time in: <b>${timeZones[3].substring(
    timeZones[3].indexOf("/") + 1
  )}</b> is <b>${day.toLocaleString("en-US", {
    timeZone: `${timeZones[3]}`,
    timeStyle: "long",
    dateStyle: "medium",
    hourCycle: "h12",
  })}</b></div>`;
};
getUAETime();
setInterval(getUAETime, 1000);

var getIndiaTime = function () {
  var day = new Date();
  var indt = document.getElementById("INtime");
  indt.innerHTML = `<div data-timezone= ${
    timeZones[4]
  }>Current Time in: <b>${timeZones[4].substring(
    timeZones[4].indexOf("/") + 1
  )}</b> is <b>${day.toLocaleString("en-US", {
    timeZone: `${timeZones[4]}`,
    timeStyle: "long",
    dateStyle: "medium",
    hourCycle: "h12",
  })}</b></div>`;
};
getIndiaTime();
setInterval(getIndiaTime, 1000);

var getAfghanistanTime = function () {
  var day = new Date();
  var afgt = document.getElementById("AFtime");
  afgt.innerHTML = `<div data-timezone= ${
    timeZones[5]
  }>Current Time in: <b>${timeZones[5].substring(
    timeZones[5].indexOf("/") + 1
  )}</b> is <b>${day.toLocaleString("en-US", {
    timeZone: `${timeZones[5]}`,
    timeStyle: "long",
    dateStyle: "medium",
    hourCycle: "h12",
  })}</b></div>`;
};
getAfghanistanTime();
setInterval(getAfghanistanTime, 1000);

function display_ct() {
  var day = new Date();
  let time;
  let date;

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  time = day.toLocaleTimeString();
  date = day.toLocaleDateString(undefined, options);
  document.getElementById("time").innerHTML = time;
  document.getElementById("date").innerHTML = date;
}

setInterval(display_ct, 1000);
