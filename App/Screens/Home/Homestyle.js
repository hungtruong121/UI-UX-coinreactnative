import {StyleSheet} from 'react-native';
import Colors from '../../Theme/Colors';
export default StyleSheet.create({
    container: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      opacity: 1,
    },
    overlay: {
      flex: 1,
    },
    logoStyle: {
      width: 140,
      height: 140,
      marginTop: "10%",
      marginBottom: "10%",
      borderRadius: 2,
      borderTopColor: Colors.blue,
      borderWidth: 10,
      alignSelf: 'center',
    },
    appName: {
      color: Colors.primary,
      marginTop: 3,
      fontSize: 32,
      alignSelf: 'center',
    },
    appFogotPass: {
      color: Colors.gray,
      marginTop: 3,
      fontSize: 16,
      marginLeft: "10%",
      //alignSelf: 'flex-start',
    },
    appRegister: {
      color: Colors.gray,
      marginTop: 3,
      marginRight: "10%",
      fontSize: 16,
      //alignSelf: 'flex-end',
    },
    buttonLogin: {
      backgroundColor: Colors.gray,
      width: "80%",
      height: 40,
      marginTop: 10,
      marginBottom: 10,
      alignSelf: 'center',
    },
    buttonRegister: {
      backgroundColor: Colors.gray,
      width: "80%",
      marginTop: 10,
      marginBottom: 10,
      alignSelf: 'center',
    },
    contentButtonLoginStyle: {
      fontSize: 18,
    },
  });
  