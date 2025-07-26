

import { ChevronRight, Circle, CircleCheckBig } from "lucide-react";
import { useEffect, useState } from "react";
import SidebarItem  from "./sectionBarItems";
import { sections } from "./sidebardata";
import { path } from "framer-motion/m";


export default function Sidebar() {
    const [activePath, setActivePath] = useState<string | null>("Dashboards/CRM");
    const [expandedSection, setExpandedSection] = useState<string | null>("Dashboards");    
    const [activeExpandedSection, setActiveExpandedSection] = useState<string | string[] | null>(["Dashboards"]);    
    const [openSections, setOpenSections] = useState<string[]>(["Dashboards"]);

    
    const [isExpanded, setIsExpanded] = useState<boolean>(true);
    const [isCheckedExpand, setIsCheckedExpand] = useState<boolean>(true);
    
    const toggleSection = (pathKey: string) => {
        // console.log("all", {pathKey, openSections, activeExpandedSection});
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


    const isChildPathInParent = (pathKey: string) => {
        const topLevel = pathKey.split("/")[0];
        const secondLevel = pathKey.split("/")[1];

        const section = sections.find(p => p.name === topLevel);
        const child = section?.children?.find((child: any) => child.name === secondLevel);

        return !!child;
    }

    useEffect(() => {
        setIsExpanded(isCheckedExpand)
    }, [isCheckedExpand])
    
    return (
        <aside 
            className={`
                sidebar fixed md:static z-40 h-[100vh] font-semibold text-black pb-4 transform-all duration-300 bg-white shadow-xl rounded-md overflow-y-scroll
                ${isExpanded ? "w-[275px]" : "w-[55px]"} 
            `}
            onMouseEnter={() => !isCheckedExpand && setIsExpanded(true)}
            onMouseLeave={() => !isCheckedExpand && setIsExpanded(false)}
        >
            <div className={`
                mb-4 bg-[#ffffff] flex justify-between items-center sticky top-0 left-0
                ${isExpanded ? "p-4": "p-2"}
            `}>
                <div className="flex gap-2 items-center">
                    <img 
                        className="w-8 rounded-full" 
                        src="/images/logos/23133a5c97d74294b2e62ac8a2209466-free.png" 
                        alt="FlashTime Logo" 
                    />
                    {isExpanded && <h1 className="text-xl font-bold">FLASHTIME</h1>}
                </div>

                {isCheckedExpand  
                    ?   <CircleCheckBig className={`transition-all duration-200 cursor-pointer hover:scale-2`} onClick={() => setIsCheckedExpand(!isCheckedExpand)}/>
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
        </aside>
    );
}