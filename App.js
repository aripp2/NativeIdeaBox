import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      idea: '',
      ideas: []
    }
  }

  _onPressButton() {
    const { title, idea } = this.state
    console.log('title', title)
    // const newIdea = { title: title, idea: idea }
    // this.setState({ ideas, ...newIdea})
    // this.setState({ title: '', idea: '' })
  }

  render() {
    console.log(this.state)
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Welcome to IdeaBox</Text>
        </View>
        <View>
          <Text>Add a New Idea!</Text>
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.input}
            placeholder='name your idea'
            onChangeText={(title) => this.setState({ title })}
            value={this.state.title}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.input}
            placeholder='enter a great idea'
            onChangeText={(idea) => this.setState({ idea })}
            value={this.state.idea}
          />
        </View>
        <View>
          <Button
            title='Save My Idea'
            onPress={this._onPressButton}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'blue',
    backgroundColor: '#fff'

  },
  header: {
    height: 60,
    color: 'white',
    backgroundColor: 'blue',
  },
  input: {
    borderColor: 'pink'
  }
});
