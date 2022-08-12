import React, { useEffect } from "react"
import { Platform, Text, TouchableOpacity } from "react-native"
import Icon from "../../../Shared/Assets/Icon"
import IconBadge from "../../../Shared/Common/IconBadge"


export const NotificationComponent = (props: any) => {
  const {refreshBadge, navigation} = props;
  
  let notifCount = 1;
  return (
    <TouchableOpacity
      style={{
        alignSelf: 'flex-end',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Platform.OS == 'ios' ? 3 : 0,
      }}
    >
      <IconBadge
        MainElement={<Icon type={'bell'} size={40} />}
        BadgeElement={
          <Text style={{fontSize: 9, color: '#FFFFFF', fontWeight: 'bold'}}>
            {refreshBadge ? '-' : notifCount}
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
        Hidden={notifCount === 0}
      />
    </TouchableOpacity>
  )
}