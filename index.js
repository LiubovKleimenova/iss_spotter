const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require("./iss");

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

fetchISSFlyOverTimes({ latitude: "45", longitude: "-122" }, (error, data) => {
  if (error) {
    console.log("error");
    return;
  }
  console.log("It worked! Returned data:", data);
});