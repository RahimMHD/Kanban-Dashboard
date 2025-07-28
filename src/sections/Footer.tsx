import { Heart } from 'lucide-react'


function Footer() {
    return (
        <footer className='w-[100%] text-md font-semibold absolute bottom-0 left-0 h-10 text-white flex justify-between items-center'>
            <div className={`flex items-center gap-1 `}>
                @ 2025 Made With  
                <Heart size={12} className='text-red-600'/> By 
                <span className='text-blue-400 cursor-pointer hover:text-blue-300'> ThemeSelection</span>
            </div>
            <ul className='flex gap-4 text-blue-400 list-none'>
                <li className='cursor-pointer hover:text-blue-300 hover:scale-[1.1] transition-all duration-200'>License</li>
                <li className='cursor-pointer hover:text-blue-300 hover:scale-[1.1] transition-all duration-200'>More Themes</li>
                <li className='cursor-pointer hover:text-blue-300 hover:scale-[1.1] transition-all duration-200'>Documentation</li>
                <li className='cursor-pointer hover:text-blue-300 hover:scale-[1.1] transition-all duration-200'>Support</li>
            </ul>
        </footer>
    )
}

export default Footer