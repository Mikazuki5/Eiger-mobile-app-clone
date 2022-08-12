import * as React from 'react'
import * as _ from 'lodash'
import { 
  SafeAreaView, 
  ScrollView, 
  Text, 
  View 
} from 'react-native'

import Icon from '../../Shared/Assets/Icon'

import BannerComponent from './Component/BannerComponent'
import SliderHorizontal from './Component/SliderHorizontal'
import { CartNotif } from './Component/CartNotif'
import { NotificationComponent } from './Component/NotificationComponent'

import { MenuList } from './Menu'
import { productPopular } from './product'
import { 
  bannerCategory, 
  bannerList 
} from './banner'

import useTheme from '@/Hooks/useTheme'

const HomeContainer = ({navigation}: any) => {
  let data = bannerList;
  let menu = MenuList;
  let bCategory = bannerCategory;
  let popularProduct = productPopular;

  const {Layout, Gutters} = useTheme()

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: '#F9F6F7' }]}>
      <View style={[
        Layout.row, 
        Layout.justifyContentBetween, 
        Layout.alignItemsCenter, 
        Gutters.regularHMargin, 
        Gutters.regularVPadding
      ]}>
        <Icon type={'logo-eiger-dark'} size={50} />
        <View style={[
          Layout.row, 
          Layout.justifyContentBetween, 
          Layout.alignItemsCenter
        ]}>
          <NotificationComponent onBack={navigation} refreshBadge={false} />
          <CartNotif />
        </View>
      </View>
      <ScrollView style={[Layout.fill]}>
        <View style={[Gutters.regularBMargin]}>
          <BannerComponent data={data} />
        </View>
        <View style={[
          Gutters.regularHMargin, 
          Gutters.regularBMargin
        ]}>
          <SliderHorizontal data={menu} type={'menu'} />
          <SliderHorizontal data={bCategory} type={'banner-category'} />

          <View style={[Gutters.largeTMargin]}>
            <View style={[
              Layout.row, 
              Layout.justifyContentBetween, 
              Layout.alignItemsCenter
            ]}>
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

export default HomeContainer;