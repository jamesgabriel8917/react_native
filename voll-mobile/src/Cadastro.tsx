import { Image, Text, Box, Button, Checkbox, ScrollView } from 'native-base'
import Logo from './assets/Logo.png'
import { Titulo } from './components/Titulo';
import { EntradaTexto } from './components/EntradaTexto';
import { useState } from 'react';
import { secoes } from './utils/CadastroEntradaTexto';
import { cadastrarPaciente } from './servicos/pacienteServico';

export default function Cadastro() {

  const [numSecao, setNumSecao] = useState(0)
  const [dados, setDados] = useState({} as any)
  const [planos, setPlanos] = useState([] as number[])


  function avancarSecao(){
    if(numSecao < secoes.length -1){
      setNumSecao(numSecao+1)
    }else{
      cadastrar()
    }
  }

  function voltarSecao(){
    if(numSecao>0){
      setNumSecao(numSecao-1)
    }
  }

  function atualizarDados(id: string, valor: string){
    setDados({...dados, [id]: valor})
  }

  async function cadastrar(){
    const paciente = {
      cpf: dados.cpf,
      nome: dados.email,
      email: dados.email,
      endereco: {
        cep: dados.cep,
        rua: dados.rua,
        numero: dados.numero,
        estado: dados.estado,
        complemento: dados.complemento
      },
      senha: dados.senha,
      telefone: dados.telefone,
      possuiPlanoSaude: planos.length > 0,
      planosSaude: planos,
      imagem: dados.imagem
    }
    console.log(paciente)
    const resultado = await cadastrarPaciente(paciente)

    if(!resultado){
      console.log("Erro ao fazer cadastro")
    }
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
            return (
            <Checkbox 
              key={checkbox.id}
              value={checkbox.value}
              onChange={() => setPlanos((planosAnteriores) => {
                if(planosAnteriores.includes(checkbox.id)){
                  return planosAnteriores.filter((id) => id!== checkbox.id)
                }
                return[...planosAnteriores, checkbox.id]
              })}
              isChecked={planos.includes(checkbox.id)}
            >
              {checkbox.value}
            </Checkbox>)
          })
        }
      </Box>
      <Button mt={6} mb={6} onPress={() => {avancarSecao()}}>
        {numSecao ==2? 'Finalizar' : 'Avancar'}
      </Button>
      {numSecao != 0 && <Button mb={6} onPress={() => {voltarSecao()}}>Voltar</Button>}

    </ScrollView>
  );
}
