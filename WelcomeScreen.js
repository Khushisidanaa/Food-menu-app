import { Image, StyleSheet, Text, TextInput, View, Pressable } from 'react-native'
import React from 'react'

const WelcomeScreen = () => {
  return (
    <View style={styles.main}>
      
      {/* image */}
        <Image
        style={styles.image}
        source={require("../../assets/images/welcome.png")}
        />

      {/* welcoem text */}
      <View>
        <Text style={styles.text}>
          Welcome to m-Track !!
        </Text>
      </View>

      {/* add your business text */}
      <View style={{marginTop:47}}>
        <Text style={styles.text2}>
          {`Add your business and lets get 
                        started`}
        </Text>
      </View>

      {/*add your business 1.input, 2.button, 3.text*/}
      <View style={{marginTop:35}}>
        <View>
          <TextInput
          style={styles.input}
          placeholder='Enter the name of your business'
          placeholderTextColor='grey'
          />
        </View>
        <View style={{marginTop:15}}>
            <Pressable style={styles.button}>
                <Text style={styles.btntxt}>
                    Add the business
                </Text>
            </Pressable>
        </View>
        <View style={{flexDirection:'row',marginTop:15}}>
          <Text>Already an employee of a business?</Text>
          <Text>Login</Text>
        </View>
      </View>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    main:{
      paddingTop:50,
      paddingLeft:30,
      paddingRight:15,
      alignItems:'center'
    },
    image:{
        height:298,
        width:298,        
    },
    text:{
      color:'#0265FC',
      fontSize:32,
      fontWeight:'bold'
    },
    text2:{
      fontSize:19,
      fontWeight:'bold'
    },
    input:{
      width:333,
      height:50,
      borderRadius:30,
      backgroundColor:'#D9D9D9',
      padding:10
    },
    button:{
      width:333,
      height:45,
      borderRadius:30,
      backgroundColor:'#0265FC',
      alignItems:'center',
      justifyContent:'center'
  },
  btntxt:{
      color:'white',
      fontSize:18,
      fontWeight:'bold'
  }
})