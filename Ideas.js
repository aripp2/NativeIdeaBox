import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from './Header';
import Footer from './Footer';

export default class Ideas extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    console.log('props', this.props.ideas)
    return (
      <View style={styles.container}>
        <Header />
        <Text>Show Ideas Here</Text>
        <Footer />
      </View>
    )

  };

  const styles = StyleSheet.create({
    container: {

    }
  });
}