import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, TextInput, SafeAreaView} from 'react-native';

import FB from './Firebase';
import Home from './Home';

export default class Login extends React.Component{
  constructor(props){
    super(props)
    this.state={
      ekran:"Login",
      Email:null,
      sifre:null
    }
  }

  KayitUser(){
    var email = this.state.Email;
    var sifreX = this.state.sifre;
    FB.auth()
    .createUserWithEmailAndPassword(email, sifreX)
    .then(r=>{
      console.warn("Kullanıcı oluşturuldu.");
    })
    .catch(e=>{
      console.warn("Hata: ", e);
    })
  }

  GirisUser(){
    var email = this.state.Email;
    var sifreX = this.state.sifre;
    FB.auth()
    .signInWithEmailAndPassword(email, sifreX)
    .then(r=>{
      console.warn("Giriş başarılı.");
      this.setState({ekran:"Home"});
      this.EkranlarArasiGecis();
    })
    .catch(e=>{
      console.warn("Hata: ", e);
    })
  }

  EkranlarArasiGecis(){
    if (this.state.ekran === "Login"){
      return(
        <SafeAreaView>
        <View style={{marginTop:150, minHeight:300}}>
          <Text style={styles.girisEkraniYazisi}>Giriş yap veya kayıt ol.</Text>
          <TextInput style={styles.textGirisleri} placeholder="E-mail"
          onChangeText={(value) => this.setState({Email: value})}
          value={this.state.Email}
          ></TextInput>
          <TextInput style={styles.textGirisleri} placeholder="Şifre"
          secureTextEntry={true} onChangeText={(value) => this.setState({sifre: value})}
          value={this.state.sifre}
          ></TextInput>
          <TouchableOpacity style={{backgroundColor:'cyan', margin:15}}
            onPress={()=>this.GirisUser()}>
            <Text style={{textAlign: 'center', fontSize:30}}>Giriş Yap</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'cyan', margin:15}}
            onPress={()=>this.KayitUser()}>
            <Text style={{textAlign: 'center', fontSize:30}}>Kayıt Ol</Text>
          </TouchableOpacity>
        </View>
        </SafeAreaView>
      )
    }
    else if (this.state.ekran === "Home"){
      return <Home/>
    }
  }
  render(){
    return(
      <>
        {this.EkranlarArasiGecis()}
      </>
    )
  }
}
const styles = StyleSheet.create({
  girisEkraniYazisi:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    margin:15
  },
  textGirisleri:{
    borderColor: 'gray',
    borderWidth: 1,
    margin: 15
  }
});
