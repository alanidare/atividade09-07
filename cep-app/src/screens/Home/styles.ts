// vai ter os estilos específicos da tela principal

import { StyleSheet } from 'react-native';

export const sstyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 80,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    display: 'flex',

  },
  buttonDisabled: {
   backgroundColor: '#a0c4f5',
  display: 'flex',

  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    display: 'flex',

    

    

  },
});