import React from "react";
import { Platform, Text, TouchableOpacity } from "react-native";
import Icon from "../../../Shared/Assets/Icon";
import IconBadge from "../../../Shared/Common/IconBadge";

export const CartNotif = () => {
  let badgeValue = 1
  return (
    <TouchableOpacity
      style={{
        alignSelf: 'flex-end',
        width: 50,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Platform.OS == 'ios' ? 3 : 0,
      }}
      >
      <IconBadge
        MainElement={<Icon type={'cart'} size={40} />}
        BadgeElement={
          <Text style={{fontSize: 9, color: '#FFFFFF', fontWeight: 'bold'}}>
            {badgeValue}
          </Text>
        }
        IconBadgeStyle={{
          right: -5,
          top: -5,
          width: 18,
          height: 18,
          borderRadius: 10,
          backgroundColor: 'red',
        }}
        Hidden={badgeValue === 0}
      />
    </TouchableOpacity>
  )
}