import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  changeCart: ['cart'],
  changeItemcountup: ['cart'],
  changeItemcountdown: ['cart'],
  changeRemoveitem: ['cart'],
  changeClearcart: ['cart']
})

export const CartTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  cart: []
})

/* ------------- Reducers ------------- */

export const changeCart = (state, { cart }) => {
  const cartArray = state.cart && state.cart.length ? [...state.cart] : []
  let updateIndex = -1;
  for (var i = 0; i < cartArray.length; i++) {
    if (cartArray[i].title === cart.title) {
      updateIndex = i;
      break;
    }
  }

  if (updateIndex === -1) {
    cartArray.push(cart);
  } else {
    cartArray[updateIndex] = {
      ...cartArray[updateIndex],
      count: parseInt(cartArray[updateIndex].count) + 1
    }
  }
  return state.merge({ cart: cartArray })
}

export const changeItemcountup = (state, itemKey) => {
  const cartArray = state.cart && state.cart.length ? [...state.cart] : []
  cartArray[itemKey.cart] = {
    ...cartArray[itemKey.cart],
    count: parseInt(cartArray[itemKey.cart].count) + 1
  }

  return state.merge({ cart: cartArray });
}

export const changeItemcountdown = (state, itemKey) => {
  const cartArray = state.cart && state.cart.length ? [...state.cart] : []

  if (parseInt(cartArray[itemKey.cart].count) > 1) {
    cartArray[itemKey.cart] = {
      ...cartArray[itemKey.cart],
      count: parseInt(cartArray[itemKey.cart].count) - 1
    }
  } else {
    cartArray[itemKey.cart] = {
      ...cartArray[itemKey.cart],
      count: 1
    }
  }

  return state.merge({ cart: cartArray });
}

export const changeClearcart = (state) => {
  const cartArray = [];
  return state.merge({ cart: cartArray });
}

export const changeRemoveitem = (state, itemKey) => {
  const cartArray = state.cart && state.cart.length ? [...state.cart] : []
  cartArray.splice(itemKey.cart, 1);
  return state.merge({ cart: cartArray });
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHANGE_CART]: changeCart,
  [Types.CHANGE_ITEMCOUNTUP]: changeItemcountup,
  [Types.CHANGE_ITEMCOUNTDOWN]: changeItemcountdown,
  [Types.CHANGE_REMOVEITEM]: changeRemoveitem,
  [Types.CHANGE_CLEARCART]: changeClearcart
})
