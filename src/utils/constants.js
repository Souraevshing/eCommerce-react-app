import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: 'Easy availability of products.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: 'To provide seamless experience.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: 'Providing great experience past last year.',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
