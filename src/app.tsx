import {Consumer} from 'coreact';
import React, {PureComponent} from 'react';

const logo = require('./logo.png');

@Consumer
export class App extends PureComponent {
	public render() {
		return (
			<div className="container p-4 text-center">
				<img src={logo}/>
				<h2>Hello, World!</h2>
				<div>This is a boilerplate codebase, for our beloved service oriented framework, coreact!</div>
			</div>
		);
	}
}
