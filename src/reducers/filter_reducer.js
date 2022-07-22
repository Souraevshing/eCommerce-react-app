import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((p) => p.price)
    maxPrice = Math.max(...maxPrice)

    console.log(maxPrice)

    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    }
  }

  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false }
  }

  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true }
  }

  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload }
  }

  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state
    let productsList = [...filtered_products]
    if (sort === 'Lowest') {
      productsList = productsList.sort((a, b) => {
        if (a.price < b.price) {
          return -1
        }
        if (a.price > b.price) {
          return 1
        }
        return 0
      })
    }

    if (sort === 'Highest') {
      productsList = productsList.sort((a, b) => b.price - a.price)
    }

    if (sort === 'A-Z') {
      productsList = productsList.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
    }

    if (sort === 'Z-A') {
      productsList = productsList.sort((a, b) => {
        return b.name.localeCompare(a.name)
      })
    }

    return { ...state, filtered_products: productsList }
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload
    return { ...state, filters: { ...state.filters, [name]: value } }
  }

  if (action.type === FILTER_PRODUCTS) {
    // console.log('filtering products')
    const { all_products } = state
    const { text, category, company, color, price, shipping } = state.filters

    let productsList = [...all_products]

    //filtering products based on search
    if (text) {
      productsList = productsList.filter((product) => {
        return product.name.toLowerCase().startsWith(text)
      })
    }

    //filtering products based on category
    if (category !== 'all') {
      productsList = productsList.filter(
        (product) => product.category === category
      )
    }

    //filtering products based on company
    if (company !== 'all') {
      productsList = productsList = productsList.filter(
        (product) => product.company === company
      )
    }

    //filtering products based on color
    if (color !== 'all') {
      productsList = productsList.filter((product) => {
        return product.colors.find((c) => c === color)
      })
    }

    //filtering products based on price
    productsList = productsList.filter((product) => product.price <= price)

    //filtering products based on shipping
    if (shipping) {
      productsList = productsList.filter((product) => product.shipping === true)
    }

    return { ...state, filtered_products: productsList }
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: '',
        company: 'all',
        category: 'all',
        color: 'all',
        price: state.filters.max_price,
        shipping: false,
      },
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
