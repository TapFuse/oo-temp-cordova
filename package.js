Package.describe({
  name: 'ox2:temp-cordova',
  version: '8.0.0',
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
    api.versionsFrom('1.6.1');
    // Core
    api.use([
      'ecmascript'
    ]);
    api.addFiles('lib/oo-temp-cordova.js', C);
});


Cordova.depends({
  "phonegap-plugin-push": "1.9.0",
  "cordova-plugin-device": "2.0.1",
  "cordova-plugin-inappbrowser": "2.0.2",
  "cordova-plugin-statusbar": "2.4.1",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-camera": "4.0.2",
  "cordova-plugin-customurlscheme": "4.3.0",
  "cordova-plugin-file": "6.0.1",
});

