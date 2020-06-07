import React, { useState, useEffect, ChangeEvent} from 'react'
import { Feather as Icon } from '@expo/vector-icons'
import { View, ImageBackground, Image, StyleSheet, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import RNPickerSelect from 'react-native-picker-select';
import { Roboto_900Black } from '@expo-google-fonts/roboto'
import axios from 'axios'


interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}





const Home = () => {
    const navigation = useNavigation()

    const [selectedUf, setselectedUf ] = useState('0')
    const [selectedCity, setselectedCity ] = useState('0')


    const [ufs, setUfs ] = useState<string[]>([])
    const [cities, setCities] = useState<string[]>([])

    function handleNavigateToPoints() {
        navigation.navigate('Points',{
          selectedUf,
          selectedCity,
        })
    }

    function handleSelectUf(value: string) {
      console.log(value)
      const uf = value;
      setselectedUf(uf)
   }

   function handleSelectCity(value: string) {
    const city = value;
    setselectedCity(city)
 }

    useEffect(() => {
      axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
      .then(response => {
          const ufinitials = response.data.map(uf => uf.sigla)
  
          setUfs(ufinitials)
          
      })
  
      },[])


    useEffect(() => {
      axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
  .then(response => {
      const cityNames = response.data.map(city => city.nome)

      setCities(cityNames)


      
  })}, [selectedUf])

  

    return (

    <ImageBackground
     source={require('../../assets/home-background.png')} 
     style={styles.container} 
     imageStyle={{ width: 274, height: 368 }}
     >
    <View style={styles.main}>
    <Image source={require('../../assets/logo.png')}/>
    <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
    <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</Text>
    </View>


    <View style={styles.footer}>
    <View style={styles.select}>
    <View style={{
      width: '100%',
      borderRadius: 10,
      borderColor: 'black',
      overflow: 'hidden',      
      marginVertical: 10,
      backgroundColor: '#FFF', 
      }}>
    <RNPickerSelect            
            onValueChange={(value) => handleSelectUf(value)}
            placeholder={{label: 'Selecione um estado'}}
            style={{        
              placeholder: {
                color: '#6C6C80',          
                backgroundColor: '#FFF',                                                
              },
            }}            
            items={ufs.map((c) => ({
              label:c,
              value: c,
            }))}
        /></View>
<View style={{
      width: '100%',
      borderRadius: 10,
      overflow: 'hidden', 
      backgroundColor: '#FFF',      
      }}>
    <RNPickerSelect            
            onValueChange={(value) => handleSelectCity(value)}
            style={{        
              placeholder: {
                color: '#6C6C80',
                backgroundColor: '#FFF',   
              },
            }}
            placeholder={{label: 'Selecione uma cidade'}}                       
            items={cities.map((c) => ({
              label:c,
              value: c,
            }))}
        /></View>
        
</View>


        <RectButton style={styles.button} onPress={handleNavigateToPoints}>
            <View style={styles.buttonIcon}>
                <Icon name="arrow-right" color='#FFF' size={24}/>
            </View>
            <Text style={styles.buttonText}>Entrar</Text>
        </RectButton>

    </View>
    </ImageBackground>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32,
      
    },
  
    main: {
      flex: 1,
      justifyContent: 'center',
    },
  
    title: {
      color: '#322153',
      fontSize: 32,
      fontFamily: 'Ubuntu_700Bold',
      maxWidth: 260,
      marginTop: 64,
    },
  
    description: {
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 16,
      fontFamily: 'Roboto_400Regular',
      maxWidth: 260,
      lineHeight: 24,
    },
  
    footer: {},
  
    select: {
      margin: 10,
    },
  
    input: {
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 10,
      marginBottom: 8,
      paddingHorizontal: 24,
      fontSize: 16,
    },
  
    button: {
      backgroundColor: '#34CB79',
      height: 60,
      flexDirection: 'row',
      borderRadius: 10,
      overflow: 'hidden',
      alignItems: 'center',
      marginTop: 100,
    },
  
    buttonIcon: {
      height: 60,
      width: 60,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    buttonText: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      color: '#FFF',
      fontFamily: 'Roboto_500Medium',
      fontSize: 16,
    }
  });

  

export default Home