import { useAuth } from "@clerk/clerk-expo"
import { Feather } from "@expo/vector-icons"
import { Stack } from "expo-router"
import { Pressable } from "react-native"

function LogoutButton() {
    const { signOut } = useAuth()

    function logout(){
        signOut()
    }

    return (
        <Pressable onPress={logout}>
            <Feather name="log-out" size={24} color="#FFF" />
        </Pressable>
    )
}

export default function AuthLayout(){
    const { isSignedIn } = useAuth()

    return(
        <Stack screenOptions={{ 
            headerStyle: {
            backgroundColor: "#121212",            
            },
            headerTintColor: "#FFF"
            }}>
            <Stack.Screen name="home" options={{headerTitle: "Home"}} redirect={!isSignedIn} />
            <Stack.Screen name="profile" options={{headerTitle: "Minha conta", headerRight: ()=><LogoutButton />}} redirect={!isSignedIn} />
        </Stack>
    )
}