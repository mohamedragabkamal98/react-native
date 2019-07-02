/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {name as appName} from './app.json';
import map from './Faces/map';
import map2 from './Faces/map2';
import map3 from './Faces/map3'


AppRegistry.registerComponent(appName, () => map3 );
