import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from '../../../Shared/Assets/Icon'
import _ from 'lodash'

const MenuComponent = (props:any) => {
  let {data} = props

  const _renderList = ({item, index}: any) => {
    return (
      <View style={{marginRight: 10, marginBottom: 20}}>
        <TouchableOpacity 
          style={styles.cardWrapper}
          onPress={() => Alert.alert(`${item.name}`)}
        >
          <Icon type={_.get(item, 'icon')} size={30} />
        </TouchableOpacity>
      </View>
    )
  }
  
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      renderItem={_renderList}
    />
  )
}

export default MenuComponent

const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: '#F7F7F7',
    width: 55,
    height: 60,
    borderRadius: 10,
    justifyContent:'center'
  },
})