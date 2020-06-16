import React from 'react'
import { observer } from 'startupjs'
import { View, Text, Linking } from 'react-native'
import './index.styl'

export default observer(function Categories () {
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

  return pug`
    View.root
      Text.header Categories
      View.categoriesBlock
        each value, index in categories
          View.cat(key=index styleName=!index && 'first')
            Text.text(onPress=() => Linking.openURL('#'))  #{value.category}
            Text.text #{value.count}

  `
})
