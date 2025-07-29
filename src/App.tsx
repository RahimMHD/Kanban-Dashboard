
import './App.css'
import { useState } from 'react';
import SideBar from './sections/AllBarComponent/sidebaFile/sidebar'
import NavBar from './sections/AllBarComponent/nav-bar/navBar';
import SearchBar from './sections/AllBarComponent/nav-bar/searchBar';
import { motion } from 'framer-motion';
import Footer from './sections/Footer';
import Crm from './sections/AllBarComponent/dashboard/crm';


const App: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const handleDataFromChild = (data: boolean) => {
    setIsExpanded(data)
  }

  return (
    <div className='app flex w-[100%] gap-8 overflow-y-auto'>
      <SideBar isExpand={handleDataFromChild} />

      <motion.div
                animate={{width: isExpanded ? "76%" : "92%"}}
                transition={{duration: 0.2, ease: "easeInOut"}}
                className={`flex flex-col relative`}
      >
        <NavBar isExpand={isExpanded} />
        <SearchBar />
        <Crm />
      
        <Footer />
      </motion.div>
    
    </div>
  )
}

export default App
