const shaker = (quantity, fruit, alcohol) => `${quantity} ${fruit} ${(alcohol ? `cocktail` : `milkshake`) + quantity > 1 ? 's' : ''}`
