// Componente q vai renderizar o endereço obtido

// As informações do endereço (Rua, Bairro, Cidade, UF) não podem ser renderizadas diretamente na tela principal. Elas devem ser passadas via props para um componente isolado chamado AddressInfo.

import React from 'react';
import { View, Text } from 'react-native';
import { ViaCEPResponse } from '../../types/cep';
import { styles } from './styles';

interface AddressInfoProps {
  data: ViaCEPResponse | null;
}

export function AddressInfo({ data }: AddressInfoProps) {
  // Se o  CPF não for consultado, não vai aparecer nada
  
  if (!data) {
    return null;
  }

  if (data.erro) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>CEP não encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Rua:</Text>
        <Text style={styles.value}>{data.logradouro}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Bairro:</Text>
        <Text style={styles.value}>{data.bairro}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Cidade:</Text>
        <Text style={styles.value}>{data.localidade}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>UF:</Text>
        <Text style={styles.value}>{data.uf}</Text>
      </View>
    </View>
  );
}