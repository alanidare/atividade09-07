// Estilos específicos deste componente

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
    display: 'flex',
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    width: '100%',


  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 6,
  },
  value: {
    flexShrink: 1,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
     display: 'flex',
    alignItems: 'center',

  },
});