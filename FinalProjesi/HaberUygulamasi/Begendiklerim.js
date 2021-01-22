import React from 'react';
import {Text, FlatList, View, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';

import FB from './Firebase';
export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={
      begenilenler:[]
    }
  }

  componentDidMount(){
    FB.database().ref("firebaseHaberler").on('value', (snapshot) =>{
      var liste = []
      snapshot.forEach((child)=>{
       liste.push({
        key: child.key,
        title:child.val().baslik,
        description:child.val().aciklama
      })
    })
   this.setState({begenilenler:liste})
  })
 }

 begenilenlerdenSil(key){
    FB.database().ref('firebaseHaberler').child('' + key).remove();
    this.state.begenilenler.splice(key, 1);
    console.warn("Beğenilenlerden kaldırıldı.")
 }

  render(){
    if (!this.state.begenilenler || this.state.begenilenler.length === 0){
      return (<><Text>Beğendiğiniz haber yok, veya yükleniyor...</Text></>);
    }
    return(
      <SafeAreaView>
      <View style={{backgroundColor:'gray'}}>
        <FlatList
          data={this.state.begenilenler}
          keyExtractor={(item)=>item.key}
          renderItem={({item})=>{
             return(
                <View style={styles.listelenmisHaber}>
                   <Text style={{fontSize:20, color:'white'}}>{item.title}</Text>
                   <Text style={{backgroundColor:'white', fontSize:15, color:'black'}}>{item.description}</Text>
                   <TouchableOpacity style={{backgroundColor:'red'}}
                     onPress={()=>this.begenilenlerdenSil(item.key)}>
                     <Text style={{color:'white', textAlign: 'center'}}>Sil</Text>
                   </TouchableOpacity>
                </View>)
             }}/>
      </View>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  listelenmisHaber:{
    backgroundColor:'green',
    borderWidth:2,
    borderColor:'black',
    margin:10
  }
});
