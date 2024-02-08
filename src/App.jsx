
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { MyProvider } from './utils/contextProvider';
import { ErrorPage } from './pages/Error/error';
import { GroupesPage } from './pages/Groupes/groupes';
import { Login } from './pages/Login/login';
import { MarketPage } from './pages/Market/market';
import { ProfilePage } from './pages/Profile/profile';
import { Settings } from './pages/Settings/settings';
import { Signup } from './pages/Signup/signup';
import { Suggestion } from './pages/Suggestions/suggestion';
import { Header } from './layouts/header';
import { ProductPage } from './pages/Market_Product/Products';
function App() {
  return (
    <MyProvider>
      
      <Routes >
        <Route path='/home' element={<HomePage />} />
        <Route path='/error' element={<ErrorPage />} />
        <Route path='/groupes' element={<GroupesPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/market' element={<MarketPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/' element={<Signup />} />
        <Route path='/suggestions' element={<Suggestion />} />
        <Route path='/products/:id' element={<ProductPage/>} />
      </Routes >
    </MyProvider>

  );
}
export default App;
