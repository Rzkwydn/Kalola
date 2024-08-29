import { StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 24,
        backgroundColor: '#fff',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',
      },
      input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
      },
      registerLink: {
        marginTop: 16,
        textAlign: 'center',
      },
      linkText: {
        color: 'blue',
        textDecorationLine: 'underline',
      },
      text: {
        fontSize: 12,
        marginBottom: 12,
        textAlign: 'center',
      }
    });
