

interface TransactionItemProps {
    icon: string;
    name: string;
    description: string;
    amount: string;
    positive?: boolean;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ 
    icon, 
    name, 
    description, 
    amount, 
    positive = true 
}) => (
    <div className="flex items-center gap-3 py-2">
        <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-sm">
        <img src={icon} alt="" />
        </div>
        <div className="flex-1">
        <div className="font-medium text-md">{name}</div>
        <div className="text-xs text-muted-foreground">{description}</div>
        </div>
        <div className={`text-md font-medium ${positive ? 'text-[#07c500]' : 'text-[#f3341b]'}`}>
        {positive ? '+' : '-'}{amount}
        </div>
    </div>
);

export const DepositWithdraw: React.FC = () => {
    const deposits = [
        { icon: '../../../../../../public/images/cards/gumroad.png', name: 'Gumroad Account', description: 'Sell UI Kit', amount: '$4,650' },
        { icon: '../../../../../../public/images/logos/mastercard.png', name: 'Mastercard', description: 'Wallet deposit', amount: '$92,705' },
        { icon: '../../../../../../public/images/logos/stripe.png', name: 'Stripe Account', description: 'iOS Application', amount: '$957' },
        { icon: '../../../../../../public/images/logos/american-bank.png', name: 'American Bank', description: 'Bank Transfer', amount: '$6,837' },
        { icon: '../../../../../../public/images/logos/citi-bank.png', name: 'Bank Account', description: 'Wallet deposit', amount: '$446' },
    ];

    const withdraws = [
        { icon: '../../../../../../public/images/logos/google.png', name: 'Google Adsense', description: 'Paypal deposit', amount: '$145', positive: false },
        { icon: '../../../../../../public/images/logos/github.png', name: 'Github Enterprise', description: 'Security & compliance', amount: '$1970', positive: false },
        { icon: '../../../../../../public/images/logos/slack.png', name: 'Upgrade Slack Plan', description: 'Debit card deposit', amount: '$450', positive: false },
        { icon: '../../../../../../public/images/logos/digital-ocean.png', name: 'Digital Ocean', description: 'Cloud Hosting', amount: '$540', positive: false },
        { icon: '../../../../../../public/images/logos/aws.png', name: 'AWS Account', description: 'Choosing a Cloud Platform', amount: '$21', positive: false },
    ];

    return (
        <div className="grid grid-cols-7 gap-2">
            <div className="grid cols-span-3 col-start-1 col-end-4">
                <header className="flex flex-row items-center justify-between pb-4">
                    <h2 className="text-base font-medium">Deposit</h2>
                    <button className="text-[#0A6CD5] font-semibold hover:text-[#42b1fb] p-0 h-auto">
                        View All
                    </button>
                </header>
                <section>
                <div className="space-y-2">
                    {deposits.map((item, index) => (
                    <TransactionItem key={index} {...item} />
                    ))}
                </div>
                </section>
            </div>
            
            <div className="grid cols-span-1 items-center justify-center">
                <div className="w-[1px] h-full bg-gray-400"/>
            </div>

            <div className="grid cols-span-3 col-start-5 col-end-8">
                <header className="flex flex-row items-center justify-between pb-4">
                    <h2 className="text-base font-medium">Withdraw</h2>
                    <button className="text-[#0A6CD5] font-semibold hover:text-[#42b1fb] p-0 h-auto">
                        View All
                    </button>
                </header>
                <section>
                    <div className="space-y-2">
                        {withdraws.map((item, index) => (
                        <TransactionItem key={index} {...item} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};