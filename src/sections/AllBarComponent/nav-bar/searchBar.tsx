
import { div } from "framer-motion/m"
import {ArrowBigDown, ArrowBigUp, X, Home, Search} from "lucide-react"


export default function SearchBar() {
    return (
        <div className="w-[100%] h-[100%] absolute top-0 left-0 bg-blue-300/30">
            <div className='bg-white w-[40%] fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] px-8 py-2'>
                <div className='flex justify-between items-center p-4 mb-6'>
                    <div className='flex gap-3'>
                        <Search size={16} />
                        <input type='search' placeholder='Search' className='' />
                    </div>
                    <div className='flex gap-4'>
                        <p>{`[esc]`}</p>
                        <X size={16} />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-8">
                    <div className=''>
                        <h4>PUPULAR SEARCHES</h4>
                        <ul className='list-none text-sm align-start text-gray-800'>
                            <li><Home size={16} /> <span>Analytics</span></li>
                            <li><Home size={16} /> <span>CRM</span></li>
                            <li><Home size={16} /> <span>ECommerce</span></li>
                            <li><Home size={16} /> <span>UserList</span></li>
                        </ul>
                    </div>

                    <div className=''>
                        <h4>APPS</h4>
                        <ul className='list-none text-sm align-start text-gray-800'>
                            <li><Home size={16} /> <span>Calendar</span></li>
                            <li><Home size={16} /> <span>Invoice List</span></li>
                            <li><Home size={16} /> <span>User List</span></li>
                            <li><Home size={16} /> <span>Roles & Permissions</span></li>
                        </ul>
                    </div>

                    <div className=''>
                        <h4>PAGES</h4>
                        <ul className='list-none text-sm align-start text-gray-800'>
                            <li><Home size={16} /> <span>User Profile</span></li>
                            <li><Home size={16} /> <span>Account Settings</span></li>
                            <li><Home size={16} /> <span>Pricing</span></li>
                            <li><Home size={16} /> <span>FAQ</span></li>
                        </ul>
                    </div>

                    <div className=''>
                        <h4>FORMS & CHARTS</h4>
                        <ul className='list-none text-sm align-start text-gray-800'>
                            <li><Home size={16} /> <span>Form Layouts</span></li>
                            <li><Home size={16} /> <span>Form Validation</span></li>
                            <li><Home size={16} /> <span>Form Wizard</span></li>
                            <li><Home size={16} /> <span>Apex Charts</span></li>
                        </ul>
                    </div>
                </div>

                <div className='flex gap-4 items-center'>
                    <div className='flex gap-2 items-center'>
                        <ArrowBigDown size={16} className='p-x-4 p-y-2 bg-gray-200'/>
                        <ArrowBigUp size={16} className='p-x-4 p-y-2 bg-gray-200'/>
                        <p>to navigate</p>
                    </div>
                    <div>
                        <ArrowBigDown size={16} className='p-x-4 p-y-2 bg-gray-200' />
                        <p>to open</p>
                    </div>
                    <div>
                        <p className='p-x-4 p-y-2 bg-gray-300'>esc</p>
                        <p>to close</p>
                    </div>
                </div>
            </div>
        </div>
    )
}