import { Heart } from 'lucide-react'


function Footer() {
    return (
        <footer className='w-[100%] mt-4 text-md font-normal h-10 text-black flex justify-between items-center'>
            <div className={`flex items-center gap-1 `}>
                @ 2025 Made With  ❤️ By 
                <span className='text-blue-400 cursor-pointer hover:text-blue-300'> ThemeSelection</span>
            </div>
            <ul className='flex gap-4 text-[#42b1fb] list-none'>
                <li className='cursor-pointer hover:text-[#0A6CD5] hover:scale-[1.1] transition-all duration-200'>License</li>
                <li className='cursor-pointer hover:text-[#0A6CD5] hover:scale-[1.1] transition-all duration-200'>More Themes</li>
                <li className='cursor-pointer hover:text-[#0A6CD5] hover:scale-[1.1] transition-all duration-200'>Documentation</li>
                <li className='cursor-pointer hover:text-[#0A6CD5] hover:scale-[1.1] transition-all duration-200'>Support</li>
            </ul>
        </footer>
    )
}

export default Footer
