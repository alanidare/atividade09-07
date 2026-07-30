//Configuração do Axios

// O Axios é uma biblioteca cliente HTTP baseada em Promises. Ela automatiza a transformação de dados para JSON, possui um tratamento de erros mais robusto que o fetch nativo e permite criar instâncias com configurações globais (como a baseURL).

import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

const cepNumber = 'CEP'

async function buscarCEP(cep:string){
  const resposta = await api.get(cep + '/json/')
  console.log(resposta.data) 
}
buscarCEP(cepNumber)

