

import { Circle, CircleCheck, X, XCircle} from "lucide-react";
import { useEffect, useState } from "react";
import SidebarItem  from "./sectionBarItems";
import { sections } from "./sidebardata";
import { path } from "framer-motion/m";
import { AnimatePresence, motion } from "framer-motion";

interface ChildComponentProps {
    isExpand: (data: boolean) => void; // Define the type of the callback prop
    isResize: boolean // Define the type of the callback prop
}

const Sidebar: React.FC<ChildComponentProps> = ({ isExpand, isResize }) => {
    const [activePath, setActivePath] = useState<string | null>("Dashboards/CRM");
    const [expandedSection, setExpandedSection] = useState<string | null>("Dashboards");    
    const [activeExpandedSection, setActiveExpandedSection] = useState<string | string[] | null>(["Dashboards"]);    
    const [openSections, setOpenSections] = useState<string[]>(["Dashboards"]);

    
    const [isExpanded, setIsExpanded] = useState<boolean>(true);
    const [isCheckedExpand, setIsCheckedExpand] = useState<boolean>(true);

    // change expanded section and checking if she was expanded
    const toggleSection = (pathKey: string) => {
        setOpenSections((prev) => {
            let updatedSections: any = [...prev];
            const keep = activeExpandedSection ? activeExpandedSection : [];
            
            
            if (updatedSections.includes(pathKey)) {
                if (!activeExpandedSection?.includes(pathKey)) {
                    updatedSections = updatedSections.filter((p: any) => p !== pathKey);
                }
            } else {
                updatedSections.push(pathKey);

                if (!isChildPathInParent(pathKey)) {
                    // console.log(updatedSections)
                    const updatePathkey = pathKey.split("/");
                    updatedSections = Array.from(new Set([...keep, ...updatePathkey])).slice(-4);
                }
                setExpandedSection(pathKey);
            }
            console.log("second all", {updatedSections, openSections, activeExpandedSection});
            return updatedSections;
        });
    };


    // check if she has pathKey in toggleSection
    const isChildPathInParent = (pathKey: string) => {
        const topLevel = pathKey.split("/")[0];
        const secondLevel = pathKey.split("/")[1];

        const section = sections.find(p => p.name === topLevel);
        const child = section?.children?.find((child: any) => child.name === secondLevel);

        return !!child;
    }

    // checking if isCheckExpanded changed 
    useEffect(() => {
        setIsExpanded(isCheckedExpand)
    }, [isCheckedExpand])
    
    // if she expanded change boolean
    useEffect(() => {
        isExpand(isExpanded)
    }, [isExpanded])
    
    
    return (
        <AnimatePresence>
            <motion.aside 
                animate={{width: isExpanded ? "16%" : "5%"}}
                transition={{duration: 0.2, ease: "easeInOut"}}
                className={`
                    sidebar
                    top-0 z-10 h-[100vh] font-semibold text-black pb-4 bg-white shadow-xl rounded-md overflow-y-scroll
                    ${isResize ? "absolute left-[-250px]" : "sticky left-0"} 
                `}
                    onMouseEnter={() => !isCheckedExpand && setIsExpanded(true)}
                    onMouseLeave={() => !isCheckedExpand && setIsExpanded(false)}
                    >
                <div className={`
                    mb-4 bg-[#ffffff] flex items-center sticky top-0 left-0
                    ${isExpanded ? "p-4 justify-between": "p-2 justify-center"}
                `}>
                    <div className={`flex ${isExpanded ? 'gap-2' : ''} items-center`}>
                        <img 
                            className="w-8 rounded-full" 
                            src="/images/logos/23133a5c97d74294b2e62ac8a2209466-free.png" 
                            alt="FlashTime Logo" 
                        />
                        {isExpanded && <h1 className="text-lg font-bold">FLASHTIME</h1>}
                    </div>

                    {isResize 
                        ? <XCircle size={22} className={`transition-all duration-200 cursor-pointer hover:scale-2 hover:text-blue-500`}/>
                        : isCheckedExpand  
                            ?   <CircleCheck className={`transition-all duration-200 cursor-pointer hover:scale-2`} onClick={() => setIsCheckedExpand(!isCheckedExpand)}/>
                            : isExpanded 
                            &&  <Circle className={`transition-all duration-200 cursor-pointer hover:scale-2`} onClick={() => setIsCheckedExpand(!isCheckedExpand)}/>
                    }
                </div>

                <nav className={`h-[100%] pt-0 ${isExpanded ? "p-4" : "p-2"} space-y-1 transition-[max-height] duration-300 `}>
                    {sections.map((item) => (
                        <SidebarItem
                            key={item.name}
                            item={item}
                            path={[item.name]}
                            activePath={activePath}
                            setActivePath={setActivePath}
                            toggleSection={toggleSection}
                            openSections={openSections}
                            setOpenSections={setOpenSections}
                            activeExpandedSection={activeExpandedSection}
                            setActiveExpandedSection={setActiveExpandedSection}
                            isExpanded={isExpanded}
                            isCheckedExpand={isCheckedExpand}
                        />
                    ))}
                </nav>
            </motion.aside>
        </AnimatePresence>
    );
}


export default Sidebar