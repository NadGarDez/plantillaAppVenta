/*
  Escrito por Iranad Garcia
  correos: iranad@hotmail.com , pirastri@gmail.com
  linkein: NadGarDez

*/
import 'react-native-gesture-handler';
import React,{Component} from "react"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./home.js"
import Login from "./logIn.js"
import SignIn from "./signIn.js"
import store from "../reduxFiles/store.js"
import {Provider} from "react-redux"
import { /* setToken,unsetTokenm,*/selectToken,} from "../reduxFiles/sessionSlice.js"
import WebSocketProvider, { WebSocketContext } from '../components/WebSocketPovider.js';

const Stack = createStackNavigator();

export default class App extends Component {

  constructor(props){
    super(props)
    this.state={
      loged:true
    }
  }
  render(){

  //  console.log("estado",selectToken(store.getState()))

    return(

          <Provider store={store}>
            <WebSocketProvider>
              <SafeAreaProvider>
                <NavigationContainer>
                  <Stack.Navigator
                    screenOptions={
                                {
                        headerShown: false
                      }
                    }
                  >
                    {

                        selectToken(store.getState())==null?
                        <>

                          <Stack.Screen name="Login" component={Login}
                            initialParams={
                              {
                                refresh:()=>this.forceUpdate()
                              }
                            }

                          />
                          <Stack.Screen name="SignIn" component={SignIn}

                          />
                        </>
                        :
                        <>
                          <Stack.Screen component={Home} name="Home"
                            initialParams={
                              {
                                refresh:()=>this.forceUpdate()
                              }
                            }
                            options={{
                              headerStyle: [{
                                backgroundColor: "#c5bef4",
                                shadowColor: "#000",
                                shadowOffset: {
                                  width: 0,
                                  height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,

                                elevation: 5,

                              }],
                              headerTintColor: 'white'
                            }}
                          />
                        </>
                    }

                  </Stack.Navigator>
                </NavigationContainer>
              </SafeAreaProvider>
            </WebSocketProvider>
            
          </Provider>

    )
  }


}
/*<Stack.Screen name="movil" component={Animation} />*/
