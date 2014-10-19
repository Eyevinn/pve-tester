$("#useragent").html(navigator.userAgent);

var mediaSource = window.MediaSource || window.WebKitMediaSource;
if (!!!mediaSource) {
  $("#mse").removeClass("bg-yes").addClass("bg-no");
} else {
  $("#mse").removeClass("bg-no").addClass("bg-yes");
  var webm = mediaSource.isTypeSupported('video/webm; codecs="vorbis,vp8"');
  var mp4 = mediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');
  var ts = mediaSource.isTypeSupported('video/mp2t; codecs="avc1.42E01E,mp4a.40.2"');
  var msehtml = "MSE: ";
  msehtml = msehtml + (webm?"WEBM ":"") + (mp4?"MP4 ":"") + (ts?"TS ":"");
  $("#mseinfo").html(msehtml);
}

var mediaKeys = window.MediaKeys || window.MSMediaKeys || window.WebKitMediaKeys;
if (!!!mediaKeys) {
  $("#eme").removeClass("bg-yes").addClass("bg-no");
} else {
  $("#eme").removeClass("bg-no").addClass("bg-yes");
  var clearkey = mediaKeys.isTypeSupported('org.w3c.clearkey');
  var playready = mediaKeys.isTypeSupported('com.microsoft.playready');
  var widevine = mediaKeys.isTypeSupported('com.widevine');
  var access = mediaKeys.isTypeSupported('com.adobe.access');
  var fairplay = mediaKeys.isTypeSupported('com.apple.fairplay');
  var emehtml = "EME: ";
  emehtml = emehtml + (clearkey?"CLEARKEY ":"") + (playready?"PLAYREADY ":"") + 
    (widevine?"WIDEVINE ":"") + (access?"ACCESS ":"") + (fairplay?"FAIRPLAY ":"");
  if (!clearkey && !playready && !widevine && !access && !fairplay) {
//    $("#eme").removeClass("bg-yes").addClass("bg-no");
    $("#emeinfo").html(emehtml + 'Unknown CDM');
  } else {
    $("#emeinfo").html(emehtml);
  }
}

var webCrypto = window.crypto || window.msCrypto;
if (!!!webCrypto) {
  $("#crypto").removeClass("bg-yes").addClass("bg-no");
} else {
  $("#crypto").removeClass("bg-no").addClass("bg-yes");
}
