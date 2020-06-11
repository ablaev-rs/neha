import React from 'react'
import { observer } from 'startupjs'
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native'
import './index.styl'
import { BASE_URL } from '@env'

export default observer(function RightColumn () {
  const base = BASE_URL
  const arrowUrl = '/img/down-arrow.png'
  const icons = [
    '/img/grid.png',
    '/img/menu.png'
  ]
  const products = [
    {
      imageUrl: '/img/prod1.jpg',
      name: 'WOODEN FURNITURE',
      category: 'Electronic',
      price: '$110.00',
      sale: true
    },
    {
      imageUrl: '/img/prod2.jpg',
      name: 'WOODEN FURNITURE',
      category: 'Electronic',
      price: '$110.00',
      sale: false
    },
    {
      imageUrl: '/img/prod3.jpg',
      name: 'WOODEN FURNITURE',
      category: 'Electronic',
      price: '$110.00',
      sale: true
    },
    {
      imageUrl: '/img/prod4.jpg',
      name: 'WOODEN FURNITURE',
      category: 'Electronic',
      price: '$110.00',
      sale: false
    },
    {
      imageUrl: '/img/prod5.jpg',
      name: 'WOODEN FURNITURE',
      category: 'Electronic',
      price: '$110.00',
      sale: true
    },
    {
      imageUrl: '/img/prod6.jpg',
      name: 'WOODEN FURNITURE',
      category: 'Electronic',
      price: '$110.00',
      sale: false
    },
    {
      imageUrl: '/img/prod7.jpg',
      name: 'WOODEN FURNITURE',
      category: 'Electronic',
      price: '$110.00',
      sale: true
    },
    {
      imageUrl: '/img/prod8.jpg',
      name: 'WOODEN FURNITURE',
      category: 'Electronic',
      price: '$110.00',
      sale: false
    },
    {
      imageUrl: '/img/prod9.jpg',
      name: 'WOODEN FURNITURE',
      category: 'Electronic',
      price: '$110.00',
      sale: true
    },
    {
      imageUrl: '/img/prod10.jpg',
      name: 'WOODEN FURNITURE',
      category: 'Electronic',
      price: '$110.00',
      sale: false
    },
    {
      imageUrl: '/img/prod11.jpg',
      name: 'WOODEN FURNITURE',
      category: 'Electronic',
      price: '$110.00',
      sale: true
    },
    {
      imageUrl: '/img/prod12.jpg',
      name: 'WOODEN FURNITURE',
      category: 'Electronic',
      price: '$110.00',
      sale: false
    }
  ]
  return pug`
    View.root
      View.searchData
        View.searchResult
          Text.found.red 23#{' '}
            Text.found Product Found of#{' '}
            Text.found.red 50
          
          Text.sort Sort By : 
            Text.dropdown Default
            Image.downArrow(
              source={uri: base + arrowUrl}
            )
        
        View.icons
          each url, index in icons
            TouchableOpacity.btnIcons(key = index styleName=index === 0 ? 'first' : '')
              Image.image(
                source={uri: base + url}
              )
              
      View.cards
        each product, index in products
          View.card(key = index styleName=index === 0 ? 'first' : '')
            TouchableOpacity
              Image.photoProduct.centered(
                source={uri: base + product.imageUrl}
              )
              if product.sale
                View.saleBlock
                  Text.sale sale
            View.description
              Text.name(onPress=() => Linking.openURL('#')) #{product.name}
              Text.price #{product.price}
            Text.category #{product.category}







  `
})
