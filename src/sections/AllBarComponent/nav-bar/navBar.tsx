
import { AnimatePresence, motion } from 'framer-motion';
import { AlignJustify, Bell, Languages, LaptopMinimal, Search, StarsIcon } from 'lucide-react'
import { useState } from 'react';
import SystemDarkMode from './systemDarkMode';

interface ChildComponentProps {
    isExpand: boolean; // Define the type of the callback prop
    isResize: boolean; // Define the type of the callback prop
}

const NavBar: React.FC<ChildComponentProps> = ({isExpand, isResize}) => {
    const [isDarkActive, setIsDarkActive] = useState<any>(localStorage.getItem('theme') === 'dark' ? true : false);
    const [isSystemDarkActive, setIsSystemDarkActive] = useState<boolean>(false)
    const [isScrolling, setIsScrolling] = useState<boolean>(false)
    const [isShowHide, setIsShowHide] = useState<boolean>(isResize)
    
    window.addEventListener("scroll", () => {
        // console.log(window.scrollY);
        if (window.scrollY >= 1) {
            setIsScrolling(true)
        } else {
            setIsScrolling(false);
        }
    })

    return (
        <AnimatePresence>
            <motion.header    
                transition={{duration: 0.2, ease: "easeInOut"}}
                className={`navbar ${isScrolling ? 'sticky bg-white dark:bg-gray-800 top-0 right-0 px-8 z-20' : ""}
                    mb-4 dark:bg-gray-800 h-12 p-4 flex justify-between items-center transition-all duration-200
                `}
            >
                <div className='flex gap-4 items-center'>
                    {isResize 
                        && <AlignJustify 
                            size={22} 
                            onClick={() => setIsShowHide(true)}
                            className='hover:text-blue-500 cursor-pointer'
                        />}
                    <Search size={22} className='dark:text-white'/>
                    <input 
                        className='dark:text-gray-200 bg-transparent cursor-pointer focus:outline-0' 
                        type="button" 
                        name='Search'
                        value="search"
                        placeholder={`Search`} id="" 
                        // onClick={() => setIsSearchbarOpen(true)}
                    />
                </div>
                <div className='flex items-center gap-6'>
                    <Languages size={22}  className='dark:text-white cursor-pointer transition-all duration-200 scale-100 hover:scale-150 hover:text-blue-400'/>
                    <div className='relative transition-all duration-200'>
                        <LaptopMinimal size={22}  
                            onClick={ () => setIsSystemDarkActive(!isSystemDarkActive)}
                            className='dark:text-white relative cursor-pointer transition-all duration-200 scale-100 hover:scale-150 hover:text-blue-400'
                        >
                        </LaptopMinimal>
                        {isSystemDarkActive && <SystemDarkMode />}
                    </div>
                    <StarsIcon
                        size={22} 
                        className='cursor-pointer dark:text-white transition-all duration-200 scale-100 hover:scale-150 hover:text-blue-400'
                    />
                    <div className='relative cursor-pointer transition-all duration-200 scale-100 hover:scale-150 hover:text-blue-400' >
                        <Bell size={22} className='dark:text-white'/>
                        <span className='w-2 h-2 bg-red-700 absolute top-0 right-0' />
                    </div>
                    <div className='w-9 h-9 relative cursor-pointer transition-all duration-200 scale-100 hover:scale-125'>
                        <img src="../../../../public/images/avatars/4.png" className='rounded-full' alt="profile picture icon" />
                        <span className='w-2 h-2 rounded-full bg-green-600 absolute bottom-0 right-0'></span>
                    </div>
                </div>
            </motion.header>
        </AnimatePresence>
    )
}


export default NavBar