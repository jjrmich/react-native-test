//@flow

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  StatusBar,
  // Button,
  Text,
  View,
  Alert,
} from 'react-native';

import NewButton from './Components/NewButton';

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
  buttonWrapper: {},
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
    headerRight: () => {
      if (!isAndroid) {
        return (
          <View style={styles.infoButton}>
            <NewButton
              onPress={() => Alert.alert('This is a button!')}
              title="Info  "
              color="#fff"
            />
          </View>
        );
      }
    },
  };

  render() {
    return (
      <View style={styles.helloWorldContainer}>
        <Text>Home Screen</Text>
        <NewButton
          title="Go to Details"
          onPress={() => {
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'Additional Data',
            });
          }}
        />
        <NewButton
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
