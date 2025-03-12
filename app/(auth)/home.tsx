import { View, Text, StyleSheet } from "react-native";
import { useUser } from '@clerk/clerk-expo'
import { Link } from "expo-router";

export default function Home(){
    const { user } =  useUser();

    return(
        <View>
            <Text>Página Home</Text>
            <Text>Bem vindo {user?.username ? user?.username : "..."}</Text>
            <Text>{user?.emailAddresses[0].emailAddress}</Text>

            <Link href="/profile">
                Acessar seu perfil
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    
})