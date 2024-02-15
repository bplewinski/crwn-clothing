import { Routes, Route } from 'react-router-dom';

import Home from './components/routes/home/home.component'
import Navigation from './components/routes/navigation/navigation.component'
import Authentication from './components/routes/authentication/authentication.component';

const Shop = () => {
  return <h1>I am the shop page</h1>
}

const App = () => {
  return (
    // using 'Routes' means I expect routes inside
    // the moment you match a route where path '/' value matches string
    // then render this element =''  
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  )
};

export default App;
