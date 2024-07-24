import { Image, Text, Box, Button, Checkbox, ScrollView } from 'native-base'
import Logo from './assets/Logo.png'
import { Titulo } from './components/Titulo';
import { EntradaTexto } from './components/EntradaTexto';
import { useState } from 'react';
import { secoes } from './utils/CadastroEntradaTexto';

export default function Cadastro() {

  const [numSecao, setNumSecao] = useState(0)
  const [dados, setDados] = useState({} as any)



  function avancarSecao(){
    if(numSecao < secoes.length -1){
      setNumSecao(numSecao+1)
    }
  }

  function voltarSecao(){
    if(numSecao>0){
      setNumSecao(numSecao-1)
    }
  }

  function atualizarDados(id: string, valor: string){
    setDados({...dados, [id]: valor})
    console.log(dados)
  }

  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt='Logo Voll' mt="10" alignSelf="center"/>

      <Titulo>
        {secoes[numSecao].Titulo}
      </Titulo>
      <Box>
        {
          secoes[numSecao].entradaTexto?.map(entrada => {
            return (
            
            <EntradaTexto
              label={entrada.label}
              placeholder={entrada.placeholder}
              key={entrada.id}
              secureTextEntry={entrada.secureTextEntry}
              value={dados[entrada.name]}
              onChangeText={(text) => {atualizarDados(entrada.name, text)}}
            />)
          })
        }
      </Box>
      <Box>
        {secoes[numSecao].Checkbox && (
            <Text color="blue.800" fontWeight="bold" fontSize="md" mb={2} mt={2}>
              Selecione o plano!
            </Text>
          )
        }
        {
          secoes[numSecao].Checkbox?.map(checkbox => {
            return <Checkbox 
            key={checkbox.id}
            value={checkbox.value}
            >
              {checkbox.value}
            </Checkbox>
          })
        }
      </Box>
      <Button mt={6} mb={6} onPress={() => {avancarSecao()}}>Avançar</Button>
      {numSecao != 0 && <Button mb={6} onPress={() => {voltarSecao()}}>Voltar</Button>}

    </ScrollView>
  );
}
