import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';

import Haberler from './Haberler.js';
import DahaSonraOku from './DahaSonraOku.js';
import Begendiklerim from './Begendiklerim.js';
export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.state={
      sayfa:"Haberler"
    }
  }
  sayfaDegis(){
    if(this.state.sayfa === "Haberler"){
      return <Haberler/>
    }
    else if(this.state.sayfa === "DahaSonraOku"){
      return <DahaSonraOku/>
    }
    else if(this.state.sayfa === "Begendiklerim"){
      return <Begendiklerim/>
    }
  }
  render(){
    return(
      <SafeAreaView>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={{flex:1, backgroundColor:'steelblue'}}
          onPress={()=>this.setState({sayfa:"Haberler"})}>
          <Text style={{color:'white', textAlign: 'center', fontSize:15}}>Haberler</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1, backgroundColor:'blue'}}
          onPress={()=>this.setState({sayfa:"DahaSonraOku"})}>
          <Text style={{color:'white', textAlign: 'center', fontSize:15}}>Daha Sonra Oku</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1, backgroundColor:'green'}}
          onPress={()=>this.setState({sayfa:"Begendiklerim"})}>
          <Text style={{color:'white', textAlign: 'center', fontSize:15}}>Beğendiklerim</Text>
        </TouchableOpacity>
      </View>
      {this.sayfaDegis()}
      </SafeAreaView>
    )
  }
}
