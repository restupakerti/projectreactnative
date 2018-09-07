import React from 'react';
import {Text} from 'react-native';

class Judul extends React.Component{
	render(){
		return(
			
			<Text style={salon.judul}
			>BIODATA</Text>
			)
	}
}

const salon = {
	judul:{
		color : '#f00',
		fontSize : 50,
		backgroundColor: '#727272'
	}
}
export default Judul;