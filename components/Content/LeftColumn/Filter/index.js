import React from 'react'
import { observer } from 'startupjs'
import { View, Text } from 'react-native'
import './index.styl'

export default observer(function Filter () {
  return pug`
    View.root
      Text.header Filter by Price
      View.filterBlock
        View.filter
        View.filterData
          Text.lemma Price : $20 - $100
          Text.lemma Filter

  `
})
