

import type { SidebarItem } from "./types";

export function normalizeTree(arr: any[]): SidebarItem[] {
    return arr.map(item => {
        if (typeof item === "string") {
            return { name: item, children: [] };
        }
        if (typeof item === "object") {
            return {
                name: item.name,
                children: item.children ? normalizeTree(item.children) : [],
                share: item.share,
                disabled: item.disabled,
                badge: item.badge
            };
        }
        return { name: "", children: [] };
    });
}