import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import _ from 'lodash'

const BannerCategoryComponent = (props:any) => {
  let {data} = props

  const _renderCategory = ({item, index}: any) => {
    return (
      <View>
        <TouchableOpacity style={{borderRadius: 15, marginRight: 10}}>
          <ImageBackground
            source={_.get(item, 'url')}
            resizeMode='contain'
            style={styles.cardWrapperCategory}
            imageStyle={{borderRadius: 10}}
          >
            <Text style={styles.textCategory}>{_.get(item, 'category')}</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    )
  }
  
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      renderItem={_renderCategory}
    />
  )
}

export default BannerCategoryComponent

const styles = StyleSheet.create({
  cardWrapperCategory: {
    width: 170,
    height: 190,
    justifyContent:'center',
    alignItems:'center',
  },
  textCategory: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '900'
  }
})