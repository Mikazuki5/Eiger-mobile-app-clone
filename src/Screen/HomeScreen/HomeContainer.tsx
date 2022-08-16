import * as React from 'react'
import * as _ from 'lodash'
import { 
  Image,
  ImageBackground,
  SafeAreaView, 
  ScrollView, 
  Text, 
  TouchableOpacity, 
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

  const {Layout, Gutters, Common, Images, Fonts, Colors} = useTheme()

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: '#F9F6F7' }]}>
      <View style={[
        Layout.row, 
        Layout.justifyContentBetween, 
        Layout.alignItemsCenter, 
        Gutters.regularHMargin, 
        Gutters.tinyVPadding
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

        <View style={[Gutters.regularHMargin, Gutters.regularBMargin]}>
          <ImageBackground
            source={Images.banner}
            style={[Layout.fullWidth,Layout.fill, {height: 180}]}
            imageStyle={[Common.card.rounded12]}
          >
            <View style={[
              Common.card.base, 
              Gutters.tinyLMargin, 
              Gutters.tinyTMargin, 
              {
                width: 60,
                backgroundColor: '#F94F16'
              }
            ]}>
              <Text style={[
                Fonts.textExtraSmall, 
                Fonts.textBold, {color: Colors.white}
              ]}>New!</Text>
            </View>
            <View style={[
              Layout.alignItemsCenter, 
              Gutters.tinyVMargin, 
              Gutters.largeVMargin
            ]}>
              <Text style={[
                Fonts.textSmall, 
                Fonts.textBold, 
                {color: Colors.white}
              ]}>GET READY FOR YOUR ADVENTURE!</Text>
              <View style={[
                Layout.row, 
                Layout.justifyContentAround,
                Gutters.tinyTMargin
              ]}>
                <TouchableOpacity style={[
                  Common.button.rounded, 
                  Gutters.tinyRMargin, 
                  {backgroundColor: Colors.white, height: 40}
                ]}>
                  <Text style={[Fonts.textSmall]}>Men</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[
                  Common.button.rounded, 
                  {
                    backgroundColor: Colors.white, 
                    height: 40
                  }
                ]}>
                  <Text style={[Fonts.textSmall]}>Women</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={[Gutters.regularHMargin, Gutters.regularBMargin]}>
          <Image 
            source={Images.banner2}
            style={[Layout.fullWidth,Layout.fill, Common.card.rounded12, {height: 180}]}
            resizeMode='contain'
          />
          <View style={[
            Layout.row, 
            Layout.justifyContentBetween, 
            Layout.alignItemsCenter,
            Gutters.regularTMargin
          ]}>
            <Text>New Arrival</Text>
            <Icon type="ic-arrow-right" />
          </View>
          <SliderHorizontal data={popularProduct} type={'prod-popularity'} />
        </View>

        <View style={[Gutters.regularHMargin, Gutters.regularBMargin]}>
          <Image 
            source={Images.banner3}
            style={[Layout.fullWidth,Layout.fill, Common.card.rounded12, {height: 180}]}
            resizeMode='contain'
          />
          <View style={[
            Layout.row, 
            Layout.justifyContentBetween, 
            Layout.alignItemsCenter,
            Gutters.regularTMargin
          ]}>
            <Text>EIGER CYCLING PACK</Text>
            <Icon type="ic-arrow-right" />
          </View>
          <SliderHorizontal data={popularProduct} type={'prod-popularity'} />
        </View>

        <View style={[Gutters.regularHMargin, Gutters.regularBMargin]}>
          <Image 
            source={Images.banner4}
            style={[Layout.fullWidth,Layout.fill, Common.card.rounded12, {height: 180}]}
            resizeMode='contain'
          />
          <View style={[
            Layout.row, 
            Layout.justifyContentBetween, 
            Layout.alignItemsCenter,
            Gutters.regularTMargin
          ]}>
            <Text>EIGER RIDING ACTIVITY</Text>
            <Icon type="ic-arrow-right" />
          </View>
          <SliderHorizontal data={popularProduct} type={'prod-popularity'} />
        </View>

        <View style={[Gutters.regularHMargin, Gutters.regularBMargin]}>
          <Image 
            source={Images.banner5}
            style={[Layout.fullWidth,Layout.fill, Common.card.rounded12, {height: 180}]}
            resizeMode='contain'
          />
          <View style={[
            Layout.row, 
            Layout.justifyContentBetween, 
            Layout.alignItemsCenter,
            Gutters.regularTMargin
          ]}>
            <Text>EIGER LIFESTYLE SET</Text>
            <Icon type="ic-arrow-right" />
          </View>
          <SliderHorizontal data={popularProduct} type={'prod-popularity'} />
        </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeContainer;