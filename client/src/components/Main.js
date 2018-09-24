import React, { Component } from 'react';
import Card from './Card';
import './Main.css';

class Main extends Component {
	constructor() {
		super();
	}

	array = [
		'movie 1',
		'movie 2',
		'movie 3',
		'movie 4',
		'movie 5',
		'movie 6',
		'movie 7',
	];

	render() {
    	return (
			<section className="section main">
				<div className="container">
					<div class="tile is-ancestor is-vertical">
						<div class="tile is-vertical is-parent">
							{
								this.array.map((string) => {
        							return <Card name={string}/>;
								})
							}
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Main;