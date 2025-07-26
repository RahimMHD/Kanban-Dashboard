
import { 
    ExternalLink,
    ChevronRight,
    ChevronDown,
    Menu,
    CircleSmall, 
    Home, 
    PanelRight ,
    ShoppingBag, 
    GraduationCap, 
    RectangleEllipsis, 
    Mail, 
    MessageCircleMore, 
    CalendarHeart, 
    Kanban,
    User,
    FileText,
    Notebook,
    BookOpen,
    ShieldAlert,
    MessageSquare,
    ChartNetwork,
    Table2,
    BookCheck,
    SquareSigma,
    BrickWall,
    Disc2,
    Table,
    ChartColumnBig,
    FileStack,
    Component,
    Logs,
    LifeBuoy,
    BookText,
    GripHorizontal
} from "lucide-react";
import { normalizeTree } from "./normalize";
import type { SidebarItem } from "./types";


export const sections: SidebarItem[] = [
{
    name: "Dashboards",
    icon: Home,
    children: normalizeTree(
        ["CRM", "Analytics", "ECommerce", "Academy", "Logistics"]
    )
},
{
    name: "Front Page",
    icon: PanelRight,
    children: normalizeTree(
        ["Landing", "Pricing", "Payment", "Checkout", "Help Center"],
    )
},
{
    name: "ECommerce",
    icon: ShoppingBag,
    children:  normalizeTree(
        [
            "Dashboard",
            { name: "Products", children: ["List", "Add", "Category"] },
            { name: "Orders", children: ["List", "Add", "Details"] },
            { name: "Customers", children: ["List", "Add", "Details"] },
            "Manage Reviews", "Referrals", "Settings"
        ],
    )
},
{
    name: "Academy",
    icon: GraduationCap,
    children: normalizeTree([
        { name: "Dashboard", children: [] },
        { name: "My Courses", children: [] },
        { name: "Course Details", children: [] }
    ])
},
{
    name: "Logistics",
    icon: RectangleEllipsis,
    children: normalizeTree([
        { name: "Dashboard", children: [] },
        { name: "Fleet", children: [] }
    ])
},
{
    name: "Email",
    icon: Mail,
    children: []
},
{
    name: "Chat",
    icon: MessageCircleMore,
    children: []
},
{
    name: "Calender",
    icon: CalendarHeart,
    children: []
},
{
    name: "Kanban",
    icon: Kanban,
    children: []
},
{
    name: "Invoice",
    icon: FileText,
    children: normalizeTree([
        { name: "List", children: [] },
        { name: "Preview", children: [] },
        { name: "Edit", children: [] },
        { name: "Add", children: [] }
    ])
},
{
    name: "User",
    icon: User,
    children: normalizeTree([
        { name: "List", children: [] },
        { name: "View", children: [] }
    ])
},
{
    name: "Roles & Permissions",
    icon: Notebook,
    children: normalizeTree([
        { name: "Permissions", children: [] },
        { name: "Roles", children: [] }
    ])
},
{
    name: "Pages",
    icon: BookOpen,
    children:  normalizeTree(
        [
            "User Profile", "Account Settings", "FAQ", "Pricing",
            { name: "Miscellaneous", children: [
                "Coming Soon", "Under Maintenance", "Page Not Found - 404", "Not Authorized - 401"
            ]}
        ],
    )
},
{
    name: "Auth Pages",
    icon: ShieldAlert,
    children: normalizeTree([
            { name: "Login", children: ["Basic", "Cover", "Split"] },
            { name: "Register", children: ["Basic", "Cover", "Split"] },
            { name: "Verify Email", children: ["Basic", "Cover", "Split"] },
            { name: "Forgot Password", children: ["Basic", "Cover", "Split"] },
            { name: "Reset Password", children: ["Basic", "Cover", "Split"] },
            { name: "Two Steps", children: ["Basic", "Cover", "Split"] }
        ],
    )
},
{
    name: "Wizard Examples",
    icon: ChartNetwork,
    children: normalizeTree([
        { name: "Checkout", children: [] },
        { name: "Property Listing", children: [] },
        { name: "Create Deal", children: [] }
    ])
},
{
    name: "Dialog Examples",
    icon: MessageSquare,
    children: []
},
{
    name: "Widget Examples",
    icon: Table2,
    children: normalizeTree([
        { name: "basic", children: [] },
        { name: "Advanced", children: [] },
        { name: "Statistics", children: [] },
        { name: "Charts", children: [] },
        { name: "Gamification", children: [] },
        { name: "Actions", children: [] }
    ])
},
{
    name: "Form Layouts",
    icon: BookCheck,
    children: []
},
{
    name: "Form Validation",
    icon: SquareSigma,
    children: []
},
{
    name: "Form Wizard",
    icon: ChartNetwork,
    children: []
},
{
    name: "React Table",
    icon: BrickWall,
    children: []
},
{
    name: "Form Elements",
    icon: Disc2,
    share: true,
    children: []
},
{
    name: "MUI Tables",
    icon: Table,
    share: true,
    children: []
},
{
    name: "Charts",
    icon: ChartColumnBig,
    children: normalizeTree([
        { name: "Recharts", children: [] },
        { name: "Apex", Children: [] }
    ])
},
{
    name: "Foundation",
    icon: FileStack,
    share: true,
    children: []
},
{
    name: "Components",
    icon: Component,
    share: true,
    children: []
},
{
    name: "Menu Examples",
    icon: Logs,
    share: true,
    children: []
},
{
    name: "Raise Support",
    icon: LifeBuoy,
    share: true,
    children: []
},
{
    name: "Documentation",
    icon: BookText,
    share: true,
    children: []
},
{
    name: "Others",
    icon: GripHorizontal,
    children: normalizeTree(
        [
            { name: "Item With Badge" },
            "Dashboard 2",
            {
                name: "Menu Levels",
                children: [
                    "Level 1", "Level 2",
                    {
                        name: "Level 3",
                        children: ["Level 3.1", "Level 3.2"]
                    }
                ]
            },
            "Disabled Menu"
        ],
    )
},
]; 