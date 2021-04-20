// import React, {useState} from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput } from 'react-native';

// const Input = (props) => {

//     const [value, setValue] = useState("")
//     const {addTodo} = props

//     const handleAddTodo = () => {
//         addTodo(value);
//         setValue("");
//     };

//     return (
//         <View>
//             <TextInput placeholder= "Enter text"
//             onChangeText={(txt)=> {
//             setValue (txt);
//              }}
//             value={value}
//              ></TextInput>
//             <TouchableOpacity onPress={handleAddTodo}>
//                 <Text>Add todo</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     input: {
//         padding: 10,
//         fontSize: 18,
//     }
// });

// export default Input;