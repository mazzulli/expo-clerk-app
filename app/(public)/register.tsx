import { View, Text, StyleSheet, Button, Pressable, TextInput } from "react-native";
import { useSignUp } from "@clerk/clerk-expo"
import { useState } from "react"
import { Link } from "expo-router"

export default function Register(){
    const {isLoaded, setActive, signUp} = useSignUp();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [pendingEmailCode, setPendingEmailCode] = useState(false)
    const [code, setCode] = useState("")

    async function handleSignUp(){
        if(!isLoaded) return
        try {
          await signUp.create({
            emailAddress: email, 
            password: password,
          })  

          await signUp.prepareEmailAddressVerification( { strategy: "email_code"} )
          setPendingEmailCode(true)


        } catch (error) {
            console.log("Erro SignUp: ", JSON.stringify(error))
        }
    }

    async function handleVerifyUser() {
        if(!isLoaded) return

        try {
            const completeSignup = await signUp?.attemptEmailAddressVerification({
                code: code
            })
            await setActive({ session: completeSignup.createdSessionId})
        } catch (error) {
            console.log("Erro Verify: ", JSON.stringify(error))
        }        
    }
    
    return(
        <View style={styles.container}>
            {!pendingEmailCode && (
            <View style={styles.container}>
                <Text style={styles.title}>Criar uma conta</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu e-mail..."
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha..."
                    autoCapitalize="none"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <Button                         
                title="Criar uma conta"
                color="#121212"
                onPress={handleSignUp}            
                />

                <Link href="/login" asChild>
                    <Pressable style={styles.button}>
                        <Text>Já possui uma conta? Faça o login</Text>
                    </Pressable>
                </Link>
            </View>
            )}

            {pendingEmailCode && (
                <View style={styles.container}>
                    <Text style={styles.title}>Digite o código</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Código de verificação "
                        autoCapitalize="none"
                        value={code}
                        onChangeText={setCode}
                    />
                    <Button                         
                        title="Ativar conta"
                        color="#121212"
                        onPress={handleVerifyUser}
                    />

                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        padding: 20,
    }, 
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 28,
        marginBottom: 14,
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderColor: "#121212",
        borderRadius: 8,
        padding: 10,
        backgroundColor: "#fff"
    },
    button: {
        margin: 8,
        alignItems: 'center'
    }
})