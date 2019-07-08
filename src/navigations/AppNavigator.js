import Home from '../screens/Home';
import Chatting from '../screens/Chatting';
import Single from '../screens/Single';
import Report from '../screens/Report';
import Therapy from '../screens/Therapy';
import Explore from '../screens/Explore';

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
        },
        ReportScreen: {
            screen: Report,
            navigationOptions: {
                title: 'Laporan'
            }
        },
        ExploreScreen: {
            screen: Explore,
            navigationOptions: {
                title: 'Jelajah'
            }
        },
        TherapyScreen: {
            screen: Therapy,
            navigationOptions: {
                title: 'Terapi'
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