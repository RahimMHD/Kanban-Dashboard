
// components/Sidebar/SidebarItem.tsx

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronRight } from "lucide-react";
import type { SidebarItemProps } from "./types";

const SidebarItem = React.memo(({ item, path, activePath, depth = 0, setActivePath, openSections, toggleSection, setOpenSections, activeExpandedSection, setActiveExpandedSection, isExpanded, isCheckedExpand}: SidebarItemProps) => {
    const pathKey = path.join("/");
    const isOpen = openSections.includes(pathKey)
    const hasChildren = item.children && item.children.length > 0;
    const isActiveLeaf = activePath === pathKey;
    
    const handleClick = () => {
        
        if (hasChildren) {
            toggleSection(pathKey);
        } else {
            const updatePathkey = pathKey.split("/");
            setOpenSections(prev => prev.includes(pathKey) ? prev : [...prev, pathKey]);
            setActivePath(pathKey);
            const levels = updatePathkey.map((_, index) => updatePathkey.slice(0, index + 1).join("/"));
            setActiveExpandedSection(levels);
            
        }
    };

    return (
        <div>
            <button
                onClick={handleClick}
                className={`
                    flex items-center w-full p-2 cursor-pointer  ${isExpanded ? "rounded-r-xl justify-between" : "rounded-xl justify-center"}
                    ${isOpen && hasChildren ? "bg-gray-300 text-black" : ""}
                    ${isActiveLeaf
                        ? hasChildren
                            ? "bg-gray-300 text-black"
                            : "bg-[#42B1FB] text-white"
                        : "hover:bg-gray-200 hover:text-black"
                    }
                    ${item.disabled ? "opacity-50 cursor-not-allowed" : ""}
                `}
                style={{ paddingLeft: `${8 + depth * 16}px` }}
                disabled={item.disabled}
            >
                <div className="flex items-center gap-2">
                    {item.icon && <item.icon size={22} />}
                    {isExpanded && <span className="text-md font-medium">{item.name}</span>}
                </div>
                {isExpanded && <div className="flex items-center gap-1">
                    {item.share && <ExternalLink size={14} />}
                    {hasChildren && (
                        <ChevronRight
                            size={16}
                            className={`transition-transform duration-300 font-bold ${isOpen ? "rotate-90" : ""}`}
                        />
                    )}
                </div>}
            </button>

            {isExpanded && <AnimatePresence initial={false}>
                {hasChildren && isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {item.children?.map((child) => (
                            <SidebarItem
                                key={child.name}
                                item={child}
                                path={[...path, child.name]}
                                activePath={activePath}
                                setActivePath={setActivePath}
                                openSections={openSections}
                                toggleSection={toggleSection}
                                depth={depth + 1}
                                setOpenSections={setOpenSections}
                                activeExpandedSection={activeExpandedSection}
                                setActiveExpandedSection={setActiveExpandedSection}
                                isExpanded={isExpanded}
                                isCheckedExpand={isCheckedExpand}
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>}

            {item.name === "Front Page" && <SectionDivider text={"Apps & Pages"} isExpanded={isExpanded} />}
            {item.name === "Wizard Examples" && <SectionDivider text={"Forms & Table"} isExpanded={isExpanded} />}
            {item.name === "MUI Tables" && <SectionDivider text={"Charts & Misc"} isExpanded={isExpanded} />}
        </div>
    );
});

export default SidebarItem;

// SectionDivider component
function SectionDivider({ text, isExpanded }: { text: string, isExpanded: boolean }) {
    return (
        isExpanded 
            ?
                <div className={`my-4`}>
                    <div className="w-full flex items-center">
                        <div className="flex-grow border-t border-gray-400"></div>
                        <span className="px-3 text-xs text-gray-600 font-medium">{text}</span>
                        <div className="flex-grow border-t border-gray-400"></div>
                    </div>
                </div>
            : <div className="flex-grow m-4 border-t border-gray-400"></div>  
    );
}