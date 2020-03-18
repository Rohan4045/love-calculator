import React from 'react';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';



const Displaylove=(prop)=>{

	if(prop.data=="loading"){
		return <Text style={styles.text}>wait !!!!</Text>
	}
	if(prop.data.message){
		<Text style={styles.text}>Something WENT wRonG </Text>
	}
	else{
	return(
		<View style={styles.container}>
		<Text style={styles.text}> {prop.data.percentage} </Text>
		<Text style={styles.text}>{prop.data.result}</Text>
		</View>
)
}

		


}

const styles = StyleSheet.create({
	container:{
flex:1,
backgroundColor:"#fff",
alignItems:"center"
},
text:
{
	fontSize:30,
}

})
export default Displaylove