import React from 'react'
import { observer } from 'startupjs'
import { View } from 'react-native'
import './index.styl'
import Filter from 'components/Content/LeftColumn/Filter'
import Search from 'components/Content/LeftColumn/Search'
import Categories from 'components/Content/LeftColumn/Categories'
import Colors from 'components/Content/LeftColumn/Colors'
import Sizes from 'components/Content/LeftColumn/Sizes'
import Products from 'components/Content/LeftColumn/Products'

export default observer(function LeftColumn () {
  return pug`
    View.root
      Search
      Filter
      Categories
      Colors
      Sizes
      Products

  `
})
