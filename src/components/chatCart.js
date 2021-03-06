import React from "react"
import {View,StatusBar,Text,ScrollView,ImageBackground,Image,TouchableOpacity} from "react-native"
const {flex} = require("../styles/flex.js")
const {fonts} = require("../styles/fonts.js")
const {colors}=require("../styles/colors.js")

const Component = ({item,navigation})=>{
  const {avatar,lastMessage, user,_id} = item
  return(
    <TouchableOpacity
      onPress={
        ()=>navigation.navigate("conversation",{partnerId:_id, group_member:lastMessage.group_member})
      }
    >
    <View style={[flex.Row,flex.Wrap, {width:"100%",padding:5,borderStyle:"solid",borderWidth:0.3,borderTopColor:"white",borderBottomColor:"grey",borderLeftColor:"white",borderRightColor:"white"}]}>
      <View style={[{width:"20%",padding:5}]}>
        <View style={{width:50,height:50,borderRadius:25,overflow:"hidden"}}>
          <Image source={{uri:avatar}} resizeMode="stretch" style={{width:50,height:50}}/>
        </View>
      </View>
      <View style={[flex.Column,{width:"80%"}]}>
        <View style={[flex.Column]}>
          <Text style={[fonts.type.f4,fonts.size.small,{color:colors.principal}]}>{user}</Text>
          <Text style={[fonts.type.f3,fonts.size.small,{color:colors.second}]}>{new Date(lastMessage.create_at).toLocaleString()}</Text>
        </View>
        <View >
          <Text style={[fonts.type.f3,{textAlign:"justify"}]}>{`${lastMessage.content.slice(0,36)}...`}</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  )
}

export default Component
