
import { AnimatePresence, motion } from 'framer-motion';
import { AlignJustify, AlignLeft, ArrowBigDown, ArrowBigUp, Bell, Languages, LaptopMinimal, Search, StarsIcon } from 'lucide-react'
import { useEffect, useState } from 'react';

interface ChildComponentProps {
    isExpand: boolean; // Define the type of the callback prop
    isResize: boolean; // Define the type of the callback prop
}

const NavBar: React.FC<ChildComponentProps> = ({isExpand, isResize}) => {
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
                className={`navbar ${isScrolling ? 'sticky bg-white top-0 right-0 px-8 z-20' : ""}
                    mb-10  h-12 p-4 flex justify-between items-center transition-all duration-300
                `}
            >

                <div className='flex gap-4 items-center'>
                    {isResize 
                        && <AlignJustify 
                            size={22} 
                            onClick={() => setIsShowHide(true)}
                            className='hover:text-blue-500 cursor-pointer'
                        />}
                    <Search size={22}/>
                    <input 
                        className='bg-transparent cursor-pointer focus:outline-0' 
                        type="button" 
                        name='Search'
                        value="search"
                        placeholder={`Search`} id="" 
                        // onClick={() => setIsSearchbarOpen(true)}
                    />
                </div>
                <div className='flex items-center gap-6'>
                    <Languages size={22}  className='cursor-pointer transition-all duration-200 scale-100 hover:scale-150 hover:text-blue-400'/>
                    <LaptopMinimal size={22}  className='cursor-pointer transition-all duration-200 scale-100 hover:scale-150 hover:text-blue-400'/>
                    <StarsIcon size={22} className='cursor-pointer transition-all duration-200 scale-100 hover:scale-150 hover:text-blue-400'/>
                    <div className='relative cursor-pointer transition-all duration-200 scale-100 hover:scale-150 hover:text-blue-400' >
                        <Bell size={22}/>
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