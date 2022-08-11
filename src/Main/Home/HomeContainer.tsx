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
import { productPopular } from './product'

const HomeContainer = ({navigation}: any) => {
  let data = bannerList;
  let menu = MenuList;
  let bCategory = bannerCategory;
  let popularProduct = productPopular;

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
            <SliderHorizontal data={popularProduct} type={'prod-popularity'} />
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
  }
})