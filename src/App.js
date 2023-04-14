import Header from './Header';
import Main from './Main';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [menuStatus, modifyMenuStatus] = useState("inactive-header")
  
  useEffect(() => {
    const handleScroll = event => {
      window.scrollY < 30 ? modifyMenuStatus("inactive-header") : modifyMenuStatus("scroll-active-header")
    }
    window.addEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="App">
      <Header props={menuStatus}/>
      <Main></Main>
    </div>
  );
}

export default App;
