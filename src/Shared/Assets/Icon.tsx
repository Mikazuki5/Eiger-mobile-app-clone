import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Icon = (props:any) => {
  const {style, onPress, size, tintColor} = props;

  const getImage = () => {
    const { type } = props;
    switch (type) {
      case 'backpack':
        return require('./resIcon/backpack.png');
      case 'bell':
        return require('./resIcon/bell.png');
      case 'belt':
        return require('./resIcon/belt.png');
      case 'cart':
        return require('./resIcon/cart-new.png');
      case 'ic-arrow-right':
        return require('./resIcon/ArrowRight.png');
      case 'jacket':
        return require('./resIcon/jacket.png');
      case 'logo-eiger-dark':
        return require('./resIcon/logo-dark.png');
      case 'slipper':
        return require('./resIcon/slippers.png');
      case 'sneakers':
        return require('./resIcon/sneakers.png');
      case 'sun-glasses':
        return require('./resIcon/sun-glasses.png');
      case 'pants':
        return require('./resIcon/trousers.png');
      case 'tshirt':
        return require('./resIcon/tshirt.png');
    
      default:
        return require('./resIcon/unknown.png');
    }
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!onPress}
      style={
        style ? style : {justifyContent: 'center', alignItems: 'center'}
      }>
      <Image
        style={{
          width: size || 20,
          height: size || 20,
          tintColor: tintColor ? tintColor : undefined,
        }}
        resizeMode={'contain'}
        source={getImage()}
      />
    </TouchableOpacity>
  );
}

export default Icon

const styles = StyleSheet.create({})