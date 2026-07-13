//Configuração do Axios

// O Axios é uma biblioteca cliente HTTP baseada em Promises. Ela automatiza a transformação de dados para JSON, possui um tratamento de erros mais robusto que o fetch nativo e permite criar instâncias com configurações globais (como a baseURL).

import axios from 'axios';
import type {ViaCEPResponse} from '../types/cep'

//import { useEffect, useState } from 'react';



export const api = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});


const cepNumber = '29165680'

async function buscarCEP(cep:string){
  const resposta = await api.get(cep + '/json/')
  console.log(resposta.data) 
}
buscarCEP(cepNumber)

//criar input pra chamar no lugar cepNumber <---------------------------------------------

/*function buscarCEP(){
  post =[];

  fetch( 'https://viacep.com.br/ws/' + cep + 'json/')
  .then ()
}*/