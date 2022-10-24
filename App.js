import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './App.styles';

const App = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Which of these is the "glass"?</Text>
      <View style={styles.optionsContainer}>
        <View style={styles.optionContainer}>
          <Image resizeMode='contain' style={styles.optionImage} source={{uri: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png"}}/>
          <Text style={styles.optionText}>Glass</Text>
        </View>
        <View style={styles.optionContainer}>
          <Image resizeMode='contain' style={styles.optionImage} source={{uri: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png"}}/>
          <Text style={styles.optionText}>Glass</Text>
        </View>
        <View style={styles.optionContainer}>
          <Image resizeMode='contain' style={styles.optionImage} source={{uri: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png"}}/>
          <Text style={styles.optionText}>Glass</Text>
        </View>
        <View style={styles.optionContainer}>
          <Image resizeMode='contain' style={styles.optionImage} source={{uri: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png"}}/>
          <Text style={styles.optionText}>Glass</Text>
        </View>
      </View>
    </View>
  )
}

export default App;