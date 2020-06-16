import React from 'react'
import { observer } from 'startupjs'
import { View, Text, Image, Linking } from 'react-native'
import './index.styl'
import { BASE_URL } from '@env'

export default observer(function LeftColumn () {
  const base = BASE_URL
  const pathYellowStar = base + '/img/starred.png'
  const pathWhiteStar = base + '/img/starwhite.png'
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
      Text.header Top rated products
      View.relatedBlock
        each value, index in products
          View.productInfo(key=index styleName=!index && 'first')
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
              Text.price= value.price


  `
})
