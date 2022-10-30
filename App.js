import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GlobalColors } from './constants/styles';
import { Ionicons } from '@expo/vector-icons';
import IconButton from './components/IconButton';
import AllExpenses from './screens/AllExpenses';
import EditExpense from './screens/EditExpense';
import ImportantExpenses from './screens/ImportantExpenses';
import AddExpense from './screens/AddExpense';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalColors.colors.slateblue },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalColors.colors.slateblue },
        tabBarActiveTintColor: GlobalColors.colors.gold,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate('AddExpense');
            }}
          />
        )
      })}
    >
      <BottomTabs.Screen 
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="logo-usd" size={size} color={color} />
          )
        }}
      />

      <BottomTabs.Screen
        name="ImportantExpenses"
        component={ImportantExpenses}
        options={{
          title: 'Important Expenses',
          tabBarLabel: 'Important Expenses',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="alert-outline" size={size} color={color} />
          )
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalColors.colors.slateblue },
              headerTintColor: 'white'
            }}
          >
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="EditExpense"
              component={EditExpense}
              options={{ title: 'Edit Expense' }}
            />
            <Stack.Screen 
              name="AddExpense"
              component={AddExpense}
              options={{ title: 'Add Expense' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
    </>
  );
}
