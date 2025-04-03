import { ChartNoAxesCombined, CircuitBoard, CloudLightning, EarthLock, LayoutDashboard, ScanQrCode } from 'lucide-react'

const stepsData = [
    {
        header: "Open ZORT",
        para: "Launch the app and point your camera at any bet slip - no sign up required.",
        number: "01"
    },
    {
        header: "Take a Photo",
        para: "Capture your bet slip with your phone's camera. Works with both physical and digital slips.",
        number: "02"
    },
    {
        header: "Instant Processing",
        para: "Our AI immediately extracts all bet details including odds, stakes, and potential returns.",
        number: "03"
    },
    {
        header: "View Results",
        para: "See your organized bets and track your performance over time through the interactive dashboard.",
        number: "04"
    },
]


const bettingStats = [
    { label: 'Total Bets', value: '47' },
    { label: 'Win Rate', value: '15.7%' },
    { label: 'Biggest Win', value: '£145.50', positive: true },
    { label: 'Biggest Loss', value: '-£50.00', negative: true },
];

const sportDistribution = [
    { sport: 'Football', percentage: '45%' },
    { sport: 'Basketball', percentage: '30%' },
    { sport: 'F1', percentage: '25%' },
];

const dailySummaryData = [
    { label: "Best Day", value: "+£65", positive: true },
    { label: "Worst Day", value: "-£20", negative: true },
];

const januarySummaryData = [
    { label: 'Total Profit', value: '£309.15', icon: '📈', positive: true },
    { label: 'Win Rate', value: '32.0%', icon: '%' },
    { label: 'Biggest Win', value: '£262.50', icon: '⬆', positive: true },
    { label: 'Biggest Loss', value: '£49.60', icon: '⬇', negative: true },
    { label: 'Average Stake', value: '£16.92', icon: '💰' },
    { label: 'Average Odds', value: '71.11', icon: '%' },
]

const profitLossByDayData = [
    { label: "Mon", value: "+£45", height: "h-[60%]", positive: true },
    { label: "Tue", value: "-£20", height: "h-[30%]", negative: true },
    { label: "Wed", value: "+£65", height: "h-[80%]", positive: true },
    { label: "Thu", value: "+£30", height: "h-[40%]", positive: true },
    { label: "Fri", value: "-£15", height: "h-[20%]", negative: true },
]

const featuresData = [
    {
        icon: <ScanQrCode className='text-secondary' />,
        header: "AI Bet Slip Scanner",
        para: "Instantly scan and analyze any bet slip. Our AI extracts odds, stakes, and potential returns with incredible accuracy."
    },
    {
        icon: <LayoutDashboard className='text-secondary' />,
        header: "Interactive Dashboard",
        para: "Track your performance with beautiful visualizations. Monitor win rates, ROI, and betting patterns in real-time."
    },
    {
        icon: <ChartNoAxesCombined className='text-secondary' />,
        header: "Smart Analytics",
        para: "Get intelligent insights about your betting behavior. Identify winning strategies and optimize your approach."
    },
    {
        icon: <EarthLock className='text-secondary' />,
        header: "Secure & Private",
        para: "Your data is encrypted and protected. We prioritize your privacy and security above everything."
    },
    {
        icon: <CircuitBoard className='text-secondary' />,
        header: "AI-Powered Predictions",
        para: "Leverage advanced machine learning models to get accurate betting predictions and maximize your chances of winning."
    },
    {
        icon: <CloudLightning className='text-secondary' />,
        header: "Real-Time Alerts",
        para: "Stay ahead of the game with instant notifications on odds changes, match updates, and betting opportunities."
    }
]

const faqData = [
    {
        question: "How does the AI make betting predictions?",
        answer: "Our AI analyzes historical data, team performance, player statistics, and real-time odds to generate accurate predictions. It continuously learns and improves based on outcomes."
    },
    {
        question: "Can I scan any bet slip with the AI Bet Slip Scanner?",
        answer: "Yes! Our AI-powered scanner works with most bet slips, extracting odds, stakes, and potential returns instantly to help you make informed decisions."
    },
    {
        question: "Is my data safe and private?",
        answer: "Absolutely. We use advanced encryption protocols to protect your data. Your betting history and personal information remain confidential and secure."
    },
    {
        question: "Do I need any technical knowledge to use the app?",
        answer: "Not at all! Our app is designed for everyone, from beginners to seasoned bettors. The interactive dashboard and smart analytics make it easy to track and improve your bets."
    },
    {
        question: "Does the app guarantee betting success?",
        answer: "While our AI provides valuable insights and predictions, betting always involves risk. Use our analytics to make smarter decisions, but always bet responsibly."
    }
]


export { stepsData, bettingStats, sportDistribution, dailySummaryData, januarySummaryData, profitLossByDayData, featuresData, faqData }