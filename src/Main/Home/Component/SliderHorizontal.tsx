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
      case 'prod-popularity':
        return _renderProductPopularity(item, index);
    
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

  const _renderProductPopularity = (item: any, index:any) => {
    return(
      <View style={styles.cardProduct}>
        <View style={styles.cardImgProduct}>
          <ImageBackground
            source={_.get(item, 'imgProduct')}
            style={{
              width: 180,
              height: 200,
              marginBottom: 5
            }}
            imageStyle={{
              borderRadius:10,
            }}
            resizeMode='contain'
          >
            {item?.isDiscount && (
              <View style={{
                backgroundColor: '#FD3C20',
                width: '50%',
                justifyContent:'center',
                height: 25,
                paddingHorizontal:10,
                margin: 5,
                borderRadius: 5
              }}>
                <Text style={{
                  color: 'white',
                  fontSize: 11,
                  fontWeight: '800'
                }}>DISKON {_.get(item, 'discountPercent')}%</Text>
              </View>
            )}
          </ImageBackground>
        </View>
        <View style={{width: 179}}>
          <Text style={styles.textProductCategory}>{_.get(item, 'typeProduct') + ' • ' +_.get(item, 'category')}</Text>
          <Text style={styles.textProductTitle}>{_.get(item, 'title')}</Text>
          <Text style={styles.textProductPrice}>{_.get(item, 'price')}</Text>
          {item?.isDiscount && (
            <View style={[{ zIndex: 10,}]}>
              <Text style={styles.textProductPrice}>{_.get(item, 'priceAfterDiscount')}</Text>
              <View
                style={{
                  width: 100,
                  height: 1.5,
                  backgroundColor: 'grey',
                  position:'relative',
                  bottom: 9.5
                }}
              />
            </View>
          )}
        </View>
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
  },
  cardProduct: {
    marginTop: 10,
    marginRight: 15
  },
  cardImgProduct: {
    borderRadius: 10,
  },
  textProductCategory: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 12,
  },
  textProductTitle: {
    fontSize: 17,
    color: 'black',
    fontWeight: '900',
    lineHeight: 25
  },
  textProductPrice: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
    lineHeight: 20
  }
})