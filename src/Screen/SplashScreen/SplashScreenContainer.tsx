import React, { useEffect } from 'react'
import { 
  View, 
  Image, 
  SafeAreaView, 
  Text, 
  Animated,
} from 'react-native'
import useTheme from '@/Hooks/useTheme'

const SplashScreenContainer = ({navigation}: any) => {
  const {Images, Layout, Fonts} = useTheme();
  const splashScreenTimeoutMs = 3 * 1000;

  let animatedValue:any = {}
  animatedValue = new Animated.Value(0);

  useEffect(() => {
    animated()
    setTimeout(() => {
      navigation.replace('Home')
    }, splashScreenTimeoutMs);
  }, [])

  const animated = () => {
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: false
    }).start();
  }
  

  return (
    <SafeAreaView 
      style={[
        Layout.fill, 
        Layout.alignItemsCenter, 
        Layout.justifyContentCenter
      ]}>
        <Animated.View>
          <Image
            source={Images.logo}
            style={{
              width: 200,
              height: 200,
            }}
            resizeMode={'contain'}
          />
        </Animated.View>
        <View style={[Layout.positionAbsolute, {bottom: 30}]}>
          <Text style={[Fonts.textSmall]}>Made by Eiger Indonesia</Text>
        </View>
    </SafeAreaView>
  )
}

export default SplashScreenContainer