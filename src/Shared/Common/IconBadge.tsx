import * as React from 'react';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  IconBadge: {
    position: 'absolute',
    top: 1,
    right: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF0000',
  },
});

export default class IconBadge extends React.Component<any, any> {
  state = {};
  render() {
    const {
      MainViewStyle,
      MainElement,
      Hidden,
      IconBadgeStyle,
      BadgeElement,
    } = this.props;
    return (
      <View style={[MainViewStyle || {}]}>
        {MainElement}
        {!Hidden && (
          <View style={[styles.IconBadge, IconBadgeStyle || {}]}>
            {BadgeElement}
          </View>
        )}
      </View>
    );
  }
}
