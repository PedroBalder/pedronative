import * as React from 'react';
import { Pressable, View, Text, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* Displaying an image */}
      <Image
        source={require('./assets/Pedro.png')} // Specify the path to your image
        style={{ width: 200, height: 200, marginBottom: 20 }}
      />
    
      <Text>Pedro Balder</Text>
      <Pressable
        onPress={() => navigation.navigate('Sobre')}
        style={{
          backgroundColor: 'blue',
          padding: 8,
          marginBottom: 15,
          marginTop: 100,
          width:300,
          alignItems:'center'


        }}>
        <Text>Sobre</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Graduacao')}
        style={{ backgroundColor: 'blue', padding: 10, width:300,alignItems:'center' }}>
        <Text>Graduação</Text>
      </Pressable>
    </View>
  );
}

function Sobre() {
  return (
    <View style={{ flex:'1', alignItems: 'center', justifyContent: 'center' }}>
      
      <Text style={{ alignItems: 'center',}}>Atualmente, No curso de Análise e Desenvolvimento de Sistemas no Senac. Desde que ingressei nessa jornada, tenho sido cativado pela arte de criar soluções tecnológicas inovadoras. Meu objetivo é dominar tanto o desenvolvimento de aplicações web - incluindo tanto o Back-end quanto o Front-end e a gestão eficaz de bancos de dados.</Text>
    </View>
  );
}

function Graduacao() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Em 2014, obtive minha graduação em Engenharia de Produção pela Universidade FBV Devry. Embora tenha adquirido valiosas habilidades nesse campo, minha paixão por tecnologia e programação tomou a dianteira. Decidi embarcar em uma transição de carreira para seguir minha verdadeira paixão: a área tecnológica. Esta mudança foi motivada por meu desejo intrínseco de explorar novos desafios e contribuir de maneira mais impactante em um ambiente em constante evolução.</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation, route }) => ({
          headerLeft: (props) => {
            return (
              <>
                <Text>Menu</Text>
                {props.canGoBack && <HeaderBackButton {...props} />}
              </>
            );
          },
        })}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Graduacao" component={Graduacao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
