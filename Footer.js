import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
// import { Icon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons';



export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.footer}>
        <TouchableOpacity>
          onPress={() => navigate('Home')}
          <Icon
            name='home'
            color='white'
            size={60}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          onPress={() => navigate('Ideas', { ideas: this.state.ideas})}
          <Icon
            name='star'
            color='white'
            size={60}
          />
        </TouchableOpacity>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'lightblue',
    flex: 0,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    height: 70,
    justifyContent: 'space-around'
  }
})