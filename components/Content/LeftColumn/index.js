import React from 'react'
import { observer } from 'startupjs'
import { View, Text, TextInput, TouchableOpacity, Image, Linking } from 'react-native'
import './index.styl'
import { BASE_URL } from '@env'

export default observer(function LeftColumn () {
  const base = BASE_URL
  const pathYellowStar = base + '/img/starred.png'
  const pathWhiteStar = base + '/img/starwhite.png'
  const url = '/img/search-active.png'
  const categories = [
    {
      category: 'Accessories',
      count: 4
    },
    {
      category: 'Book',
      count: 9
    },
    {
      category: 'Clothing',
      count: 5
    },
    {
      category: 'Homelife',
      count: 3
    },
    {
      category: 'Kids & Baby',
      count: 4
    }
  ]
  const colors = [
    { color: '#FF4136' },
    { color: '#FF9FF9' },
    { color: '#4153FF' },
    { color: '#00C0FF' },
    { color: '#5FFFCC' },
    { color: '#B55FFF' }
  ]
  const sizes = [
    { size: 'XL' },
    { size: 'M' },
    { size: 'L' },
    { size: 'ML' },
    { size: 'LM' }
  ]
  const products = [
    {
      image: '/img/1.jpg',
      name: 'Flying Drone',
      rating: [1, 1, 1, 0, 0],
      price: '$140.00'
    },
    {
      image: '/img/2.jpg',
      name: 'Flying Drone',
      rating: [1, 1, 0, 0, 0],
      price: '$140.00'
    },
    {
      image: '/img/3.jpg',
      name: 'Flying Drone',
      rating: [1, 1, 1, 1, 0],
      price: '$140.00'
    },
    {
      image: '/img/4.jpg',
      name: 'Flying Drone',
      rating: [1, 1, 0, 0, 0],
      price: '$140.00'
    }
  ]

  return pug`
    View.root
      Text.header(styleName= 'first') Search Products

      View.searchBlock
        TextInput.searchField(placeholder = 'Search Products...')
        TouchableOpacity.searchBtn
          Image.image(
            source={uri: base + url}
          )

      Text.header Filter by Price
      
      View.filterBlock
        View.filter
        View.filterData
          Text.lemma Price : $20 - $100
          Text.lemma Filter

      Text.header Categories
      
      View.categoriesBlock
        each value, index in categories
          View.cat(key=index styleName=!index && 'first')
            Text.text(onPress=() => Linking.openURL('#'))  #{value.category}
            Text.text #{value.count}

      Text.header Color

      View.colorsBlock
        each value, index in colors
          View.colors(key=index styleName=!index && 'first')
            TouchableOpacity.colorBtn(style = { backgroundColor: value.color })

      Text.header Size

      View.sizeBlock
        each value, index in sizes
          View.sizes(key=index styleName=!index && 'first')
            Text.text(onPress=() => Linking.openURL('#'))  #{value.size}
  
      Text.header Top rated products

      View.relatedBlock
        each value, index in products
          View.productInfo
            Image.imageProduct(
              source={uri: base + value.image}
            )
            View.about
              Text.name(onPress=() => Linking.openURL('#')) #{value.name}
              View.starsBlock
                each rate, index in value.rating   
                  View.stars(key=index styleName=!index && 'first') 
                    if rate === 1
                      Image.imageStar(
                        source={uri: pathYellowStar}
                      )
                    else
                      Image.imageStar(
                        source={uri: pathWhiteStar}
                      )
              Text.price #{value.price}


  `
})
