import axios from 'axios';
import {ViaCEPResponse} from '../types/cep'

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