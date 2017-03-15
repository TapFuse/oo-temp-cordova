Package.describe({
  name: 'ox2:temp-cordova-android',
  version: '1.0.0',
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
    api.versionsFrom('1.4.1');
    // Core
    api.use([
      'ecmascript'
    ]);
});

Cordova.depends({
  "cordova-plugin-crosswalk-webview": "2.3.0",
});

