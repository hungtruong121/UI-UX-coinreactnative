import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { Button} from 'react-native-elements';
import Images from '../../Theme/Images';
import Styles from './Homestyle';

const Home = (props) => {
    const onPressTitle = () => {
        this.props.na;
      };
    return ( 
        <ImageBackground source = { Images.backgroud } style = { Styles.container } >
        <View style={Styles.overlay}>
        <Image source = { Images.logo } style = { Styles.logoStyle }/>
        <Text style={Styles.appName}>JWC LAB COIN</Text> 
        <Button  buttonStyle={Styles.buttonLogin}  title="Đăng Nhập"></Button>
        <Button  buttonStyle={Styles.buttonRegister}  title="Đăng Ký"></Button>
        <View style={{flexDirection: 'row'}}>
        <Text style={Styles.appFogotPass} onPress={onPressTitle}>Forgot password</Text> 
        <Text style={Styles.appRegister}>Register</Text>
        </View>
        </View>
        </ImageBackground >
    )
}
export default Home