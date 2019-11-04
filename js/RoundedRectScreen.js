//@flow

import React, {Component} from 'react';
import {
  TextInput,
  StyleSheet,
  StatusBar,
  Button,
  Text,
  View,
  InputAccessoryView,
  Keyboard,
} from 'react-native';
import Svg from 'react-native-svg';
import RoundedRect from './Components/RoundedRect';

type Props = {};
type State = {
  x: number,
  y: number,
  height: number,
  width: number,
  curve: number,
  stroke: string,
  fill: string,
  strokeWidth: number,
};

const styles = StyleSheet.create({
  testingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5%',
  },
  inputsContainer: {
    flex: 1,
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
  },
  outputContainer: {
    flex: 2,
    backgroundColor: '#d3ebea',
    width: '100%',
  },
  accessoryStyle: {
    alignItems: 'flex-end',
    paddingRight: '2.5%',
    paddingTop: '1%',
    paddingBottom: '1%',
    backgroundColor: 'rgb(232, 236, 238)',
  },
});

class RoundedRectScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      height: 0,
      width: 0,
      curve: 0,
      stroke: 'transparent',
      fill: 'orange',
      strokeWidth: 0,
    };
  }
  render() {
    const accessoryID = '001';
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.testingContainer}>
          <View style={styles.inputsContainer}>
            <View style={styles.inputContainer}>
              <Text>X: </Text>
              <TextInput
                keyboardType="numeric"
                onChangeText={text => this.setState({x: Number(text)})}
                placeholder="0"
                inputAccessoryViewID={accessoryID}
                // value={this.state.x.toString()}
                // returnKeyLabel="done"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>Y: </Text>
              <TextInput
                keyboardType="numeric"
                onChangeText={text => this.setState({y: Number(text)})}
                placeholder="0"
                inputAccessoryViewID={accessoryID}
                // value={this.state.x.toString()}
                // returnKeyLabel="done"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>Height: </Text>
              <TextInput
                keyboardType="numeric"
                onChangeText={text => this.setState({height: Number(text)})}
                placeholder="0"
                inputAccessoryViewID={accessoryID}
                // value={this.state.x.toString()}
                // returnKeyLabel="done"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>Width: </Text>
              <TextInput
                keyboardType="numeric"
                onChangeText={text => this.setState({width: Number(text)})}
                placeholder="0"
                inputAccessoryViewID={accessoryID}
                // value={this.state.x.toString()}
                // returnKeyLabel="done"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>Curve: </Text>
              <TextInput
                keyboardType="numeric"
                onChangeText={text => this.setState({curve: Number(text)})}
                placeholder="0"
                inputAccessoryViewID={accessoryID}
                // value={this.state.x.toString()}
                // returnKeyLabel="done"
              />
            </View>
          </View>
          <View style={styles.outputContainer}>
            <Svg width="100%" height="100%">
              <RoundedRect
                x={this.state.x}
                y={this.state.y}
                height={this.state.height}
                width={this.state.width}
                curve={this.state.curve}
                fill={this.state.fill}
              />
            </Svg>
          </View>
        </View>
        <InputAccessoryView nativeID={accessoryID}>
          <View style={styles.accessoryStyle}>
            <Button onPress={() => Keyboard.dismiss()} title="Done" />
          </View>
        </InputAccessoryView>
      </>
    );
  }
}

export default RoundedRectScreen;
