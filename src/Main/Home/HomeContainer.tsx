import { Alert, FlatList, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from '../../Shared/Assets/Icon'
import { NotificationComponent } from './Component/NotificationComponent'
import { CartNotif } from './Component/CartNotif'
import BannerComponent from './Component/BannerComponent'
import { bannerCategory, bannerList } from './banner'
import { MenuList } from './Menu'
import _ from 'lodash'
import MenuComponent from './Component/MenuComponent'
import BannerCategoryComponent from './Component/BannerCategoryComponent'
import SliderHorizontal from './Component/SliderHorizontal'

const HomeContainer = ({navigation}: any) => {
  let data = bannerList;
  let menu = MenuList;
  let bCategory = bannerCategory;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Icon type={'logo-eiger-dark'} size={50} />
        <View style={styles.row}>
          <NotificationComponent onBack={navigation} refreshBadge={false} />
          <CartNotif />
        </View>
      </View>
      <ScrollView style={styles.wrapper}>
        <View style={styles.bannerSection}>
          <BannerComponent data={data} />
        </View>
        <View style={styles.menuWrapper}>
          <SliderHorizontal data={menu} type={'menu'} />
          <SliderHorizontal data={bCategory} type={'banner-category'} />

          <View style={{marginTop: 20}}>
            <View style={[styles.row]}>
              <Text>Produk Terpopuler</Text>
              <Icon type="ic-arrow-right" />
            </View>
            <View style={styles.cardProduct}>
              <View style={styles.cardImgProduct}>
                <ImageBackground
                  source={require('../../Shared/Assets/Image/Product/1.jpg')}
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
                    }}>DISKON 100%</Text>
                  </View>
                </ImageBackground>
              </View>
              <Text style={styles.textProductCategory}>type barang || category</Text>
              <Text style={styles.textProductTitle}>Nama Barang</Text>
              <Text style={styles.textProductPrice}>Rp. 10.000</Text>
            </View>
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F6F7'
  },
  headerContainer: {
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal: 15,
    paddingVertical: 10,
    alignItems:'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  wrapper: { flex: 1, },
  bannerSection: {
    marginBottom: 20
  },
  menuWrapper: {
    marginHorizontal: 15,
    marginBottom: 20
  },
  cardProduct: {
    marginTop: 10
  },
  cardImgProduct: {
    borderRadius: 10,
  },
  textProductCategory: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 12,
  },
  textProductTitle: {
    fontSize: 20,
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