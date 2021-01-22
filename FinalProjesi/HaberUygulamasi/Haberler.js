import React from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import FB from './Firebase';
export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.state={
      haberler:[],
      dahaSonraOkuHaberler:[]
    }
  }

  componentDidMount(){
    fetch(('http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=7c7e6f3f970446e5afbc7a43faf5faef'),{
      method:'GET'
    })
    .then(r=>{
      return r.json();
    })
    .then(res=>{
      this.setState({haberler:res.articles});
    })
    .catch(e=>{
      console.warn('Hata: ', e);
    });
  }

  async DahaSonraOkuKayit(title, description){
    var zatenKayitliDegil = true;
    const dahaSonraOkuHaber = {
      baslik: title,
      aciklama: description
    }
    const veritabanindakiListe = await AsyncStorage.getItem("dahasonraokuHaberler");
    if (!veritabanindakiListe || veritabanindakiListe === []){
      this.setState({dahaSonraOkuHaberler:[] });
    }
    else{
      this.setState({dahaSonraOkuHaberler: JSON.parse(veritabanindakiListe)});
    }
    this.state.dahaSonraOkuHaberler.map((item, key)=>{
      if (item.baslik === title){
        zatenKayitliDegil = false;
      }
    })
    if (zatenKayitliDegil){
      const liste = this.state.dahaSonraOkuHaberler;
      liste.push(dahaSonraOkuHaber);
      await AsyncStorage.setItem("dahasonraokuHaberler", JSON.stringify(liste));
      this.setState({dahaSonraOkuHaberler: liste});
      console.warn("Daha sonra oku eklendi.");
    }
  }

  BegenKayit(title, description){
    var aynisiYok = true;
    const dataToDB = {
      baslik: title,
      aciklama: description
    }
    FB.database().ref("firebaseHaberler").on('value', (snapshot) =>{
      snapshot.forEach((child)=>{
       if (title === child.val().baslik){
         aynisiYok = false;
       }
    })
    })
    if(aynisiYok){
      FB.database().ref("firebaseHaberler").push(dataToDB)
      .then(r=>{
        console.warn("Haber beğenildi.");
      })
      .catch(e=>{
        console.warn("Hata: ", e);
      })
    }
  }

  render(){
    if (!this.state.haberler || this.state.haberler.length === 0){
      return (<><Text>Yükleniyor...</Text></>);
    }
    return(
      <SafeAreaView>
          <FlatList
            style={{backgroundColor:'gray'}}
            data={this.state.haberler}
            keyExtractor={(item, index) => {
              return item.url;
            }}
            renderItem={({item, key}) => (
              <View key={key} style={styles.listelenmisHaber}>
                <Text style={{fontSize:20, color:'white'}}>{item.title}</Text>
                <Text style={{backgroundColor:'white', fontSize:15, color:'black'}}>{item.description}</Text>
                <View style={styles.butonlar}>
                  <TouchableOpacity style={{flex:1, backgroundColor:'blue'}}
                    onPress={()=>this.DahaSonraOkuKayit(item.title, item.description)}>
                    <Text style={{color:'white', textAlign: 'center'}}>Daha Sonra Oku</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{flex:1, backgroundColor:'green'}}
                    onPress={()=>this.BegenKayit(item.title, item.description)}>
                    <Text style={{color:'white', textAlign: 'center'}}>Beğen</Text>
                  </TouchableOpacity>
                </View>
              </View>
              )}
          />
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  listelenmisHaber:{
    backgroundColor:'steelblue',
    borderWidth:2,
    borderColor:'black',
    margin:10
  },
  butonlar:{
    flexDirection:'row'
  }
});
