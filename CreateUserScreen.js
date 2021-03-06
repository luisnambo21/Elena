import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import firebase from '../database/firebase';

const CreateUserScreen = () =>{

    const [state, setState] = useState(
    {
        nombre: "",
        correo: "",
        telefono: "",   
    });
const handleChangeText = (nombre,value)=>{
    setState({...state, [nombre]:value})
}

const AddNewUser = async() => {
    if (state.nombre === '') {
        alert('Por favor da un nombre')
    }else{
        try {
            await firebase.db.collection('usuarios').add({
        nombre: state.nombre,
        correo: state.correo,
        telefono: state.telefono
    })
    //alert('guardado')
    props.navigation.navigate('UserList');

}
catch (error) {console.log(error)}
}
        
}
    return(
        <ScrollView style={styles.container}> 
            <View style={styles.Inputgr}>
                <TextInput
                    placeholder="Nombre"
                    onChangeText={(value) => handleChangeText('nombre', value)} 
                />
            </View>

            <View style={styles.Inputgr}>
                <TextInput
                    placeholder="Correo"
                    onChangeText={(value) => handleChangeText('correo', value)} 
                />
            </View>
            <View style={styles.Inputgr}>
                <TextInput
                    placeholder="Telefono"
                    onChangeText={(value) => handleChangeText('telefono', value)} 
                />
            </View>

            <View>
               <Button title="Guardar" onPress={ () =>AddNewUser()} />
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 40,
    },
    Inputgr: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    }
  })

  export default CreateUserScreen