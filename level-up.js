function shaker(quantity, fruit, alcohol) {
	return `${quantity} ${fruit} ${alcohol ? quantity > 1 ? 'cocktails' : 'cocktail' : quantity > 1 ? 'milkshakes' : 'milkshake'}`;
}
