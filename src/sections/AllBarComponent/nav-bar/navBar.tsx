
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowBigDown, ArrowBigUp, Bell, Languages, LaptopMinimal, Search, StarsIcon } from 'lucide-react'
import { useEffect, useState } from 'react';

interface ChildComponentProps {
    isExpand: boolean; // Define the type of the callback prop
}

const NavBar: React.FC<ChildComponentProps> = ({isExpand}) => {
    
    
    useEffect(() => {
        console.log(isExpand)
    }, [isExpand])

    return (
        <AnimatePresence>
            <motion.div
                animate={{width: isExpand ? "76%" : "92%"}}
                transition={{duration: 0.2, ease: "easeInOut"}}
                className={`navbar h-12 bg-white p-4 rounded-b-xl flex justify-between items-center`}
                >
                <div className='flex gap-4 items-center'>
                    <Search size={22}/>
                    <input 
                        className='bg-white cursor-pointer focus:outline-0' 
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
            </motion.div>
        </AnimatePresence>
    )
}


export default NavBar