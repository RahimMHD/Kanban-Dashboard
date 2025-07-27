

import { X, Home, Search, CornerDownLeft, ArrowUp, ArrowDown} from "lucide-react"
import { useState } from "react";


export default function SearchBar() {
    const [isSearchbarOpen, setIsSearchbarOpen] = useState<boolean>(false);

    return (

        isSearchbarOpen &&
        <div    
            className="w-[100%] h-[100%] absolute top-0 left-0 bg-blue-300/30"
            onClick={() => setIsSearchbarOpen(false)}
        >
            <div className='bg-white w-[40%] fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] px-8 py-2 rounded-md'>
                <div className='flex justify-between items-center p-1 mb-6'>
                    <div className='flex gap-3 items-center'>
                        <Search size={16} />
                        <input 
                            type='search' 
                            placeholder='Search' 
                            className='bg-white focus:outline-none' 
                        />
                    </div>
                    <div className='flex gap-2 items-center'>
                        <p className="text-gray-400">{`[esc]`}</p>
                        <X size={16} />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-8">
                    <div className=''>
                        <h4 className="mb-4 text-gray-400 font-bold">PUPULAR SEARCHES</h4>
                        <ul className='list-none text-sm text-gray-500'>
                            <li className="flex gap-2 font-medium items-center mb-4 cursor-pointer scale-100 transition-all duration-200 hover:scale-[1.1] hover:text-blue-400"><Home size={16} /> <span>Analytics</span></li>
                            <li className="flex gap-2 font-medium items-center mb-4 cursor-pointer scale-100 transition-all duration-200 hover:scale-[1.1] hover:text-blue-400"><Home size={16} /> <span>CRM</span></li>
                            <li className="flex gap-2 font-medium items-center mb-4 cursor-pointer scale-100 transition-all duration-200 hover:scale-[1.1] hover:text-blue-400"><Home size={16} /> <span>ECommerce</span></li>
                            <li className="flex gap-2 font-medium items-center mb-4 cursor-pointer scale-100 transition-all duration-200 hover:scale-[1.1] hover:text-blue-400"><Home size={16} /> <span>UserList</span></li>
                        </ul>
                    </div>

                    <div className=''>
                        <h4 className="mb-4 text-gray-400 font-bold">APPS</h4>
                        <ul className='list-none text-sm text-gray-500'>
                            <li className="flex gap-2 font-medium items-center mb-4 cursor-pointer scale-100 transition-all duration-200 hover:scale-[1.1] hover:text-blue-400"><Home size={16} /> <span>Calendar</span></li>
                            <li className="flex gap-2 font-medium items-center mb-4 cursor-pointer scale-100 transition-all duration-200 hover:scale-[1.1] hover:text-blue-400"><Home size={16} /> <span>Invoice List</span></li>
                            <li className="flex gap-2 font-medium items-center mb-4 cursor-pointer scale-100 transition-all duration-200 hover:scale-[1.1] hover:text-blue-400"><Home size={16} /> <span>User List</span></li>
                            <li className="flex gap-2 font-medium items-center mb-4 cursor-pointer scale-100 transition-all duration-200 hover:scale-[1.1] hover:text-blue-400"><Home size={16} /> <span>Roles & Permissions</span></li>
                        </ul>
                    </div>

                    <div className=''>
                        <h4 className="mb-4 text-gray-400 font-bold">PAGES</h4>
                        <ul className='list-none text-sm text-gray-500'>
                            <li className="flex gap-2 font-medium items-center mb-4 cursor-pointer scale-100 transition-all duration-200 hover:scale-[1.1] hover:text-blue-400"><Home size={16} /> <span>User Profile</span></li>
                            <li className="flex gap-2 font-medium items-center mb-4 cursor-pointer scale-100 transition-all duration-200 hover:scale-[1.1] hover:text-blue-400"><Home size={16} /> <span>Account Settings</span></li>
                            <li className="flex gap-2 font-medium items-center mb-4 cursor-pointer scale-100 transition-all duration-200 hover:scale-[1.1] hover:text-blue-400"><Home size={16} /> <span>Pricing</span></li>
                            <li className="flex gap-2 font-medium items-center mb-4 cursor-pointer scale-100 transition-all duration-200 hover:scale-[1.1] hover:text-blue-400"><Home size={16} /> <span>FAQ</span></li>
                        </ul>
                    </div>

                    <div className=''>
                        <h4 className="mb-4 text-gray-400 font-bold">FORMS & CHARTS</h4>
                        <ul className='list-none text-sm text-gray-500'>
                            <li className="flex gap-2 font-medium items-center mb-4 cursor-pointer scale-100 transition-all duration-200 hover:scale-[1.1] hover:text-blue-400"><Home size={16} /> <span>Form Layouts</span></li>
                            <li className="flex gap-2 font-medium items-center mb-4 cursor-pointer scale-100 transition-all duration-200 hover:scale-[1.1] hover:text-blue-400"><Home size={16} /> <span>Form Validation</span></li>
                            <li className="flex gap-2 font-medium items-center mb-4 cursor-pointer scale-100 transition-all duration-200 hover:scale-[1.1] hover:text-blue-400"><Home size={16} /> <span>Form Wizard</span></li>
                            <li className="flex gap-2 font-medium items-center mb-4 cursor-pointer scale-100 transition-all duration-200 hover:scale-[1.1] hover:text-blue-400"><Home size={16} /> <span>Apex Charts</span></li>
                        </ul>
                    </div>
                </div>

                <div className='flex gap-4 items-center text-sm text-gray-600'>
                    <div className='flex gap-2 items-center'>
                        <ArrowDown size={13} className='text-gray-700 bg-gray-200'/>
                        <ArrowUp size={13} className='text-gray-700 bg-gray-200'/>
                        <p>to navigate</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <CornerDownLeft size={14} className='text-gray-700 bg-gray-200' />
                        <p>to open</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <p className='text-sm px-[4px] py-[1px] bg-gray-300'>esc</p>
                        <p>to close</p>
                    </div>
                </div>
            </div>
        </div>
    )
}