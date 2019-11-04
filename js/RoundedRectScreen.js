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
import Svg from 'react-native-svg';
import RoundedRect from './Components/RoundedRect';

type Props = {};

const styles = StyleSheet.create({
  testingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5%',
  },
  inputContainer: {
    flex: 1,
    width: '100%',
  },
  outputContainer: {
    flex: 2,
    backgroundColor: '#d3ebea',
    width: '100%',
  },
});

class RoundedRectScreen extends Component<Props> {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.testingContainer}>
          <View style={styles.inputContainer}>
            <Text>we out here</Text>
          </View>
          <View style={styles.outputContainer}>
            <Svg width="100%" height="100%">
              <RoundedRect
                x={12}
                y={14}
                height={40}
                width={60}
                curve={13}
                fill="orange"
              />
            </Svg>
          </View>
        </View>
      </>
    );
  }
}

export default RoundedRectScreen;
