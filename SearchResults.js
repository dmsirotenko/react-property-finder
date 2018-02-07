'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text,
  Alert
} from 'react-native';
import ListItem from './ListItem';

export default class SearchResults extends Component<{}> {
  keyExtractor = (item, index) => index;

  onPressItem = (index) => {
    Alert.alert('Property', `Chosen: ${index}`);
  }

  renderItem = ({item, index}) => {
    return (
      <ListItem
        item={item}
        index={index}
        onPressItem={this.onPressItem}
      />
    );
  }

  render () {
    return (
      <FlatList 
        data={this.props.listings}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }
}
