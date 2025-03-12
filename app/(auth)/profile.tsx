import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useUser } from '@clerk/clerk-expo'
import { Link } from "expo-router";
import { useState } from "react";

export default function Profile(){
    const { user } =  useUser();

    const [firstName, setFirstName] = useState(user?.firstName ?? "")
    const [lastName, setLastName] = useState(user?.lastName ?? "")

    function handleUpdateProfile(){
        try {
            const result = user?.update({
                firstName: firstName,
                lastName: lastName,
            })
            console.log("USUÁRIO ATUALIZADO: ", JSON.stringify(result))
        } catch (error) {
            console.log("ERRO AO ATUALIZAR.")
        }
    }

    return(
        <View style={styles.container}>            
            {user?.fullName && (
                <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Bem vindo {user?.fullName}</Text>
            )}
            <TextInput
                value={firstName}
                onChangeText={setFirstName}
                placeholder="Digite seu primeiro nome"
                style={styles.input}
            />
            <TextInput
                value={lastName}
                onChangeText={setLastName}
                placeholder="Digite o sobrenome"
                style={styles.input}
            />

            <Button 
                title="Autalizar perfil"
                onPress={handleUpdateProfile}
                color="#121212"
            />            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 40,      
    },
    input: {
      marginVertical: 4,
      height: 50,
      borderWidth: 1,
      borderColor: '#121212',
      borderRadius: 8,
      padding: 10,
      backgroundColor: '#fff',
    },
  });