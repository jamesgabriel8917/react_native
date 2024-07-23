import { VStack, Image, Text, Box, FormControl, Input, Button, Link, Toast, useToast } from 'native-base'
import Logo from './assets/Logo.png'
import { TouchableOpacity } from 'react-native';
import { Titulo } from './components/Titulo';
import { EntradaTexto } from './components/EntradaTexto';
import { Botao } from './components/Botao';
import { useEffect, useState } from 'react';
import { fazerLogin } from './servicos/AutenticacaoServico';
import { jwtDecode } from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login({ navigation }: any) {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const [carregando, setCarregando] = useState(true)
  
  useEffect(() => {
    //gambiarra para limpar o token
    //AsyncStorage.removeItem('token')
    async function verificarLogin(){
      const token = await AsyncStorage.getItem('token')
      if(token){
        navigation.replace('Tabs')
      }
      setCarregando(false)
    }
    verificarLogin()
  }, [])
  async function login(){
    const resultado = await fazerLogin(email, senha)
    if(resultado){
      const { token } = resultado
      const tokenDecodificado = jwtDecode(token) as any
      const pacienteId = tokenDecodificado.id

      AsyncStorage.setItem('token', token)
      AsyncStorage.setItem(pacienteId, pacienteId)

      navigation.replace('Tabs')

    }else{
      Toast.show({
        title: "Erro ao efetuar login",
        description: "Os dados informados estão invalidos",
        backgroundColor: "red.500"
      })
    }
  }

  if(carregando){
    return null
  }

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt='Logo Voll' mt="10"/>

      <Titulo>
        Faça login em sua conta
      </Titulo>

      <Box>
        <EntradaTexto 
            placeholder='Email'
            label='Insira seu endereço de email'
            value={email}
            onChangeText={setEmail}
            />
          <EntradaTexto 
            placeholder='Senha'
            label='Insira sua senha'
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            />
      </Box>
      <Botao onPress={() => {login()}}>Entrar</Botao>

      <Link href='#' mt="2">
        Esqueceu a sua senha?
      </Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt="10">
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Cadastro')
        }}>
          <Text color="blue.500">Faça o seu cadastro!</Text>
        </TouchableOpacity>
      </Box>


    </VStack>
  );
}

