Package.describe({
  name: 'ox2:temp-cordova',
  version: '4.0.0',
  // Brief, one-line summary of the package.
  summary: 'DO NOT USE',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: ''
});

var C = 'client';
var S = 'server';
var CS = [C, S];

Package.onUse(function(api) {
    api.versionsFrom('1.4.2');
    // Core
    api.use([
      'ecmascript'
    ]);
    // 3rd party
    api.use([

    ]);
    api.addFiles('lib/oo-temp-cordova.js', C);
});

Cordova.depends({
  "cordova-plugin-crosswalk-webview": "2.1.0",
  "phonegap-plugin-push": "1.9.0",
  "cordova-plugin-device": "1.1.3",
  "cordova-plugin-inappbrowser": "1.5.0",
  "cordova-plugin-statusbar": "2.2.0",
  "cordova-plugin-splashscreen": "4.0.0",
  "cordova-plugin-camera": "2.3.0",
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('ox2:temp-cordova');
  api.addFiles('tests/package-tests.js');
});
