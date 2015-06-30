'use strict';

var path = require('path');
var React = require('react');

module.exports = {
  render: function (componentPath, settingsPath, dataPath) {
    var componentPath = path.resolve(process.cwd(), componentPath),
        settingsPath = path.resolve(process.cwd(), settingsPath),
        dataPath = path.resolve(process.cwd(), dataPath);
    var Component = React.createFactory(require(componentPath)),
        Settings = require(settingsPath),
        Data = require(dataPath),
        props = Settings;

     props.initialData = Data;

     return React.renderToString(Component(props));
  }
};
