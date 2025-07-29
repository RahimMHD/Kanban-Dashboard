
import { BrickWallFireIcon, BriefcaseBusiness, Calendar, ChartPie, CheckCheck, Clock, DollarSign, Ellipsis, EllipsisVertical, File, FileBarChart, Map, Star, Users } from "lucide-react";


export default function Crm() {
    return (
        <div className="grid grid-cols-12 gap-6">
            {/* <div className=""> */}
                <div className="col-span-3 flex justify-between items-center gap-3 overflow-hidden overflow-t-visible bg-black text-white p-3 relative">
                    <div className="">
                        <img 
                            src="../../../../public/images/illustrations/characters/vecteezy_3d-male-character-thinking-and-working-on-a-laptop_24785804.png" 
                            className="absolute w-[200px] top-4 right-28" 
                            alt="" 
                        />
                    </div>
                    <div className="">
                        <h3>Ratings</h3>
                        <div className="flex gap-3 my-4 items-baseline">
                            <h3 className="text-xl font-bold">13K</h3>
                            <p className="text-green-500 font-semibold">+15.6%</p>
                        </div>
                        <p className="text-blue-600 bg-blue-400 p-2 rounded-lg">Year of 2025</p>
                    </div>
                </div>

                <div className="col-span-3 bg-white flex justify-between items-center gap-3 overflow-hidden overflow-t-visible bg-black text-white p-3 relative">
                    <div>
                        <h3>Sessions</h3>
                        <div className="flex gap-3 my-4 items-baseline">
                            <h3 className="text-xl font-bold">24.5K</h3>
                            <p className="text-red-500 font-semibold">-20%</p>
                        </div>
                        <p className="text-white bg-gray-400/50 p-2 rounded-lg">Year of 2025</p>
                    </div>
                    <div>
                        <img 
                            src="../../../../public/images/illustrations/characters/vecteezy_stunning-artistic-businesswoman-silhouette-with-tablet-genuine_57897171.png" 
                            className="absolute w-[200px] top-4 left-28" 
                            alt="" 
                        />
                    </div>
                </div>

                <div className="col-span-6 bg-white p-4">
                    <EllipsisVertical size={16} className="absolute top-0 right-6"/>
                    <h3 className="font-semibold text-xl">Transactions</h3>
                    <p className="font-semibold">Total 48.5% Growth  this month</p>
                    <div className="flex justify-between gap-6">
                        <div className="flex gap-4 items-center">
                            <ChartPie size={16} className="bg-blue-500 p-2" />
                            <div>
                                <p className="font-semibold">Sales</p>
                                <p className="font-semibold text-xl">245K</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <ChartPie size={16} className="bg-green-500 p-2"/>
                            <div className="">
                                <p className="font-semibold">Sales</p>
                                <p className="text-xl font-semibold">245K</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <ChartPie size={16} className="bg-yellow-500 w-"/>
                            <div className="">
                                <p className="font-semibold">Sales</p>
                                <p className="text-xl font-semibold">245K</p>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}

            {/* <div> */}
                <div className="col-span-3 bg-white">
                    <EllipsisVertical size={16} />
                    <h3>Total Sales</h3>
                    <p>$21.845</p>
                </div>

                <div className="col-span-3 bg-white">
                    <EllipsisVertical size={16} />
                    <h3>Revenue Report</h3>
                </div>

                <div className="col-span-6 bg-white">
                    <EllipsisVertical size={16} />
                    <h3>Sales Overview</h3>
                    <div>

                        <div>
                            <div>
                                <BrickWallFireIcon size={16} />
                                <div>
                                    <p>Number of Sales</p>
                                    <h3>$86.400</h3>
                                </div>

                                <div>
                                    <div>
                                        <span></span>
                                        <p>Apparel</p>
                                    </div>
                                    <p>$12.150</p>
                                </div>
                                <div>
                                    <div>
                                        <span></span>
                                        <p>Electronics</p>
                                    </div>
                                    <p>$24.900</p>
                                </div>
                                <div>
                                    <div>
                                        <span></span>
                                        <p>EMCG</p>
                                    </div>
                                    <p>$12.750</p>
                                </div>
                                <div>
                                    <div>
                                        <span></span>
                                        <p>Other Sales</p>
                                    </div>
                                    <p>$50.200</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}

            {/* <div> */}
                <div className="col-span-5 bg-white">
                    <h3>Activity Timeline</h3>
                    <ul>
                        <li>
                            <h4>12 Invoices have been</h4>
                            <p>invoices have been paid to the company</p>
                            <button className="flex gap-2p-2 bg-gray-300">
                                <File size={16} />
                                <p>invoices.pdf</p>
                            </button>
                            <span>12 Min Ago</span>
                        </li>
                        <li>
                            <h4>Client Meeting</h4>
                            <p>Project meeting with john @10:15am</p>
                            <div className="flex gap-2">
                                <img 
                                    src="../../../../public/images/avatars/1.png" 
                                    alt="" 
                                    className="w-8 rounded-full"
                                />
                                <div className="">
                                    <p>Lester McCarthy (Client)</p>
                                    <p>CEO of themeSelection</p>
                                </div>
                            </div>
                            <span>45 Min Ago</span>
                        </li>
                        <li>
                            <h4>Create a new project for client</h4>
                            <p>6team members in a project</p>
                            <span>2 Days Ago</span>
                        </li>
                    </ul>
                </div>
                <div className="col-span-4 bg-white">
                    <EllipsisVertical size={16} />
                    <h3>Weekly Sales</h3>
                    <p>Total 85.4k Sales</p>
                    <div>
                    </div>
                    <div>
                        <div className="flex gap-2">
                            <ChartPie size={16} />
                            <div>
                                <p>$34.6k</p>
                                <p>Sales</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <DollarSign size={16} />
                            <div>
                                <p>$482k</p>
                                <p>Total Profit</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid col-span-3 grid-col gap-4">
                    <div className="bg-white gap-4 p-3 rounded-sm">
                        <h3>42.5k</h3>
                        <div>
                        </div>
                        <p>Total Growth</p>
                    </div>
                    <div className="bg-white gap-4 p-3 rounded-sm">
                        <EllipsisVertical size={16} />
                        <FileBarChart size={16} />
                        <p>New Project</p>
                        <div>
                            <h3>862</h3>
                            <p>-18%</p>
                        </div>
                        <p>Yearly Project</p>
                    </div>
                </div>
            {/* </div> */}

            {/* <div> */}
                <div className="col-span-4 bg-white">
                    <EllipsisVertical size={16} />
                    <h3>Upgrade Plan</h3>
                    <p>Please make the payment to start enjoying all the features of our premium plan as soon as possible.</p>
                    <div>
                        <div>
                            <BriefcaseBusiness size={16} />
                        </div>
                        <div>
                            <p>Platinum</p>
                            <span>Upgrade Plan</span>
                        </div>
                        <div>
                            <span>$</span><h3>5,250</h3><span>/Year</span>
                        </div>
                    </div>
                    <p>Payment details</p>
                    <div>
                        <div>
                            <div>
                                <img src="" alt="" />
                                <div>
                                    <p>Creadit Card</p>
                                    <p>2566 xxxx xxxx 8908</p>
                                </div>
                            </div>
                            <div>
                                <p>CVV</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="" alt="" />
                                <div>
                                    <p>Creadit Card</p>
                                    <p>3740 xxxx xxxx 3008</p>
                                </div>
                            </div>
                            <div>
                                <p>CVV</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Add Payment Method</p>
                        <input type="email" name="" id="" placeholder="Email Address"/>
                    </div>
                    <input type="submit" value="Contact Now" />
                </div>

                <div className="col-span-4 bg-white">
                    <EllipsisVertical size={16} />
                    <h3>Meeting Schedule</h3>
                    <div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-3">
                                <img src="" alt="" className="rounded-full w-8"/>
                                <div>
                                    <h4>Call with Woods</h4>
                                    <p><Calendar size={16} /> 21 Jul | 08:20-10:30</p>
                                </div>
                            </div>
                            <div className="text-blue-600 p-2 bg-[#32323250]">
                                <p>Business</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-4 bg-white">
                    <img src="" alt="" />

                    <div>
                        <div>
                            <p>Jan</p>
                            <p>24</p>
                        </div>
                        <div>
                            <h5>Developer Meetup</h5>
                            <p>The WordPress open source,free software project is the community behind the…</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Star size={16} />
                            <p>Interested</p>
                        </div>
                        <div>
                            <CheckCheck size={16} />
                            <p>Joined</p>
                        </div>
                        <div>
                            <Users size={16} />
                            <p>Invited</p>
                        </div>
                        <div>
                            <Ellipsis size={16} />
                            <p>More</p>
                        </div>
                    </div>
                    <div>
                        <Clock size={16} />
                        <div>
                            <p>Tuesday, 24 january, 10:20 - 12:30</p>
                            <p>After 1 week</p>
                        </div>
                    </div>
                    <div>
                        <Map size={16} />
                        <div>
                            <p>The Rochard NYC</p>
                            <p>1305 Lexington Ave, New York</p>
                        </div>
                    </div>
                </div>

            {/* </div> */}
        </div>
    )
}
