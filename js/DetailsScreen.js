//@flow

import React, {Component} from 'react';
import {
  // Platform,
  StyleSheet,
  StatusBar,
  Button,
  Text,
  View,
} from 'react-native';

type Props = {
  navigation: Object,
};

// const isAndroid = Platform.OS === 'android';

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class DetailsScreen extends Component<Props> {
  // _navListener: Function;

  // componentDidMount() {
  //   this._navListener = this.props.navigation.addListener('didFocus', () => {
  //     StatusBar.setBarStyle('dark-content');
  //     isAndroid && StatusBar.setBackgroundColor('#ecf0f1');
  //   });
  // }

  // componentWillUnmount() {
  //   this._navListener.remove();
  // }

  static navigationOptions = ({navigation}: Object) => {
    return {
      title: navigation.getParam('otherParam', 'Nested Details'),
    };
  };

  render() {
    // const {navigation} = this.props; is identical to the line below
    const navigation = this.props.navigation;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.detailsContainer}>
          <Text>Details Screen</Text>
          <Text>
            itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}
          </Text>
          <Text>
            otherParam:
            {JSON.stringify(navigation.getParam('otherParam', 'default value'))}
          </Text>
          {/* Notice this uses .push instead of .navigate, since .navigate won't
              allow us to go to the page we're already on */}
          <Button
            title="Go to Details... again"
            onPress={() =>
              navigation.push('Details', {
                itemId: Math.floor(Math.random() * 100),
              })
            }
          />

          {/* .popToTop() would work identically, targeting the first screen
              in a stack */}
          <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
          />

          <Button title="Go back" onPress={() => navigation.goBack()} />
          <Button
            title="Update the title"
            onPress={() =>
              this.props.navigation.setParams({otherParam: 'Updated!'})
            }
          />
        </View>
      </>
    );
  }
}

export default DetailsScreen;
