// @flow

import React from 'react';
import {
  Platform,
  StyleSheet,
  // StatusBar,
  Button,
  // Text,
  View,
  // Alert,
} from 'react-native';

const isAndroid = Platform.OS === 'android';

type Props = {
  title: string,
  onPress: (event?: any) => mixed,
  color?: ?string,
  disabled?: ?boolean,
  testID?: ?string,
  hasTVPreferredFocus?: ?boolean,
  nextFocusDown?: ?number,
  nextFocusForward?: ?number,
  nextFocusLeft?: ?number,
  nextFocusRight?: ?number,
  nextFocusUp?: ?number,
  touchSoundDisabled?: ?boolean,
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingTop: '1%',
    paddingBottom: '1%',
  },
});

function NewButton(props: Props) {
  if (isAndroid) {
    return (
      <View style={styles.buttonContainer}>
        <Button
          title={props.title}
          onPress={props.onPress}
          color={props.color}
          disabled={props.disabled}
          testID={props.testID}
          hasTVPreferredFocus={props.hasTVPreferredFocus}
          nextFocusDown={props.nextFocusDown}
          nextFocusForward={props.nextFocusForward}
          nextFocusLeft={props.nextFocusLeft}
          nextFocusRight={props.nextFocusRight}
          nextFocusUp={props.nextFocusUp}
          touchSoundDisabled={props.touchSoundDisabled}
        />
      </View>
    );
  } else {
    return (
      <Button
        title={props.title}
        onPress={props.onPress}
        color={props.color}
        disabled={props.disabled}
        testID={props.testID}
        hasTVPreferredFocus={props.hasTVPreferredFocus}
        nextFocusDown={props.nextFocusDown}
        nextFocusForward={props.nextFocusForward}
        nextFocusLeft={props.nextFocusLeft}
        nextFocusRight={props.nextFocusRight}
        nextFocusUp={props.nextFocusUp}
        touchSoundDisabled={props.touchSoundDisabled}
      />
    );
  }
}

export default NewButton;
