'use strict'

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image
} from 'react-native';
import * as utils from './utils';

export default class SearchPage extends Component<{}> {
  constructor (props) {
    super(props);

    this.state = {
      searchString: 'london',
      isLoading: false
    };
  }

  onSearchTextChanged = (event) => {
    this.setState({ searchString: event.nativeEvent.text });
  }

  executeQuery = (query) => {
    console.log(query);
    this.setState({
      isLoading: true
    });
  }

  onSearchPressed = () => {
    let query = utils.urlForQueryAndPage('place_name', this.state.searchString, 1);

    this.executeQuery(query);
  }

  render () {
    let spinner = this.state.isLoading ? 
      <ActivityIndicator size='large' style={styles.spinner}/> : null;

    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Search for houses to buy!
        </Text>
        <Text style={styles.description}>
          Search by place or postcode.
        </Text>
        <View style={styles.flowRight}>
          <TextInput 
            style={styles.searchInput}
            value={this.state.searchString}
            onChange={this.onSearchTextChanged}
            placeholder='Search via name or postcode'
          />
          <Button 
            onPress={this.onSearchPressed}
            color='#48BBEC'
            title='Go'
          />
        </View>
        <Image source={require('./resources/house.png')} style={styles.image}/>
        {spinner}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 20,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 4,
    color: '#48BBEC',
  },
  image: {
    width: 217,
    height: 138,
    marginTop: 20
  },
  spinner: {
    marginTop: 25
  }
})
