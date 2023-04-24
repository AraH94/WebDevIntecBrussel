export const initialState = {
	basket: [],
	user: null,
};

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case 'ADD_TO_BASKET':
			// Logic for adding item to basket
			return {
				...state,
				basket: [...state.basket, action.item],
			};
		case 'REMOVE_FROM_BASKET':
			// Logic for removing item from basket
			// Find index of the item to remove
			const itemIndex = state.basket.findIndex(item => item.id === action.itemId);
			// Create a new array without the item to remove
			const newBasket = [...state.basket.slice(0, itemIndex), ...state.basket.slice(itemIndex + 1)];
			return {
				...state,
				basket: newBasket,
			};
		default:
			return state;
	}
};

export default reducer;




// export const initialState = {
// 	basket: [],
// 	user: null,
// };

// const reducer = (state, action) => {
// 	console.log(action);
// 	switch (action.type) {
// 		case 'ADD_TO_BASKET':
// 			// Logic for adding item to basket
// 			return {
// 				...state,
// 				basket: [...state.basket, action.item],
// 			};
// 		case 'REMOVE_FROM_BASKET':
// 			// Logic for removing item from basket
// 			return { state }
// 		default:
// 			return state;
// 	}
// };

// export default reducer;