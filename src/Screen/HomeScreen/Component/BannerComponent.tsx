import _ from 'lodash';
import React from 'react'
import { Dimensions, Image, Platform, StyleSheet, Text, View } from 'react-native'
import Carousel from 'react-native-snap-carousel-v4';

const BannerComponent = (props: any) => {
  let carousel: any = null;

  const renderBannerItem = () => {
    return({item}: any) => {
      return(
        <View>
          <Image
            style={styles.bannerCarousel}
            resizeMethod='auto'
            resizeMode= {Platform.OS == 'ios' ? 'cover' : 'contain'}
            source={item.url}
          />
        </View>
      )
    }
  }

  return(
    <>
      <Carousel
        ref={(c) => { carousel = c; }}
        data={props.data}
        renderItem={renderBannerItem()}
        sliderWidth={Dimensions.get("screen").width}
        itemWidth={Dimensions.get("screen").width - 60}
        itemHeight={240}
        loop
        autoplay
        layout={"default"}
        loopClonesPerSide={5}
        style={{backgroundColor: 'blue'}}
      />
    </>
  )
  }

export default BannerComponent

const styles = StyleSheet.create({
  bannerCarousel: {
    height: 190,
    width: "100%",
    borderRadius: 24,
  }
})