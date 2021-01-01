import React from 'react';
import {View,Text, ScrollView,TouchableOpacity} from 'react-native';

export default class Restoran extends React.Component{
  constructor(props){
    super(props)
    this.state={
      restoranlar:null,
      yorumlar:[]
    }
  }
  componentDidMount(){
    fetch('https://developers.zomato.com/api/v2.1/search?category=6',{
      method:'GET',
      headers:{
        'user-key':'315310acdbdce1ea378850afc0a41e5e'
      }
    })
    .then(r=>{
      return r.json();
    })
    .then(res=>{
      this.setState({restoranlar:res.restaurants});
    })
    .catch(e=>{
      console.warn('error: ', e);
    });
  }
  secildi(id){
    var str = 'https://developers.zomato.com/api/v2.1/reviews?res_id='+id;
    fetch(str,{
      method:'GET',
      headers:{
        'user-key':'315310acdbdce1ea378850afc0a41e5e'
      }
    })
    .then(r=>{
      return r.json();
    })
    .then(res=>{
      this.setState({yorumlar:res.user_reviews});
    })
    .catch(e=>{
      console.warn('error: ', e);
    });
  }
  render(){
    if (!this.state.restoranlar){
      return (<View><Text>Yükleniyor...</Text></View>);
    }
    return(
      <View>
        <ScrollView style={{backgroundColor:'yellow'}}>
        {
          this.state.restoranlar.map(v=>{
            return(<TouchableOpacity onPress={()=>this.secildi(v.restaurant.id)}>
              <Text key={v.restaurant.id}>{v.restaurant.name}</Text>
              </TouchableOpacity>)
          })
        }
        </ScrollView>
        <View>
          <Text>Yorumlar</Text>
          <ScrollView>
            {this.state.yorumlar.map(v=>{
              return(<Text key={v.review.id}>{v.review.review_text}</Text>)
            })}
          </ScrollView>
        </View>
      </View>
    )
  }
}
