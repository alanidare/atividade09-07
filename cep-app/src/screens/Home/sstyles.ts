// vai ter os estilos específicos da tela principal

import { StyleSheet } from 'react-native';

export const sstyles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 100,
    backgroundColor: '#e3dbff',
    width: '100%',

  
  },
  title: {
     display: 'flex',
     alignItems: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#160052',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
    

  },
  button: {
    backgroundColor: '#391266',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
   justifyContent: 'center',

  },
  buttonDisabled: {
   backgroundColor: '#8259c9',
  display: 'flex',

  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    display: 'flex',
    justifyContent: 'center',
  },
});