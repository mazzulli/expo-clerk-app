import { useEffect } from "react"
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { tokenCache } from './cache'
import { Slot, useRouter, useSegments } from "expo-router";

export default function RootLayout() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

  if (!publishableKey) {
    throw new Error('Add EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY to your .env file')
  }

  const InitialLayout = () => {
    const { isLoaded, isSignedIn } = useAuth()
    const segments = useSegments()
    const router = useRouter()

    useEffect(()=> {
      if(!isLoaded) return;
            
      console.log("User: ", isSignedIn)

      const inAuthGroup = segments[0] === "(auth)"

      if(isSignedIn && !inAuthGroup){
        router.replace("/home")
      }else if(!isSignedIn){
        router.replace("/login")
      }
    },[isSignedIn])

    return <Slot/>
  }

  return ( 
    <ClerkProvider  tokenCache={tokenCache} publishableKey={publishableKey}>
      <InitialLayout />
    </ClerkProvider>
  );
}
