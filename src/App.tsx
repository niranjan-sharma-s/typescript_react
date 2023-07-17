import Greet from './components/Greet';
import Employee from './components/Employee';
import EmployeeList from './components/EmployeeList';
import Status from './components/Status';
import Page from './components/Page';
import Button from './components/Button';
import Input from './components/Input';
import Logged from './components/states/Logged';
import User from './components/states/User';
import Counter from './components/states/Counter';
import ThemeContextProvider from './components/context/ThemeContext';
import Box from './components/context/Box';
import './App.css';

function App() {

  let name = {
    firstName: 'Jane',
    lastName: 'Goody'
  }

  let empList = [
    {
      firstName: 'John',
      lastName: 'Doe',
      designation: 'Manager'
    },
    {
      firstName: 'Mary ',
      lastName: 'Smith',
      designation: "Developer"
    },
    {
      firstName: 'Jake ',
      lastName: 'Hall',
      designation: "CEO"
    }];

  return (
    <div className="App">
      <ThemeContextProvider>
        <Box></Box>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
