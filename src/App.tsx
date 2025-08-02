
import './App.css'
import { useEffect, useState } from 'react';
import SideBar from './sections/AllBarComponent/sidebaFile/sidebar'
import NavBar from './sections/AllBarComponent/nav-bar/navBar';
import SearchBar from './sections/AllBarComponent/nav-bar/searchBar';
import { motion } from 'framer-motion';
import Footer from './sections/Footer';
import Crm from './sections/AllBarComponent/dashboard/crm';


const App: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [isResizing, setIsResizing] = useState<boolean>(false);

  useEffect(() => {
    window.innerWidth >= 1212 ? setIsResizing(false) : setIsResizing(true); 
  }, [])

  const handleExpandedFromChild = (data: boolean) => setIsExpanded(data)

  // Check if she is resizing to change sidebar position
    window.addEventListener("resize", () => {
        // console.log(window.innerWidth)
        window.innerWidth >= 1212 
          ? setIsResizing(false)
          : setIsResizing(true);
    })


  return (
    <div className={`app w-[100%] ${isResizing ? "px-4" : "flex gap-5"} `}>
      <SideBar 
        isExpand={handleExpandedFromChild}
        isResize={isResizing}
      />

      <motion.div
                animate={{
                  width: isResizing ? "100%" : isExpanded ? "79.6%" : "92%", 
                  justifyContent: isResizing ? "center" : ""
                }}
                transition={{duration: 0.2, ease: "easeInOut"}}
                className={`flex flex-col relative`}
      >
        <NavBar isExpand={isExpanded} isResize={isResizing} />
        <SearchBar />
        <Crm />
      
        <Footer />
      </motion.div>
    
    </div>
  )
}

export default App
