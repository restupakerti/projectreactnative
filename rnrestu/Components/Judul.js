import React from 'react';
import {Text} from 'react-native';

class Judul extends React.Component{
	render(){
		return(
			
			<Text style={salon.judul}
			>{this.props.Judul}</Text>
			)
	}
}

const salon = {
	judul:{
		color : '#f00',
		fontSize : 30,
		backgroundColor: '#0f0'
	}
}
export default Judul;