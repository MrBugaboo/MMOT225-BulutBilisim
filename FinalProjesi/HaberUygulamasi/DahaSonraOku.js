import React from 'react';
import {ScrollView, Text, StyleSheet, View, SafeAreaView, TouchableOpacity} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={
      dahasonraokular: []
    }
  }

  async componentDidMount(){
    //await AsyncStorage.removeItem("dahasonraokuHaberler");
    const liste = await AsyncStorage.getItem("dahasonraokuHaberler");
    this.setState({dahasonraokular: JSON.parse(liste)});
  }

  async dahasonraokudanSil(title){
    this.state.dahasonraokular.map((item, key)=>{
      if (item.baslik === title){
        this.state.dahasonraokular.splice(key, 1);
      }
    })
    const liste = this.state.dahasonraokular;
    await AsyncStorage.setItem("dahasonraokuHaberler", JSON.stringify(liste));
    this.setState({dahasonraokular: liste});
    console.warn("Daha sonra okudan kaldırıldı.")
  }

  render(){
    if (!this.state.dahasonraokular || this.state.dahasonraokular.length === 0){
      return (<><Text>Daha sonra okunacak haber yok, veya yükleniyor...</Text></>);
    }
    return(
      <SafeAreaView>
      <View style={{backgroundColor:'gray'}}>
      <ScrollView>
      {
        this.state.dahasonraokular.map((item, key)=>{
          return (
            <View key={key} style={styles.listelenmisHaber}>
              <Text style={{fontSize:20, color:'white'}}>{item.baslik}</Text>
              <Text style={{backgroundColor:'white', fontSize:15, color:'black'}}>{item.aciklama}</Text>
              <TouchableOpacity style={{backgroundColor:'red'}}
                onPress={()=>this.dahasonraokudanSil(item.baslik)}>
                <Text style={{color:'white', textAlign:'center'}}>Sil</Text>
              </TouchableOpacity>
            </View>
          )
        })
      }
      </ScrollView>
      </View>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  listelenmisHaber:{
    backgroundColor:'blue',
    borderWidth:2,
    borderColor:'black',
    margin:10
  }
});
