import { Alert, FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import Icon from '../../../Shared/Assets/Icon';
import _ from 'lodash';

interface Props {
  data?: any,
  type?: string,
}

const SliderHorizontal:FC<Props> = (props) => {

  const _renderContent = ({item, index}: any) => {
    switch (props.type) {
      case 'menu':
        return _renderMenu(item, index);

      case 'banner-category':
        return _renderBannerCategory(item, index);
    
      default:
        return null;
        break;
    }
  }

  const _renderMenu = (item: any, index:any) => {
    return (
      <View style={{marginRight: 10, marginBottom: 20}}>
        <TouchableOpacity 
          style={styles.cardWrapper}
          onPress={() => Alert.alert(`${item.name}`)}
        >
          <Icon type={_.get(item, 'icon')} size={30} tintColor={'#D73350'} />
        </TouchableOpacity>
      </View>
    )
  }

  const _renderBannerCategory = (item:any, index:any) => {
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
      data={props.data}
      keyExtractor={(index) => index.toString()}
      horizontal
      renderItem={_renderContent}
    />
  )
}

export default SliderHorizontal

const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: '#FFFFFF',
    width: 55,
    height: 60,
    borderRadius: 10,
    justifyContent:'center'
  },
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