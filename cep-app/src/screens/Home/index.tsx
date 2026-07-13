// vai ter a tela principal (Input, Botão, Loading)

import React, { useState } from 'react';
import { View,Text, TextInput, TouchableOpacity, ActivityIndicator,} from 'react-native';
import { api } from '../../services/api';
import { AddressInfo } from '../../components/AddressInfo';
import { ViaCEPResponse } from '../../types/cep';
import { sstyles } from './styles';

export function Home() {
  const [cep, setCep] = useState('');
  const [loading, setLoading] = useState(false);
  const [endereco, setEndereco] = useState<ViaCEPResponse | null>(null);

  function handleChangeCep(text: string) {


      //Só deixa por 8 números --> mexer pra um comando que eu saiba fazer. Tendi nada dessa joça
    const apenasNumeros = text.replace(/[^0-9]/g, '');
    setCep(apenasNumeros.slice(0, 8));
  }

  async function buscarCep() {

    // não procura se não tiver os 8 n°s
    if (cep.length !== 8) {
      return;
    }

    setLoading(true);
    setEndereco(null);

    try {
      const response = await api.get<ViaCEPResponse>(`${cep}/json/`);
      setEndereco(response.data);
    } catch (error) {
      setEndereco({
        cep: '',
        logradouro: '',
        complemento: '',
        bairro: '',
        localidade: '',
        uf: '',
        erro: true,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={sstyles.container}>
      <Text style={sstyles.title}>Consulta de CEP</Text>

      <TextInput
        style={sstyles.input}
        placeholder="Digite o CEP (somente números)"
        keyboardType="numeric"
        maxLength={8}
        value={cep}
        onChangeText={handleChangeCep}
      />

      {/*  botão desaparece durante o loading */}
      <TouchableOpacity
        style={[sstyles.button, loading && sstyles.buttonDisabled]}
        onPress={buscarCep}
        disabled={loading || cep.length !== 8}
      >
        <Text style={sstyles.buttonText}>
          {loading ? 'Buscando...' : 'Buscar'}
        </Text>
      </TouchableOpacity>

      {/* probloading aparecer durante a busca */}
      {loading && <ActivityIndicator size="large" color="#007AFF" style={{ marginTop: 20 }} />}

      {/* passando dados pra props */}
{!loading && <AddressInfo data={endereco} />}
    </View>
  );
}
