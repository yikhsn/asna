import Home from '../screens/Home';
import Chatting from '../screens/Chatting';
import Single from '../screens/Single';

import { 
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

const ReadNavigator = createStackNavigator(
    {
        HomeScreen: {
            screen: Home,
            navigationOptions: {
                title: 'Beranda'
            }
        },
        ChattingScreen: {
            screen: Chatting,
            navigationOptions: {
                title: 'Chatting'
            }
        },
        SingleScreen: {
            screen: Single,
            navigationOptions: {
                title: 'Single'
            }
        }
    },
    {
        initialRouteName: 'HomeScreen',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#6072FA',
                height: 57
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
                color: '#ffffff',
                fontSize: 20,
                fontFamily: 'Roboto-Regular',
            },
        }
    }
)

const AppContainer = createAppContainer(ReadNavigator);

export default AppContainer;