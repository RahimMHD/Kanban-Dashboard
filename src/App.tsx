
import './App.css'
import { useState } from 'react';
import SideBar from './sections/AllBarComponent/sidebaFile/sidebar'
import NavBar from './sections/AllBarComponent/nav-bar/navBar';
import SearchBar from './sections/AllBarComponent/nav-bar/searchBar';


const App: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const handleDataFromChild = (data: boolean) => {
    setIsExpanded(data)
  }

  return (
    <div className='app flex w-[100%] gap-8 overflow-y-auto'>
      <SideBar isExpand={handleDataFromChild} />
      <NavBar isExpand={isExpanded} />
      <SearchBar />
    </div>
  )
}

export default App
