import {Component} from 'react';

import products from '../storeDB/storeDB';

import IconSwitch from '../icon-switch/IconSwitch';
import CardsView from '../cards-view/cards-view';
import ListView from '../list-view/list-view';

import './store.css';

class Store extends Component {	
	constructor(props) {
		super(props);
	
		this.state = {
			products: products,
			icon: 'view_module'
		}
	}

	onSwitch = (icon) => {
		this.setState({icon: icon});
	}

	render() {
		const{products, icon} = this.state;

		return (
			<div className="store">
				<IconSwitch icon={icon} onSwitch={this.onSwitch}/>
				{icon === 'view_module' ? (<CardsView cards={products} />) : (<ListView items={products} />)}
			</div>
		)
	}
}

export default Store;
