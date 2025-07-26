

export type SidebarItem = {
    name: string;
    icon?: React.ComponentType<{ size?: number }>;
    children?: SidebarItem[];
    share?: boolean;
    badge?: string;
    disabled?: boolean;
};

export type SidebarItemProps = {
    item: SidebarItem;
    path: string[];
    activePath: string | null;
    depth?: number;
    setActivePath: React.Dispatch<React.SetStateAction<string | null>>;
    openSections: string[] | string;
    setOpenSections: React.Dispatch<React.SetStateAction<string[]>>;
    setActiveExpandedSection: React.Dispatch<React.SetStateAction<string | string[] | null>>;
    activeExpandedSection: string | null | string[];
    toggleSection: (key: string) => void;
    isExpanded: boolean;
    isCheckedExpand: boolean;
};