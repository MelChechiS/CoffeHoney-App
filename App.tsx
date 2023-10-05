import { useFonts, 
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_700Bold 
  } from '@expo-google-fonts/montserrat';
  
  import React from 'react';
  
  import { SafeAreaView,  StatusBar } from 'react-native';
  import Principal from './src/pages/Principal/index';
  
  
  export default function App() {
    const [fonteCarregada] = useFonts({
      "MonteserratRegular" : Montserrat_400Regular,
      "MontserratBold": Montserrat_700Bold,
      "MontserratItalic": Montserrat_400Regular_Italic
    })
  
    if (!fonteCarregada){
      return null;
    }
  
    return (
      <SafeAreaView>
          <StatusBar/>
        <Principal/>
      </SafeAreaView>
    );
  }
  
  
  