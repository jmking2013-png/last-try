onEvent("button10", "click", function() {
  setScreen("drill");
});
onEvent("button3", "click", function() {
  setScreen("screen2");
});
onEvent("return", "click", function() {
  setScreen("screen1");
});
onEvent("button12", "click", function() {
  setScreen("chilldrill");
});
onEvent("button10", "click", function() {
  setScreen("drill");
});
onEvent("drillreturn", "click", function() {
  setScreen("screen1");
});

onEvent("button10", "click", function() {
  setScreen("drill");
});
onEvent("chiildrillreturn", "click", function() {
  setScreen("screen1");
});
onEvent("crep", "click", function() {
  playSound("assets/OFB_RV_ft_BandoKay_X_Double_Lz_X_SJ_-_Crep_Shop_Official_Audio_3_KLICKAUD.mp3", false);
});
onEvent("stop", "click", function() {
  stopSound(); // This stops every sound currently playing
});
onEvent("button11", "click", function() {
  playSound("assets/Barking_-_Ramz_KLICKAUD.mp3", false);
});
onEvent("button5", "click", function() {
  playSound("assets/NICK_THE_LOT_-_DUB_PACK_9_-_OUT_NOW_-_LAST_TUNE_IN_THE_CLIPS_IS_A_FREE_DOWNLOAD_KLICKAUD.mp3", false);
});
onEvent("button13", "click", function() {
  playSound("assets/Keisha_and_Becky_KLICKAUD.mp3", false);
});
onEvent("button14", "click", function() {
playSound("assets/Mad_About_Bars_Pt_1_KLICKAUD.mp3", false);
});
// When the button is clicked...
onEvent("button1", "click", function() {
  // ...change the view to the second screen
  setScreen("cookieclicker");
});
// 1. Declare the variable OUTSIDE the onEvent so it stays saved
var count = 0;
// 2. The event that happens when you click
onEvent("cookie", "click", function() {
  // Increase the variable by one
  count = count + 1;
  
  // 3. Update a label on your screen so you can see the change
  setText("label1", count);
  
  // Optional: Print to the console to check if it's working
  console.log("Current count is: " + count);
});


