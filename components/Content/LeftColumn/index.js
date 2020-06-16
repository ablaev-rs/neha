import React from 'react'
import { observer } from 'startupjs'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import './index.styl'
import { BASE_URL } from '@env'
import Categories from 'components/Content/LeftColumn/Categories'
import Colors from 'components/Content/LeftColumn/Colors'
import Sizes from 'components/Content/LeftColumn/Sizes'
import Products from 'components/Content/LeftColumn/Products'

export default observer(function LeftColumn () {
  const base = BASE_URL
  const url = '/img/search-active.png'

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

      Categories
      Colors
      Sizes
      Products

  `
})
