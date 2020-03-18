import React from 'react';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import { TextInput ,Button,Appbar} from 'react-native-paper';
import Displaylove from './components/Displaylove';

export default class mobfirst extends React.Component{
state={
  male:"",
  female:"",
  result:"loading"
}
submit(){
  fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.male}&sname=${this.state.female}`,{
  "headers": {
    "x-rapidapi-host": "love-calculator.p.rapidapi.com",
    "x-rapidapi-key": "5b071e4c41msh7fe3b5b61ac488ep1a8fb7jsnf688312b0f1b"
  }
})
  .then(data=>data.json())
  .then(data2=>{
    console.log(data2);
    this.setState({
      result:data2
    })
  })
}
render(){

  return(

          <View style={styles.container}>
          <Appbar.Header>
              <Appbar.Content
          title="LOVE % CALCULATOR"
          style={{alignItems:"center"}}
        />
        </Appbar.Header>

          <TextInput label='Person1(male)' value={this.state.male} onChangeText={text => this.setState({ male: text})}/>
          
          <TextInput label='Person2(female)' value={this.state.female} onChangeText={text => this.setState({ female: text })}/>

            <Button icon="heart" mode="contained" onPress={() => this.submit()} style={{margin:10}}>
    Calculate
  </Button>

  <Displaylove data={this.state.result} />
         </View>
         
       
    )





}
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  
});
