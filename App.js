import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabBar from "@mindinventory/react-native-tab-bar-interaction";
export default class App extends React.Component {
  render() {
       return (
           <TabBar>
             <TabBar.Item
                 icon={require('./assets/icon.png')}
                 selectedIcon={require('./assets/icon.png')}
                 title="Tab1"
                 screenBackgroundColor={{ backgroundColor: '#FFF' }}
             >
               <View>
                   {
                     <Text>Wut Hmone Hnin Hlaing</Text>

                   }
               </View>
             </TabBar.Item>
             <TabBar.Item
                 icon={require('./assets/icon.png')}
                 selectedIcon={require('./assets/icon.png')}
                 title="Tab2"
                 screenBackgroundColor={{ backgroundColor: '#F08080' }}
             >
                 <View>
                     {/*Page Content*/}
                 </View>
             </TabBar.Item>
             <TabBar.Item
                 icon={require('./assets/icon.png')}
                 selectedIcon={require('./assets/icon.png')}
                 title="Tab3"
                 screenBackgroundColor={{ backgroundColor: '#485d72' }}
             >
               <View>
                   {/*Page Content*/}
               </View>
             </TabBar.Item>
           </TabBar>
       );
     }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
