import { AnimatePresence, motion } from 'framer-motion';
import { AlignJustify, Bell, Languages, Search, StarsIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────
type Theme = "light" | "dark";

interface ChildComponentProps {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
    isExpand: boolean; 
    isResize: boolean; 
}

const NavBar: React.FC<ChildComponentProps> = ({ theme, setTheme, isExpand, isResize }) => {
    const [isScrolling, setIsScrolling] = useState<boolean>(false);
    const [isShowHide, setIsShowHide] = useState<boolean>(isResize);
    
    // 1. Safely handle window scroll listener with proper cleanup
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 1) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 2. Sync Tailwind HTML classes whenever the parent theme changes
    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove("dark");
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    return (
        <AnimatePresence>
            <motion.header    
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className={`navbar ${isScrolling ? 'sticky bg-white dark:bg-gray-300 top-0 right-0 px-8 z-20' : ""}
                    mb-4 dark:bg-gray-800 h-12 p-4 flex justify-between items-center transition-all duration-200
                `}
            >
                <div className='flex gap-4 items-center'>
                    {isResize && (
                        <AlignJustify 
                            size={22} 
                            onClick={() => setIsShowHide(true)}
                            className='hover:text-blue-500 cursor-pointer'
                        />
                    )}
                    <Search size={22} className='dark:text-white'/>
                    <input 
                        className='dark:text-gray-200 bg-transparent cursor-pointer focus:outline-0' 
                        type="button" 
                        name='Search'
                        value="search"
                        placeholder="Search" 
                    />
                </div>
                <div className='flex items-center gap-6'>
                    <Languages size={22} className='dark:text-white cursor-pointer transition-all duration-200 scale-100 hover:scale-150 hover:text-blue-400'/>
                    <div className='relative transition-all duration-200'>
                        {/* 3. Uses parent theme state and updater function directly */}
                        <button
                            onClick={() => setTheme((t) => t === "light" ? "dark" : "light")}
                            title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
                            className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-600 flex items-center justify-center text-base hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                        >
                            {theme === "light" ? "🌙" : "☀️"}
                        </button>
                    </div>
                    <StarsIcon
                        size={22} 
                        className='cursor-pointer dark:text-white transition-all duration-200 scale-100 hover:scale-150 hover:text-blue-400'
                    />
                    <div className='relative cursor-pointer transition-all duration-200 scale-100 hover:scale-150 hover:text-blue-400'>
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
    );
};

export default NavBar;
