import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";


class JoinBoard extends Component {
	
	/* componentDidMount() {
		const server = process.env.SERVER || 'localhost:9000';
		const client = new W3CWebSocket('ws://' + server);

		client.onopen = () => {
		  console.log('WebSocket Client Connected');
		};
		
		client.onmessage = (message) => {
			var msg = JSON.parse(message.data);
			console.log(msg);
		};
	} */
	
	
	render() {
		return (
		  <div>
				JoinBoard - {this.props.match.params.boardID}
		  </div>
		);
	}
}

export default JoinBoard;
