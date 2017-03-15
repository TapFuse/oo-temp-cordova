//
//      ooTempCordova: Library
//

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  // StatusBar.styleBlackOpaque();

  console.log('%c Cordova ========================================  ', 'background: #52B3D9; color: white; padding: 1px 15px 1px 5px;');
  console.log('%c Device Ready', 'background: #00B16A; color: white; padding: 1px 15px 1px 5px;');
  if (navigator.splashscreen) {
    console.log('%c Splashscreen Loaded', 'background: #00B16A; color: white; padding: 1px 15px 1px 5px;');
  }
  if (device) {
    console.log('%c Platform', 'background: #67809F; color: white; padding: 1px 15px 1px 5px;', device.platform);
    console.log('%c Version ', 'background: #67809F; color: white; padding: 1px 15px 1px 5px;', device.version);

    console.log('%c Cordova ', 'background: #67809F; color: white; padding: 1px 15px 1px 5px;', device.cordova);
  }
  console.log('%c =================================================  ', 'background: #52B3D9; color: white; padding: 1px 15px 1px 5px;');
}
