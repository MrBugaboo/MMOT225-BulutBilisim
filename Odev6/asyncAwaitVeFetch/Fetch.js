import React from 'react';

import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

export default class Fetch extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      postlar:[],
      postTitle:"",
      postBody:"",
      postId:0
    }
  }

  async componentDidMount(){
    let postListesi = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then(p=>p.json());
    this.setState({postlar:postListesi});
  }

  postaTiklandi(x){
    this.setState({postId:x.item.id});
    this.setState({postTitle:x.item.title});
    this.setState({postBody:x.item.body});
  }

  render(){
    return(
      <View>
      <View>
        <Text style={styles.postIdsi}>Id: {this.state.postId}</Text>
        <Text style={styles.postTitlesi}>Title: {this.state.postTitle}</Text>
        <Text style={styles.postBodysi}>Body:{this.state.postBody}</Text>
      </View>
      <FlatList
        data={this.state.postlar}
        renderItem={(x)=>{
          return(
            <TouchableOpacity onPress={()=> this.postaTiklandi(x)}>
              <Text>Post Id'si: {x.item.id}</Text>
            </TouchableOpacity>
          )
        }}
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  postIdsi:{
    backgroundColor:'red',
    fontSize: 20
  },
  postTitlesi:{
    backgroundColor:'cyan',
    fontSize: 20
  },
  postBodysi:{
    backgroundColor:'steelblue',
    fontSize: 20
  }
});
