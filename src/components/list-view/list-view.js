import './list-view.css';

const ListView  = (props) => {
	const {items} = props;

	const allCards = items.map((item, i) => {
		return (
			<div className="item-card-list" key={i}>	
			<img className="photo-list" src={item.img}  alt=""/>
					<h1 className="item-name">{item.name}</h1>
					<h1 className="item-color">{item.color}</h1>
					<h1 className="item-price">${item.price}</h1>
					<button className="add-cart">Add to cart</button>	
			</div>
		)
	})

	return (
		<div className="image-gallery">
			{allCards}
		</div>
	)
}

export default ListView ;