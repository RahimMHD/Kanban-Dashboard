
import { User } from "lucide-react";

interface User {
    id: string;
    img: string;
    username: string;
    name: string;
    email: string;
    role: string;
    status: 'Active' | 'Pending' | 'Inactive';
    avatar?: string;
    icon: React.ReactNode;
}

const users: User[] = [
    { id: '1', img: "../../../../../../public/images/avatars/1.png",username: "@amiccoo", name: 'Jordan Stevenson', email: 'Jacinthe_Blick@hotmail.com', role: 'Admin', status: 'Pending', icon: <User /> },
    { id: '2', img: "../../../../../../public/images/avatars/2.png",username: "@brossiter15", name: 'Richard Payne', email: 'Jaylon_Bartell3@gmail.com', role: 'Editor', status: 'Active', icon: <User /> },
    { id: '3', img: "../../../../../../public/images/avatars/3.png",username: "@jsbemblinf", name: 'Jennifer Summers', email: 'Tristin_Johnson@gmail.com', role: 'Author', status: 'Active', icon: <User /> },
    { id: '4', img: "../../../../../../public/images/avatars/4.png",username: "@justin45", name: 'Mr. Justin Richardson', email: 'Toney21@yahoo.com', role: 'Editor', status: 'Pending', icon: <User /> },
    { id: '5', img: "../../../../../../public/images/avatars/5.png",username: "@tannernic", name: 'Nicholas Tanner', email: 'Hunter_Kuhic68@hotmail.com', role: 'Maintainer', status: 'Active', icon: <User /> },
    { id: '6', img: "../../../../../../public/images/avatars/6.png",username: "@crystal99", name: 'Crystal Mays', email: 'Novene_Bins@yahoo.com', role: 'Editor', status: 'Pending', icon: <User /> },
    { id: '7', img: "../../../../../../public/images/avatars/3.png",username: "@marygarcia4", name: 'Mary Garcia', email: 'Emmitt_Walker14@hotmail.com', role: 'Maintainer', status: 'Inactive', icon: <User /> },
    { id: '8', img: "../../../../../../public/images/avatars/5.png",username: "@megan78", name: 'Megan Roberts', email: 'Patrick_Howe73@gmail.com', role: 'Subscriber', status: 'Active', icon: <User /> },
];

const getRoleIcon = (role: string) => {
    switch (role) {
        case 'Admin': return '👑';
        case 'Editor': return '✏️';
        case 'Author': return '📝';
        case 'Maintainer': return '🔧';
        case 'Subscriber': return '👤';
        default: return '👤';
    }
};

const getStatusColor = (status: string) => {
    switch (status) {
        case 'Active': return 'bg-[#28dd2265] text-[#06b300] text-base font-semibold rounded-xl px-2 py-1 text-center';
        case 'Pending': return 'bg-[#ffb40065] text-[#ffb400] text-base font-semibold rounded-xl px-2 py-1 text-center';
        case 'Inactive': return 'bg-[#f3341b65] text-[#b41500] text-base font-semibold rounded-xl px-2 py-1 text-center';
        default: return 'text-base font-semibold rounded-xl px-2 py-1 text-center';
    }
};

export const UserTable: React.FC = () => {
    return (
        <div className="relative">
            <div className="">
                <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                    <tr className="border-b border-border">
                        <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">USER</th>
                        <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">EMAIL</th>
                        <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">ROLE</th>
                        <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">STATUS</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="">
                        <td className="py-1">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9">
                                    <img src={user.img} alt={user.name} className="rounded-full" />
                                </div>
                                <div className="">
                                    <h2 className="font-medium text-sm m-0">{user.name}</h2>
                                    <span className="font-normal text-xs m-0">{user.username}</span>
                                </div>
                            </div>
                        </td>
                        <td className="py-3 px-2">
                            <span className="text-sm text-muted-foreground">{user.email}</span>
                        </td>
                        <td className="py-3 px-2">
                            <div className="flex items-center gap-2">
                            <span className="text-sm">{getRoleIcon(user.role)}</span>
                            <span className="text-sm">{user.role}</span>
                            </div>
                        </td>
                        <td className="py-1 px-2">
                            <div className={getStatusColor(user.status)}>
                                {user.status}
                            </div>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
};