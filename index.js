//const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:", ip);
// });

// fetchCoordsByIP("8.8.8.8", (error, data) => {
//   if (error) {
//     console.log("error");
//     return;
//   }
//   console.log("It worked! Returned data:", data)
// });

// fetchISSFlyOverTimes({ latitude: "45", longitude: "-122" }, (error, data) => {
//   if (error) {
//     console.log("error");
//     return;
//   }
//   console.log("It worked! Returned data:", data);
// });

const { nextISSTimesForMyLocation } = require("./iss");

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});

