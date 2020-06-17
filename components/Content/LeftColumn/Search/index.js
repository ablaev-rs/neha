import React from 'react'
import { observer } from 'startupjs'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import './index.styl'
import { BASE_URL } from '@env'

export default observer(function LeftColumn () {
  const base = BASE_URL
  const url = '/img/search-active.png'

  return pug`
    View.root
      Text.header(styleName='first') Search Products
      View.searchBlock
        TextInput.searchField(placeholder = 'Search Products...')
        TouchableOpacity.searchBtn
          Image.image(
            source={uri: base + url}
          )


  `
})
