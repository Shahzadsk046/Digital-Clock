var timeZones = [
  // "Europe/Andorra",
  "America/New_york",
  "Europe/London",
  "Europe/Paris",
  "Asia/Dubai",
  "Asia/Kolkata",
  "Asia/Kabul",
  // "Europe/Tirane",
  // "Asia/Yerevan",
  // "Antarctica/Casey",
  // "Antarctica/Davis",
  // "Antarctica/DumontDUrville", // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
  // "Antarctica/Mawson",
  // "Antarctica/Palmer",
  // "Antarctica/Rothera",
  // "Antarctica/Syowa",
  // "Antarctica/Troll",
  // "Antarctica/Vostok",
  // "America/Argentina/Buenos_Aires",
  // "America/Argentina/Cordoba",
  // "America/Argentina/Salta",
  // "America/Argentina/Jujuy",
  // "America/Argentina/Tucuman",
  // "America/Argentina/Catamarca",
  // "America/Argentina/La_Rioja",
  // "America/Argentina/San_Juan",
  // "America/Argentina/Mendoza",
  // "America/Argentina/San_Luis",
  // "America/Argentina/Rio_Gallegos",
  // "America/Argentina/Ushuaia",
  // "Pacific/Pago_Pago",
  // "Europe/Vienna",
  // "Australia/Lord_Howe",
  // "Antarctica/Macquarie",
  // "Australia/Hobart",
  // "Australia/Currie",
  // "Australia/Melbourne",
  // "Australia/Sydney",
  // "Australia/Broken_Hill",
  // "Australia/Brisbane",
  // "Australia/Lindeman",
  // "Australia/Adelaide",
  // "Australia/Darwin",
  // "Australia/Perth",
  // "Australia/Eucla",
  // "Asia/Baku",
  // "America/Barbados",
  // "Asia/Dhaka",
  // "Europe/Brussels",
  // "Europe/Sofia",
  // "Atlantic/Bermuda",
  // "Asia/Brunei",
  // "America/La_Paz",
  // "America/Noronha",
  // "America/Belem",
  // "America/Fortaleza",
  // "America/Recife",
  // "America/Araguaina",
  // "America/Maceio",
  // "America/Bahia",
  // "America/Sao_Paulo",
  // "America/Campo_Grande",
  // "America/Cuiaba",
  // "America/Santarem",
  // "America/Porto_Velho",
  // "America/Boa_Vista",
  // "America/Manaus",
  // "America/Eirunepe",
  // "America/Rio_Branco",
  // "America/Nassau",
  // "Asia/Thimphu",
  // "Europe/Minsk",
  // "America/Belize",
  // "America/St_Johns",
  // "America/Halifax",
  // "America/Glace_Bay",
  // "America/Moncton",
  // "America/Goose_Bay",
  // "America/Blanc-Sablon",
  // "America/Toronto",
  // "America/Nipigon",
  // "America/Thunder_Bay",
  // "America/Iqaluit",
  // "America/Pangnirtung",
  // "America/Atikokan",
  // "America/Winnipeg",
  // "America/Rainy_River",
  // "America/Resolute",
  // "America/Rankin_Inlet",
  // "America/Regina",
  // "America/Swift_Current",
  // "America/Edmonton",
  // "America/Cambridge_Bay",
  // "America/Yellowknife",
  // "America/Inuvik",
  // "America/Creston",
  // "America/Dawson_Creek",
  // "America/Fort_Nelson",
  // "America/Vancouver",
  // "America/Whitehorse",
  // "America/Dawson",
  // "Indian/Cocos",
  // "Europe/Zurich",
  // "Africa/Abidjan",
  // "Pacific/Rarotonga",
  // "America/Santiago",
  // "America/Punta_Arenas",
  // "Pacific/Easter",
  // "Asia/Shanghai",
  // "Asia/Urumqi",
  // "America/Bogota",
  // "America/Costa_Rica",
  // "America/Havana",
  // "Atlantic/Cape_Verde",
  // "America/Curacao",
  // "Indian/Christmas",
  // "Asia/Nicosia",
  // "Asia/Famagusta",
  // "Europe/Prague",
  // "Europe/Berlin",
  // "Europe/Copenhagen",
  // "America/Santo_Domingo",
  // "Africa/Algiers",
  // "America/Guayaquil",
  // "Pacific/Galapagos",
  // "Europe/Tallinn",
  // "Africa/Cairo",
  // "Africa/El_Aaiun",
  // "Europe/Madrid",
  // "Africa/Ceuta",
  // "Atlantic/Canary",
  // "Europe/Helsinki",
  // "Pacific/Fiji",
  // "Atlantic/Stanley",
  // "Pacific/Chuuk",
  // "Pacific/Pohnpei",
  // "Pacific/Kosrae",
  // "Atlantic/Faroe",
  // "Europe/Paris",
  // "Europe/London",
  // "Asia/Tbilisi",
  // "America/Cayenne",
  // "Africa/Accra",
  // "Europe/Gibraltar",
  // "America/Godthab",
  // "America/Danmarkshavn",
  // "America/Scoresbysund",
  // "America/Thule",
  // "Europe/Athens",
  // "Atlantic/South_Georgia",
  // "America/Guatemala",
  // "Pacific/Guam",
  // "Africa/Bissau",
  // "America/Guyana",
  // "Asia/Hong_Kong",
  // "America/Tegucigalpa",
  // "America/Port-au-Prince",
  // "Europe/Budapest",
  // "Asia/Jakarta",
  // "Asia/Pontianak",
  // "Asia/Makassar",
  // "Asia/Jayapura",
  // "Europe/Dublin",
  // "Asia/Jerusalem",
  // "Asia/Kolkata",
  // "Indian/Chagos",
  // "Asia/Baghdad",
  // "Asia/Tehran",
  // "Atlantic/Reykjavik",
  // "Europe/Rome",
  // "America/Jamaica",
  // "Asia/Amman",
  // "Asia/Tokyo",
  // "Africa/Nairobi",
  // "Asia/Bishkek",
  // "Pacific/Tarawa",
  // "Pacific/Enderbury",
  // "Pacific/Kiritimati",
  // "Asia/Pyongyang",
  // "Asia/Seoul",
  // "Asia/Almaty",
  // "Asia/Qyzylorda",
  // "Asia/Qostanay", // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
  // "Asia/Aqtobe",
  // "Asia/Aqtau",
  // "Asia/Atyrau",
  // "Asia/Oral",
  // "Asia/Beirut",
  // "Asia/Colombo",
  // "Africa/Monrovia",
  // "Europe/Vilnius",
  // "Europe/Luxembourg",
  // "Europe/Riga",
  // "Africa/Tripoli",
  // "Africa/Casablanca",
  // "Europe/Monaco",
  // "Europe/Chisinau",
  // "Pacific/Majuro",
  // "Pacific/Kwajalein",
  // "Asia/Yangon",
  // "Asia/Ulaanbaatar",
  // "Asia/Hovd",
  // "Asia/Choibalsan",
  // "Asia/Macau",
  // "America/Martinique",
  // "Europe/Malta",
  // "Indian/Mauritius",
  // "Indian/Maldives",
  // "America/Mexico_City",
  // "America/Cancun",
  // "America/Merida",
  // "America/Monterrey",
  // "America/Matamoros",
  // "America/Mazatlan",
  // "America/Chihuahua",
  // "America/Ojinaga",
  // "America/Hermosillo",
  // "America/Tijuana",
  // "America/Bahia_Banderas",
  // "Asia/Kuala_Lumpur",
  // "Asia/Kuching",
  // "Africa/Maputo",
  // "Africa/Windhoek",
  // "Pacific/Noumea",
  // "Pacific/Norfolk",
  // "Africa/Lagos",
  // "America/Managua",
  // "Europe/Amsterdam",
  // "Europe/Oslo",
  // "Asia/Kathmandu",
  // "Pacific/Nauru",
  // "Pacific/Niue",
  // "Pacific/Auckland",
  // "Pacific/Chatham",
  // "America/Panama",
  // "America/Lima",
  // "Pacific/Tahiti",
  // "Pacific/Marquesas",
  // "Pacific/Gambier",
  // "Pacific/Port_Moresby",
  // "Pacific/Bougainville",
  // "Asia/Manila",
  // "Asia/Karachi",
  // "Europe/Warsaw",
  // "America/Miquelon",
  // "Pacific/Pitcairn",
  // "America/Puerto_Rico",
  // "Asia/Gaza",
  // "Asia/Hebron",
  // "Europe/Lisbon",
  // "Atlantic/Madeira",
  // "Atlantic/Azores",
  // "Pacific/Palau",
  // "America/Asuncion",
  // "Asia/Qatar",
  // "Indian/Reunion",
  // "Europe/Bucharest",
  // "Europe/Belgrade",
  // "Europe/Kaliningrad",
  // "Europe/Moscow",
  // "Europe/Simferopol",
  // "Europe/Kirov",
  // "Europe/Astrakhan",
  // "Europe/Volgograd",
  // "Europe/Saratov",
  // "Europe/Ulyanovsk",
  // "Europe/Samara",
  // "Asia/Yekaterinburg",
  // "Asia/Omsk",
  // "Asia/Novosibirsk",
  // "Asia/Barnaul",
  // "Asia/Tomsk",
  // "Asia/Novokuznetsk",
  // "Asia/Krasnoyarsk",
  // "Asia/Irkutsk",
  // "Asia/Chita",
  // "Asia/Yakutsk",
  // "Asia/Khandyga",
  // "Asia/Vladivostok",
  // "Asia/Ust-Nera",
  // "Asia/Magadan",
  // "Asia/Sakhalin",
  // "Asia/Srednekolymsk",
  // "Asia/Kamchatka",
  // "Asia/Anadyr",
  // "Asia/Riyadh",
  // "Pacific/Guadalcanal",
  // "Indian/Mahe",
  // "Africa/Khartoum",
  // "Europe/Stockholm",
  // "Asia/Singapore",
  // "America/Paramaribo",
  // "Africa/Juba",
  // "Africa/Sao_Tome",
  // "America/El_Salvador",
  // "Asia/Damascus",
  // "America/Grand_Turk",
  // "Africa/Ndjamena",
  // "Indian/Kerguelen",
  // "Asia/Bangkok",
  // "Asia/Dushanbe",
  // "Pacific/Fakaofo",
  // "Asia/Dili",
  // "Asia/Ashgabat",
  // "Africa/Tunis",
  // "Pacific/Tongatapu",
  // "Europe/Istanbul",
  // "America/Port_of_Spain",
  // "Pacific/Funafuti",
  // "Asia/Taipei",
  // "Europe/Kiev",
  // "Europe/Uzhgorod",
  // "Europe/Zaporozhye",
  // "Pacific/Wake",
  // "America/New_York",
  // "America/Detroit",
  // "America/Kentucky/Louisville",
  // "America/Kentucky/Monticello",
  // "America/Indiana/Indianapolis",
  // "America/Indiana/Vincennes",
  // "America/Indiana/Winamac",
  // "America/Indiana/Marengo",
  // "America/Indiana/Petersburg",
  // "America/Indiana/Vevay",
  // "America/Chicago",
  // "America/Indiana/Tell_City",
  // "America/Indiana/Knox",
  // "America/Menominee",
  // "America/North_Dakota/Center",
  // "America/North_Dakota/New_Salem",
  // "America/North_Dakota/Beulah",
  // "America/Denver",
  // "America/Boise",
  // "America/Phoenix",
  // "America/Los_Angeles",
  // "America/Anchorage",
  // "America/Juneau",
  // "America/Sitka",
  // "America/Metlakatla",
  // "America/Yakutat",
  // "America/Nome",
  // "America/Adak",
  // "Pacific/Honolulu",
  // "America/Montevideo",
  // "Asia/Samarkand",
  // "Asia/Tashkent",
  // "America/Caracas",
  // "Asia/Ho_Chi_Minh",
  // "Pacific/Efate",
  // "Pacific/Wallis",
  // "Pacific/Apia",
  // "Africa/Johannesburg",
];

// function display_c() {
//   var refresh = 1000;
//   mytime = setTimeout("display_ct()", refresh);
// }

{/* <span id="UStime"></span>
<span id="UKtime"></span>
<span id="FRtime"></span>
<span id="UAEtime"></span>
<span id="INtime"></span>
<span id="AFtime"></span> */}

// var day = new Date();


// function display_dct(){

var getNewYorkTime = function(){
  var day = new Date();
  var ust = document.getElementById("UStime");
  // ust.innerHTML = new Date().toLocaleString("en-US", {timeZone: `${timeZones[0]}`, timeStyle: 'medium', hourCycle: 'h24'});
  ust.innerHTML = `<div data-timezone= ${timeZones[0]}>Current Time in: <b>${timeZones[0].substring(timeZones[0].indexOf("/") + 1)}</b> is <b>${day.toLocaleString()}</b></div>`;
}
getNewYorkTime();
setInterval(getNewYorkTime, 1000);

var getUKTime = function(){
  var day = new Date();
  var ukt = document.getElementById("UKtime");
  // ukt.innerHTML = new Date().toLocaleString("en-US", {timeZone: `${timeZones[0]}`, timeStyle: 'medium', hourCycle: 'h24'});
  ukt.innerHTML = `<div data-timezone= ${timeZones[1]}>Current Time in: <b>${timeZones[1].substring(timeZones[1].indexOf("/") + 1)}</b> is <b>${day.toLocaleString()}</b></div>`;
}
getUKTime();
setInterval(getUKTime, 1000);

var getFranceTime = function(){
  var day = new Date();
  var frt = document.getElementById("FRtime");
  // frt.innerHTML = new Date().toLocaleString("en-US", {timeZone: `${timeZones[0]}`, timeStyle: 'medium', hourCycle: 'h24'});
  frt.innerHTML = `<div data-timezone= ${timeZones[2]}>Current Time in: <b>${timeZones[2].substring(timeZones[2].indexOf("/") + 1)}</b> is <b>${day.toLocaleString()}</b></div>`;
}
getFranceTime();
setInterval(getFranceTime, 1000);

var getUAETime = function(){
  var day = new Date();
  var uaet = document.getElementById("UAEtime");
  // uaet.innerHTML = new Date().toLocaleString("en-US", {timeZone: `${timeZones[0]}`, timeStyle: 'medium', hourCycle: 'h24'});
  uaet.innerHTML = `<div data-timezone= ${timeZones[3]}>Current Time in: <b>${timeZones[3].substring(timeZones[3].indexOf("/") + 1)}</b> is <b>${day.toLocaleString()}</b></div>`;
}
getUAETime();
setInterval(getUAETime, 1000);

var getIndiaTime = function(){
  var day = new Date();
  var indt = document.getElementById("INtime");
  // indt.innerHTML = new Date().toLocaleString("en-US", {timeZone: `${timeZones[0]}`, timeStyle: 'medium', hourCycle: 'h24'});
  indt.innerHTML = `<div data-timezone= ${timeZones[4]}>Current Time in: <b>${timeZones[4].substring(timeZones[4].indexOf("/") + 1)}</b> is <b>${day.toLocaleString()}</b></div>`;
}
getIndiaTime();
setInterval(getIndiaTime, 1000);

var getAfghanistanTime = function(){
  var day = new Date();
  var afgt = document.getElementById("AFtime");
  // afgt.innerHTML = new Date().toLocaleString("en-US", {timeZone: `${timeZones[0]}`, timeStyle: 'medium', hourCycle: 'h24'});
  afgt.innerHTML = `<div data-timezone= ${timeZones[5]}>Current Time in: <b>${timeZones[5].substring(timeZones[5].indexOf("/") + 1)}</b> is <b>${day.toLocaleString()}</b></div>`;
}
getAfghanistanTime();
setInterval(getAfghanistanTime, 1000);

  // var ust = document.getElementById("UStime");
  // var ukt = document.getElementById("UKtime");
  // var frt = document.getElementById("FRtime");
  // var uaet = document.getElementById("UAEtime");
  // var indt = document.getElementById("INtime");
  // var aft = document.getElementById("AFtime");
  // const timeZones = aryIannaTimeZones;
  // console.log(timeZones[0]);
  // var strTime = day.toLocaleString("en-US", {
  //   timeZone: `${timeZones}`,
  // });

  // // var div = document.createElement('div');
  // ust.innerHTML = `<div data-timezone= ${timeZones[0]}>Current Time in: <b>${timeZones[0].substring(timeZones[0].indexOf("/") + 1)}</b> is <b>${strTime}</b></div>`;
  // ukt.innerHTML = `<div data-timezone= ${timeZones[1]}>Current Time in: <b>${timeZones[1].substring(timeZones[1].indexOf("/") + 1)}</b> is <b>${strTime}</b></div>`;
  // frt.innerHTML = `<div data-timezone= ${timeZones[2]}>Current Time in: <b>${timeZones[2].substring(timeZones[2].indexOf("/") + 1)}</b> is <b>${strTime}</b></div>`;
  // uaet.innerHTML = `<div data-timezone= ${timeZones[3]}>Current Time in: <b>${timeZones[3].substring(timeZones[3].indexOf("/") + 1)}</b> is <b>${strTime}</b></div>`;
  // indt.innerHTML = `<div data-timezone= ${timeZones[4]}>Current Time in: <b>${timeZones[4].substring(timeZones[4].indexOf("/") + 1)}</b> is <b>${strTime}</b></div>`;
  // aft.innerHTML = `<div data-timezone= ${timeZones[5]}>Current Time in: <b>${timeZones[5].substring(timeZones[5].indexOf("/") + 1)}</b> is <b>${strTime}</b></div>`;
  // ust.appendChild(div);
  // })
// }
// }

// display_dct();
// setInterval(display_dct, 1000)

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
  // day = new Date();
  // time = `${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`;
  time = day.toLocaleTimeString();
  // console.log(time);
  date = day.toLocaleDateString(undefined, options);
  // console.log(date)
  //   usTime = day.toLocaleTimeString("en-US", { timeZone: "America/New_York" });
  document.getElementById("time").innerHTML = time;
  document.getElementById("date").innerHTML = date;
  // document.getElementById('UStime').innerHTML = x;
  // aryIannaTimeZones.forEach((timeZone) => {
    // let ust = document.getElementById("UStime");
    // let strTime = day.toLocaleString("en-US", {
    //   timeZone: `${timeZone}`,
    // });

    // var mytime = setInterval(()=>{

    // var div = document.createElement("div");
    // ust.innerHTML = `<div data-timezone= ${timeZone}>Current Time in: <b>${timeZone.substring(
    //   timeZone.indexOf("/") + 1
    // )}</b> is <b>${strTime}</b></div>`;
    // ust.appendChild(div);
    // console.log(ust.innerHTML);
    // display_c();
    // ust.click()
    // },1000)
  // });
}



setInterval(display_ct, 1000);

// let day = new Date();
//   aryIannaTimeZones.forEach((timeZone) => {
//     let UST = document.getElementById("UStime");
//     let strTime = day.toLocaleString("en-US", {
//       timeZone: `${timeZone}`,
//     });

//     let newDiv = document.createElement("div");
//     newDiv.innerHTML = `Current Time in: <b>${timeZone.substring(
//       timeZone.indexOf("/") + 1
//       )}</b> is <b>${strTime}</b>`;
//       UST.appendChild(newDiv);
//       // console.log(timeZone.substring(timeZone.indexOf("/") + 1));
//     });
// };

// setInterval(() => {
//   let day;
//   let time;
//   let date;
//   // let newDiv;

//   //   let usTime;
//   const options = {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   };
//   day = new Date();
//   // time = `${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`;
//   time = day.toLocaleTimeString();
//   // console.log(time);
//   date = day.toLocaleDateString(undefined, options);
//   // console.log(date)
//   //   usTime = day.toLocaleTimeString("en-US", { timeZone: "America/New_York" });
//   document.getElementById("time").innerHTML = time;
//   document.getElementById("date").innerHTML = date;

// // aryIannaTimeZones.forEach((timeZone) => {
// //   let UST = document.getElementById("UStime");
// //   let strTime = day.toLocaleString("en-US", {
// //     timeZone: `${timeZone}`,
// //   });

// //   newDiv = document.createElement("div");
// //   newDiv.innerHTML = `Current Time in: <b>${timeZone.substring(
// //     timeZone.indexOf("/") + 1
// //   )}</b> is <b>${strTime}</b>`;
// //   UST.appendChild(newDiv);
// //   console.log(timeZone.substring(timeZone.indexOf("/") + 1));
// // });
//   // document.getElementById("UStime").innerHTML = usTime;
// }, 1000);

//         'Europe/Paris',
//   'Europe/London',
