import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

import { setNumber } from '../Actions/mainPageActions.js'

class MainPage extends Component {
	constructor(props) {
		super(props);
	}

	changeNumber(number) {
		this.props.dispatch(setNumber(number));
	}

	render() {
		return (
			<div>
				<input type='button' value='click here' 
					onClick={() => {this.changeNumber(123)}}/>
				<br/>
				I am the index file!!
			</div>
		);
	}
}

function mapStateToProps(state) {
	return state.mainPageReducer;
}

export default connect(mapStateToProps)(MainPage);