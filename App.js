// import React, { Component } from 'react';
// import { StyleSheet, Text, View, TextInput, Button, Keyboard } from 'react-native';
// import Header from './Header';
// import Footer from './Footer';



import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Ideas: {screen: Ideas}
});

const App = createAppContainer(MainNavigator);

export default App;



// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       title: '',
//       idea: '',
//       ideas: []
//     }
//   }

//   addIdea = () => {
//     const { title, idea } = this.state
//     const newIdea = { title: title, idea: idea }
//     console.log('new idea', newIdea)
//     this.setState({ ideas: [ ...this.state.ideas, newIdea] })
//     this.setState({ title: '', idea: '' })
//   }

//   render() {
//     console.log('ideas', this.state.ideas)
//     debugger
//     return (
//       <View style={styles.container}>
//         <Header />
       
//         <View>
//           <Text>Add a New Idea!</Text>
//         </View>
//         <View style={styles.input}>
//           <TextInput
//             style={styles.input}
//             placeholder='name your idea'
//             paddingLeft={15} 
//             onChangeText={(title) => this.setState({ title })}
//             value={this.state.title}
//             onBlur={Keyboard.dismiss}
//           />
//         </View>
//         <View style={styles.input}>
//           <TextInput
//             style={styles.input}
//             placeholder='enter a great idea'
//             paddingLeft={15} 
//             onChangeText={(idea) => this.setState({ idea })}
//             value={this.state.idea}
//             onBlur={Keyboard.dismiss}
//           />
//         </View>
//         <View>
//           <Button
//             title='Save My Idea'
//             onPress={this.addIdea}
//           />
//         </View>
//         <Footer />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'space-between'
//   },
//   header: {
//     height: 60,
//     color: 'lightblue'
//   },
//   input: {
//     borderColor: 'lightblue',
//     height: 30,
//     width: 250,
//     fontSize: 15,
//     borderWidth: 1
//   }
// });
