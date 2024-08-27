import './cards-view.css';

const CardsView  = (props) => {
	const {cards} = props;

	const allCards = cards.map((item, i) => {
		return (
			<div className="item-card" key={i}>
				<div className="header">
					<h1 className="item-name">{item.name}</h1>
					<h1 className="item-color">{item.color}</h1>
				</div>

				<img className="photo" src={item.img}  alt={item.name}/>

				<div className="footer">
					<h1 className="item-price">${item.price}</h1>
					<button className="add-cart">Add to cart</button>
				</div>	
			</div>
		)
	})

	return (
		<div className="image-gallery">
			{allCards}
		</div>
	)
}

export default CardsView;