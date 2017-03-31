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
  // window.history.back();
  // const currentState = window.history.state;
  // if (!currentState) {
  //   window.history.forward();
  // } else {

  // }
}

function onDeviceReady() {
  if (device) {

    if (device.platform === 'android') {
      document.addEventListener(
        'backbutton',
        onBackKeyDown,
        false,
      );
    }
  }
}
