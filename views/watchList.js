import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView, StatusBar, SafeAreaView, ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons'; 

const STORAGE_KEY = '@list'


const WatchList = () => {
 
  const [list, setList] = useState([])


  //localStorage

  useEffect(() => {
      const getData = async () => {
          try {
              const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
              if(jsonValue != null){
                  const parsedJson = JSON.parse(jsonValue);
                  setList(parsedJson);
              }
          } catch (error){
              console.log(error)
          }
      };
      getData()
  }, []);


  useEffect(() => {
      const storeData = async (list) => {
          try {
              const jsonValue = JSON.stringify(list);
              await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
          } catch (error){
              console.log(error)
          }
      };
      storeData(list);
  }, [list]);


  const deleteData = (item) => {
    setList (list.filter((el) => el.imdbID !== item.imdbID)
    )
  }

  



  return(
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={require('../img/popcorn.jpg')} 
        resizeMode='cover' 
        style={{width: '100%', height: '100%'}}
      >
      <ScrollView style={styles.main}>
        <Text style={styles.header}>DIN LISTE</Text>
        <ScrollView >
          {list && list.map((item) => (
            <View 
              key={item.imdbID}
              style={styles.wrapper}
            >
              <Image style={styles.image} source={{uri: `${item.Poster}`}} />
              <View style={{flexDirection: 'row', alignItems:'flex-start'}}>
                <Text style={styles.title}>{item.Title}</Text>
                <TouchableOpacity
                    onPress={() => deleteData(item)}
                >
                  <AntDesign 
                    name="check" 
                    size={50}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    
  },

  main:{
    backgroundColor: '#e600ff',
    marginHorizontal: 20,
    height: '95%',
    padding: 10,
    margin: 10,
    borderRadius:20,
  },


  wrapper: {
    backgroundColor: '#f2d2e6',
    height: 400, 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  },

  header: {
    padding: 20,
    fontSize: 40,
    textAlign: 'center',
    color: '#fffdff', 
    fontWeight: '800',
  },

 

  title: {
    fontWeight: 'bold',
    width: 200,
    color:'black',
    paddingLeft: 10,
    paddingTop: 10,
  },


  image:{
    height: 300,
    width: 200,
    borderRadius: 20,
  },


})


export default WatchList;