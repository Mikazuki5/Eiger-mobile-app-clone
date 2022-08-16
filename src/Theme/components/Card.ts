import { StyleSheet } from "react-native";
import { CommonParams } from "../theme";

export default function <C>({Colors, Gutters, Layout}: CommonParams<C>) {
  
  const base = {
    backgroundColor: Colors.primary,
    ...Gutters.regularHPadding,
    ...Layout.alignItemsCenter,
    borderRadius: 10,
    paddingVertical: 5
  }

  const rounded12 = {
    borderRadius: 12
  }

  return StyleSheet.create({
    base,
    rounded12
  })

}