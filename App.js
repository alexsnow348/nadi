import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabBar from "@mindinventory/react-native-tab-bar-interaction";
export default class App extends React.Component {
  render() {
       return (
           <TabBar>
             <TabBar.Item
                 icon={require('./assets/contrast.png')}
                 selectedIcon={require('./assets/contrast.png')}
                 title="Tab1"
                 screenBackgroundColor={{ backgroundColor: '#e9e3e3' }}
             >
               <View>
                   {/*Page Content*/}
               </View>
             </TabBar.Item>
             <TabBar.Item
                 icon={require('./assets/sliders.png')}
                 selectedIcon={require('./assets/sliders.png')}
                 title="Tab2"
                 screenBackgroundColor={{ backgroundColor: '#e9e3e3' }}
             >
                 <View>
                     {/*Page Content*/}
                 </View>
             </TabBar.Item>
             <TabBar.Item
                 icon={require('./assets/brightness.png')}
                 selectedIcon={require('./assets/brightness.png')}
                 title="Tab3"
                 screenBackgroundColor={{ backgroundColor: '#e9e3e3' }}
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
