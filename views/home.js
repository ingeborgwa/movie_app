import { Text, TouchableOpacity, View, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';




const Home = ({navigation}) => {

  return(
  <ImageBackground 
    source={require('../img/popcorn.jpg')} 
    resizeMode='cover' 
    style={{width: '100%', height: '100%'}}
  >
    <View style={styles.main}>
      <Text style={styles.header}>Hva skal du se på i dag?</Text>
      <TouchableOpacity 
        style={styles.text}
        onPress={() => navigation.navigate('Søk')}
      >
        <Text>Søk opp filmer her</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={()=> navigation.navigate('Favoritter')}
        style={styles.text}
      >
        <Text>Din liste</Text>
      </TouchableOpacity>
    </View>
  </ImageBackground>
        
  )
  
};


const styles = StyleSheet.create({

  main: {
    height: 400, 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    padding: 20,
    fontSize: 80,
    textAlign: 'center',
    color: '#e600ff', 
    fontWeight: '900',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  },

  text:{
    fontSize: 15,
    width: 200,
    padding: 30,
    textAlign: 'center',
    backgroundColor: '#e600ff', 
    borderColor: '#e600ff',
    borderRadius: 50,
    alignItems:'center',
    margin: 10,
  },


})



export default Home;




