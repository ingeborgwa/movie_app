import { Text, TouchableOpacity, View, StyleSheet, TextInput, Image, ScrollView, StatusBar, SafeAreaView, Alert, ImageBackground  } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Ionicons } from '@expo/vector-icons'; 



const STORAGE_KEY = '@list'


const Search = ({}) => {

    const [movies, setMovies] = useState([])
    const [search, onChangeSearch] = useState('')
    const [list, setList] = useState([])


    function getMovies () {
        fetch(`http://www.omdbapi.com/?s=${search}&type=movie&apikey=898996b1`)
        .then((response) => response.json())
        .then((movies) => {
            movies.Search.map(item => {
            console.log(movies.Search)
            })
            setMovies(movies.Search)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    function setData(movie){
        let check = list.find((el) => el.imdbID === movie.imdbID)
        if (check) {
            Alert.alert('Filmen ligger allerede på listen din',)
        } else {
            setList([...list, movie])
            Alert.alert('Filmen ble lagt til i din liste')
        }
    }


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



    

 

  return(
    <SafeAreaView style={styles.container}>
        <ImageBackground 
            source={require('../img/popcorn.jpg')} 
            resizeMode='cover' 
            style={{width: '100%', height: '100%'}}
        >
            <View style={styles.main}>
                <Text style={styles.header}>SØK</Text>
                <TextInput
                onChangeText={onChangeSearch}
                placeholder= 'Søk her'
                vaule={search}
                style={styles.input}
                />
                <TouchableOpacity 
                    onPress={getMovies}
                    style={styles.button}
                >
                <Text>Finn film</Text>
                </TouchableOpacity>
            <View>
                <Text style={styles.header}>FILMER</Text>
                <ScrollView horizontal={true}>
                    {movies && movies.map((item) => (
                        <View 
                            key={item.imdbID}
                            style={styles.wrapper}
                        >
                            <Image style={styles.image} source={{uri: `${item.Poster}`}} />
                            <View style={{flexDirection: 'row', alignItems:'flex-start'}}>
                                <Text style={styles.title}>{item.Title}</Text>
                                <TouchableOpacity
                                    onPress={() => setData(item)}
                                >
                                    <Ionicons
                                        name="add" 
                                        size={50} 
                                        color="black"
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
        </ImageBackground>
    </SafeAreaView>
  )

};

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
    
    text: {
        fontSize: 15,
        width: 200,
        padding: 30,
        color: '#fffdff', 
    },

    title: {
        width: 200,
        color:'black',
        paddingLeft: 10,
        paddingTop: 10,
    },


    button: {
        alignItems:'center',
        margin: 10,
        padding: 5,
        width: 100,
        backgroundColor: '#f2d2e6', 
        borderColor: '#f2d2e6',
        borderRadius: 50,
    },

    input: {
        height: 40,
        textAlign: 'center',
        padding: 10,
        borderWidth: 1,
        backgroundColor: '#f2d2e6', 
        borderColor: '#f2d2e6',
        borderRadius: 50,
    },

    image:{
        height: 300,
        width: 230,
        borderRadius: 20,
       
    }

})



export default Search;




