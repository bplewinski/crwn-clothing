import { Routes, Route } from 'react-router-dom';

import Home from './components/routes/home/home.component'
import Navigation from './components/routes/navigation/navigation.component'
import SignIn from './components/routes/sign-in/sign-in.component';

const Shop = () => {
  return <h1>I am the shope page</h1>
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
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  )
};

export default App;
