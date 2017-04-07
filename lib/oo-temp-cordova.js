//
//      ooTempCordova: Library
//

document.addEventListener(
  'deviceready',
  onDeviceReady,
  false,
);

function onBackKeyDown(e) {
  e.preventDefault();
  e.stopPropagation();
  ViewsControl.back();
}

function onDeviceReady() {
  if (device) {

    if (device.platform === 'Android') {
      document.addEventListener(
        'backbutton',
        onBackKeyDown,
        false,
      );
    }
  }
}
