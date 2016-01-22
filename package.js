Package.describe({
  name: 'ox2:temp-cordova',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
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
    api.versionsFrom('1.2.1');
    // Core
    api.use([
      'ecmascript'
    ]);
    // 3rd party
    api.use([

    ]);
    // api.addFiles('lib/oo-temp-cordova.js', S);
});

Cordova.depends({
  "cordova-plugin-crosswalk-webview": "1.5.0",
  "phonegap-plugin-push": "1.5.3",
  "cordova-plugin-device": "1.1.1",
  "cordova-plugin-inappbrowser": "1.2.0",
  "cordova-plugin-splashscreen": "3.1.0",
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('ox2:temp-cordova');
  api.addFiles('tests/package-tests.js');
});
