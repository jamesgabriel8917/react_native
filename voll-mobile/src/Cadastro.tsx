import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base'
import Logo from './assets/Logo.png'
import { TouchableOpacity } from 'react-native';
import { Titulo } from './components/Titulo';
import { EntradaTexto } from './components/EntradaTexto';
import { Botao } from './components/Botao';
import { useState } from 'react';


export default function Cadastro() {

  const [numSecao, setNumSecao] = useState(0)

  const secoes = [
    {
      id:1,
      Titulo:  'Insira seus dados pessoais',
      entradaTexto: [
        {
          id: 1,
          label: 'Nome',
          placeholder: 'Digite seu nome completo'
        },
        {
          id: 2,
          label: 'Email',
          placeholder: 'Digite seu Email'
        },
      ]
    },
    {
      id:2,
      Titulo:  'Agora seus dados de endereço!',
      entradaTexto: [
        {
          id: 1,
          label: 'CEP',
          placeholder: 'Digite seu CEP'
        },
      ]
    }
  ]

  function avancarSecao(){
    setNumSecao(numSecao+1)
  }

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt='Logo Voll' mt="10"/>

      <Titulo>
        {secoes[numSecao].Titulo}
      </Titulo>
      <Box>
        {
          secoes[numSecao].entradaTexto.map(entrada => {
              return (<EntradaTexto
                        label={entrada.label}
                        placeholder={entrada.placeholder}
                        key={entrada.id}
                      ></EntradaTexto>)
          })
        }
      </Box>
      <Button onPress={() => {avancarSecao()}}>Avançar</Button>

    </VStack>
  );
}

