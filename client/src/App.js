import React from 'react';
import {
    ChakraProvider,
} from '@chakra-ui/react';
import {
    Route,
    BrowserRouter as Router,
    Routes,
    Navigate
} from 'react-router-dom';
import Login from './pages/Login';
import Receipt from './pages/Receipt';
import Dashbord from './pages/Dashboard';
import theme from './theme';
import Header from './components/Header';

const PrivateRoute = ({ component, redirectTo }) => {
    const isAuthenticated = JSON.parse(localStorage.getItem('user'))?.email;
    return isAuthenticated ? React.createElement(component) : <Navigate to={redirectTo} />;
};


function App() {
    return (
        <ChakraProvider theme={theme}>

            <Router>
                <Header />
                <Routes>
                    <Route exact path='/' element={<Login />} />
                    <Route exact path='/dash' element={<PrivateRoute redirectTo="/" component={Dashbord} />} />
                    <Route exact path='/receipt/create' element={<Receipt />} />
                    <Route exact path='/receipt/:id' element={<Receipt />} />
                </Routes>
            </Router>
        </ChakraProvider>
    );
}

export default App;
