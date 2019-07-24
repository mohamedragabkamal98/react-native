/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {name as appName} from './app.json';
import task from './Faces/task';
import text from './Faces/test';
import App from './Faces/App';

AppRegistry.registerComponent(appName, () => task );
