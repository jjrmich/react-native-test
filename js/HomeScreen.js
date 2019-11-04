//@flow

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  StatusBar,
  Button,
  Text,
  View,
  Alert,
} from 'react-native';

type Props = {
  navigation: Object,
};

const isAndroid = Platform.OS === 'android';

const styles = StyleSheet.create({
  helloWorldContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoButton: {
    paddingRight: '8%',
  },
});

class HomeScreen extends Component<Props> {
  _navListener: Function;

  componentDidMount() {
    this._navListener = this.props.navigation.addListener('willFocus', () => {
      StatusBar.setBarStyle('light-content');
      isAndroid && StatusBar.setBackgroundColor('#f4511e');
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }

  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: () => (
      <View style={styles.infoButton}>
        <Button
          onPress={() => Alert.alert('This is a button!')}
          title="Info  "
          color="#fff"
        />
      </View>
    ),
  };

  render() {
    return (
      <View style={styles.helloWorldContainer}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'Additional Data',
            });
          }}
        />
        <Button
          title="Go to Rounded Rectangle Testing"
          onPress={() => {
            this.props.navigation.navigate('RoundedRect');
          }}
        />
      </View>
    );
  }
}

export default HomeScreen;
