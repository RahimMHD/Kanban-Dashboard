
import { Laptop, Moon, Sun } from 'lucide-react'
import { useDarkMode } from '../../../separeteComponent/darkmode';
import { useState } from 'react';


export default function SystemDarkMode() {
    const [isDark, toggleDarkMode] = useDarkMode();
    
    // const changeMode = (element) => {
    //     element.add
    //     toggleDarkMode();
    // }
    console.log(isDark);
    return (
        <div className='transition-all duration-200 w-[160px] p-2 z-50 absolute border-[1px] top-10 left-[0px] bg-white dark:bg-gray-800 shadow-lg rounded-md'>
            <ul className='flex flex-col gap-2 text-black dark:text-white'>
                <li
                    className='flex gap-4 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer' 
                    onClick={toggleDarkMode}><Moon />
                    <p>Dark</p>
                </li>
                <li
                    className='flex gap-4 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer' 
                    onClick={toggleDarkMode}><Sun />
                    <p>Light</p>
                </li>
                <li
                    className='flex gap-4 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer' 
                    onClick={toggleDarkMode}><Laptop />
                    <p>System</p>
                </li>
            </ul>
        </div>
    )
}
