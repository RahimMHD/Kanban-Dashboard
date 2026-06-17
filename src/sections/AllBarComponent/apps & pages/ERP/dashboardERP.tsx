import { useState, useEffect, useRef } from "react";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import type { Theme } from "../../../../separeteComponent/darkmode";

interface Notification {
  id: number;
  text: string;
  time: string;
  read: boolean;
}

// ─── Static Data ──────────────────────────────────────────────────────────────
const SALES_DATA = [
  { time: "2am", purchase: 18000, sales: 8000 },
  { time: "4am", purchase: 22000, sales: 12000 },
  { time: "6am", purchase: 28000, sales: 18000 },
  { time: "8am", purchase: 45000, sales: 30000 },
  { time: "10am", purchase: 62000, sales: 48000 },
  { time: "12pm", purchase: 75000, sales: 60000 },
  { time: "2pm", purchase: 68000, sales: 55000 },
  { time: "4pm", purchase: 72000, sales: 65000 },
  { time: "6pm", purchase: 80000, sales: 70000 },
  { time: "8pm", purchase: 65000, sales: 52000 },
  { time: "10pm", purchase: 48000, sales: 38000 },
  { time: "12am", purchase: 30000, sales: 22000 },
];

const MONTHLY_SALES = [
  { month: "Jan", revenue: 12189, expense: 48988 },
  { month: "Feb", revenue: 28000, expense: 35000 },
  { month: "Mar", revenue: 18000, expense: 42000 },
  { month: "Apr", revenue: 35000, expense: 28000 },
  { month: "May", revenue: 45000, expense: 38000 },
  { month: "Jun", revenue: 32000, expense: 55000 },
  { month: "Jul", revenue: 52000, expense: 30000 },
  { month: "Aug", revenue: 28000, expense: 45000 },
  { month: "Sep", revenue: 42000, expense: 32000 },
  { month: "Oct", revenue: 38000, expense: 48000 },
  { month: "Nov", revenue: 55000, expense: 35000 },
  { month: "Dec", revenue: 60000, expense: 25000 },
];

const TOP_SELLING = [
  { name: "Charger Cable – Lightning", price: "$187", sales: "247+ Sales", trend: "+25%", up: true },
  { name: "Yves Saint Eau De Parfum", price: "$145", sales: "289+ Sales", trend: "+28%", up: true },
  { name: "Apple AirPods 2", price: "$240", sales: "300+ Sales", trend: "+19%", up: true },
  { name: "Vacuum Cleaner", price: "$139", sales: "225+ Sales", trend: "-61%", up: false },
  { name: "Samsung Galaxy S21 Fe 5g", price: "$698", sales: "365+ Sales", trend: "+19%", up: true },
];

const LOW_STOCK = [
  { name: "Dell XPS 13", id: "#665614", instock: 8 },
  { name: "Vacuum Cleaner Robot", id: "#940004", instock: 14 },
  { name: "KitchenAid Stand Mixer", id: "#3325869", instock: 21 },
  { name: "Levi's Trucker Jacket", id: "#321489", instock: 12 },
  { name: "Lay's Classic", id: "#365586", instock: 10 },
];

const RECENT_SALES = [
  { name: "Apple Watch Series 9", category: "Electronics", price: "$640", date: "Today", status: "Processing" },
  { name: "Gold Bracelet", category: "Fashion", price: "$126", date: "Today", status: "Cancelled" },
  { name: "Parachute Down Duvet", category: "Health", price: "$69", date: "15 Jan 2026", status: "Delivered" },
  { name: "YETI Rambler Tumbler", category: "Sports", price: "$65", date: "12 Jan 2026", status: "Processing" },
  { name: "Osmo Genius Starter Kit", category: "Lifestyles", price: "$87.56", date: "11 Jan 2026", status: "Completed" },
];

const TRANSACTIONS = [
  { customer: "Andrea Willer", id: "#114589", date: "24 May 2026", status: "Completed", total: "$4,560" },
  { customer: "Timothy Sandur", id: "#114589", date: "23 May 2026", status: "Completed", total: "$3,569" },
  { customer: "Bonnie Rodrigues", id: "#114589", date: "22 May 2026", status: "Draft", total: "$4,560" },
  { customer: "Randy McCree", id: "#114589", date: "21 May 2026", status: "Completed", total: "$2,155" },
  { customer: "Dawnie Anderson", id: "#114589", date: "21 May 2026", status: "Completed", total: "$5,123" },
];

const TOP_CUSTOMERS = [
  { name: "Carlos Curran", country: "USA", orders: 24, total: "$8,9645" },
  { name: "Stan Gaunter", country: "UAE", orders: 22, total: "$16,985" },
  { name: "Richard Wilson", country: "Germany", orders: 14, total: "$5,366" },
  { name: "Mary Bronson", country: "Belgium", orders: 8, total: "$4,569" },
  { name: "Annie Tremblay", country: "Greenland", orders: 14, total: "$3,5698" },
];

const PIE_DATA = [
  { name: "Electronics", value: 698, color: "#2563eb" },
  { name: "Sports", value: 545, color: "#f97316" },
  { name: "Lifestyles", value: 456, color: "#1e293b" },
];

const ORDER_STATS = [
  { day: "Mon", "2am":0,"4am":0,"6am":0,"8am":2,"10am":5,"12pm":3,"2pm":4,"4pm":0,"6pm":2 },
  { day: "Tue", "2am":0,"4am":1,"6am":0,"8am":3,"10am":2,"12pm":5,"2pm":0,"4pm":3,"6pm":1 },
  { day: "Wed", "2am":1,"4am":0,"6am":2,"8am":4,"10am":6,"12pm":2,"2pm":5,"4pm":0,"6pm":3 },
  { day: "Thu", "2am":0,"4am":2,"6am":0,"8am":1,"10am":4,"12pm":7,"2pm":2,"4pm":4,"6pm":0 },
  { day: "Fri", "2am":2,"4am":0,"6am":3,"8am":5,"10am":3,"12pm":4,"2pm":6,"4pm":2,"6pm":4 },
  { day: "Sat", "2am":0,"4am":1,"6am":0,"8am":2,"10am":5,"12pm":3,"2pm":0,"4pm":5,"6pm":2 },
  { day: "Sun", "2am":1,"4am":0,"6am":2,"8am":0,"10am":4,"12pm":2,"2pm":3,"4pm":0,"6pm":5 },
];

const NOTIFICATIONS: Notification[] = [
  { id: 1, text: "Apple iPhone 15 is running Low — below 5 pcs.", time: "2 min ago", read: false },
  { id: 2, text: "New order #114589 received from Andrea Willer.", time: "10 min ago", read: false },
  { id: 3, text: "Monthly sales report is ready to download.", time: "1 hr ago", read: true },
  { id: 4, text: "Low stock alert: Dell XPS 13 — 8 units left.", time: "3 hr ago", read: true },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
const STATUS_STYLES: Record<string, { bg: string; text: string; darkBg: string; darkText: string }> = {
  Processing: { bg: "bg-purple-100", text: "text-purple-700", darkBg: "dark:bg-purple-900/40", darkText: "dark:text-purple-300" },
  Cancelled:  { bg: "bg-red-100",    text: "text-red-700",    darkBg: "dark:bg-red-900/40",    darkText: "dark:text-red-300" },
  Delivered:  { bg: "bg-blue-100",   text: "text-blue-700",   darkBg: "dark:bg-blue-900/40",   darkText: "dark:text-blue-300" },
  Completed:  { bg: "bg-green-100",  text: "text-green-700",  darkBg: "dark:bg-green-900/40",  darkText: "dark:text-green-300" },
  Draft:      { bg: "bg-orange-100", text: "text-orange-700", darkBg: "dark:bg-orange-900/40", darkText: "dark:text-orange-300" },
};

function StatusBadge({ status }: { status: string }) {
  const s = STATUS_STYLES[status] ?? STATUS_STYLES.Draft;
  return (
    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${s.bg} ${s.text} ${s.darkBg} ${s.darkText}`}>
      {status}
    </span>
  );
}

function Avatar({ name, color }: { name: string; color: string }) {
  const initials = name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
  return (
    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 ${color}`}>
      {initials}
    </div>
  );
}

const AVATAR_COLORS = [
  "bg-blue-500","bg-purple-500","bg-green-500","bg-orange-500","bg-rose-500",
  "bg-teal-500","bg-indigo-500","bg-amber-500","bg-cyan-500","bg-pink-500",
];

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

function SectionHeader({ title, icon, action }: { title: string; icon: string; action?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <span className="text-lg">{icon}</span>
        <h3 className="font-semibold text-slate-800 dark:text-slate-100 text-sm">{title}</h3>
      </div>
      {action}
    </div>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────
function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white dark:bg-slate-800 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-blue-50 dark:bg-blue-900/20">
          <h2 className="font-bold text-blue-700 dark:text-blue-300 text-base">{title}</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xl leading-none">✕</button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

// ─── Add Order Modal ──────────────────────────────────────────────────────────
function AddOrderModal({ onClose, onAdd }: { onClose: () => void; onAdd: (o: typeof RECENT_SALES[0]) => void }) {
  const [form, setForm] = useState({ name: "", category: "Electronics", price: "", status: "Processing" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const inputCls = "w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-sm text-slate-800 dark:text-slate-100 outline-none focus:border-blue-500 transition-colors";
  const labelCls = "text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1 block";

  return (
    <Modal title="Add New Order" onClose={onClose}>
      <div className="space-y-4">
        <div>
          <label className={labelCls}>Product Name</label>
          <input className={inputCls} placeholder="e.g. MacBook Pro" value={form.name} onChange={set("name")} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Category</label>
            <select className={inputCls} value={form.category} onChange={set("category")}>
              {["Electronics","Fashion","Health","Sports","Lifestyles","Computers","Bags"].map(c =>
                <option key={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className={labelCls}>Price</label>
            <input className={inputCls} placeholder="$0.00" value={form.price} onChange={set("price")} />
          </div>
        </div>
        <div>
          <label className={labelCls}>Status</label>
          <select className={inputCls} value={form.status} onChange={set("status")}>
            {["Processing","Completed","Delivered","Cancelled","Draft"].map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div className="flex gap-3 pt-2">
          <button onClick={onClose}
            className="flex-1 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            Cancel
          </button>
          <button
            onClick={() => {
              if (!form.name.trim() || !form.price.trim()) return;
              onAdd({ name: form.name, category: form.category, price: form.price.startsWith("$") ? form.price : `$${form.price}`, date: "Today", status: form.status });
              onClose();
            }}
            className="flex-1 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition-colors">
            Add Order
          </button>
        </div>
      </div>
    </Modal>
  );
}

// ─── Toast ────────────────────────────────────────────────────────────────────
function Toast({ msg, type, onDone }: { msg: string; type: "success"|"info"|"error"; onDone: () => void }) {
  useEffect(() => { const t = setTimeout(onDone, 3000); return () => clearTimeout(t); }, []);
  const color = type === "success" ? "bg-green-600" : type === "error" ? "bg-red-600" : "bg-blue-600";
  return (
    <div className={`fixed bottom-6 right-6 z-[100] ${color} text-white px-5 py-3 rounded-xl shadow-xl text-sm font-semibold flex items-center gap-2`}>
      <span>{type === "success" ? "✓" : type === "error" ? "✕" : "ℹ"}</span>{msg}
    </div>
  );
}

// ─── Stat Card ────────────────────────────────────────────────────────────────
function StatCard({ label, value, change, up, accent, icon }: {
  label: string; value: string; change: string; up: boolean; accent: string; icon: string;
}) {
  return (
    <div className={`${accent} rounded-xl p-5 text-white relative overflow-hidden`}>
      <div className="absolute right-4 top-4 text-white/30 text-4xl">{icon}</div>
      <p className="text-xs font-semibold uppercase tracking-wider text-white/80 mb-1">{label}</p>
      <p className="text-2xl font-black mb-2">{value}</p>
      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${up ? "bg-white/20 text-white" : "bg-white/20 text-white"}`}>
        {up ? "▲" : "▼"} {change}
      </span>
    </div>
  );
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────
export default function Dashboard(theme: Theme) {
  // const [theme, setTheme] = useState<Theme>(Theme);
  const [dateRange] = useState("06/06/2026 – 06/12/2026");
  const [showNotif, setShowNotif] = useState(false);
  const [showAddOrder, setShowAddOrder] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(NOTIFICATIONS);
  const [recentSales, setRecentSales] = useState(RECENT_SALES);
  const [salesPeriod, setSalesPeriod] = useState("1T");
  const [txTab, setTxTab] = useState("Sale");
  const [toast, setToast] = useState<{msg:string;type:"success"|"info"|"error"}|null>(null);
  const [alertDismissed, setAlertDismissed] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);

  const unread = notifications.filter(n => !n.read).length;

  // Apply theme
  // useEffect(() => {
  //   const root = document.documentElement;
  //   if (theme === "dark") root.classList.add("dark");
  //   else root.classList.remove("dark");
  // }, [theme]);

  // Close notify dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) setShowNotif(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const markAllRead = () => {
    setNotifications(n => n.map(x => ({ ...x, read: true })));
    showToast("All notifications marked as read", "success");
  };

  const showToast = (msg: string, type: "success"|"info"|"error" = "info") => {
    setToast({ msg, type });
  };

  const handleAddOrder = (order: typeof RECENT_SALES[0]) => {
    setRecentSales(prev => [order, ...prev]);
    showToast(`Order "${order.name}" added`, "success");
  };

  // ── Layout ──────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300">

      {/* ── Top Nav ── */}
      <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-40 px-6 h-14 flex items-center gap-4 shadow-sm">
        {/* Logo */}
        <div className="flex items-center gap-2 mr-4 flex-shrink-0">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-sm">D</span>
          </div>
          <span className="font-black text-slate-800 dark:text-slate-100 text-base">Dreams<span className="text-orange-500">POS</span></span>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-sm flex items-center bg-slate-100 dark:bg-slate-700 rounded-lg px-3 py-2 gap-2">
          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input placeholder="Search…" className="bg-transparent outline-none text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 w-full" />
        </div>

        <div className="flex items-center gap-2 ml-auto">
          {/* Store badge */}
          <span className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg text-xs font-semibold text-green-700 dark:text-green-300">
            🛒 Freshmart
          </span>

          {/* Add New */}
          <button
            onClick={() => setShowAddOrder(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-xs font-bold transition-colors">
            + Add New
          </button>

          {/* POS */}
          <button
            onClick={() => showToast("Opening POS terminal…", "info")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-colors">
            🖥 POS
          </button>

          {/* Dark mode toggle
          <button
            onClick={() => setTheme(t => t === "light" ? "dark" : "light")}
            title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-600 flex items-center justify-center text-base hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button> */}

          {/* Notifications */}
          <div className="relative" ref={notifRef}>
            <button
              onClick={() => setShowNotif(o => !o)}
              className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-600 flex items-center justify-center relative hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
              🔔
              {unread > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {unread}
                </span>
              )}
            </button>
            {showNotif && (
              <div className="absolute right-0 top-12 w-80 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xl z-50 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-700">
                  <span className="font-bold text-sm text-slate-800 dark:text-slate-100">Notifications</span>
                  <button onClick={markAllRead} className="text-xs text-blue-600 hover:underline font-semibold">Mark all read</button>
                </div>
                {notifications.map(n => (
                  <div key={n.id} onClick={() => setNotifications(ns => ns.map(x => x.id === n.id ? { ...x, read: true } : x))}
                    className={`px-4 py-3 border-b border-slate-100 dark:border-slate-700 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors ${!n.read ? "bg-blue-50 dark:bg-blue-900/20" : ""}`}>
                    <p className={`text-xs ${n.read ? "text-slate-500 dark:text-slate-400" : "text-slate-800 dark:text-slate-100 font-semibold"}`}>{n.text}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{n.time}</p>
                  </div>
                ))}
                <div className="px-4 py-2 text-center">
                  <button onClick={() => { setShowNotif(false); showToast("Viewing all notifications", "info"); }}
                    className="text-xs text-blue-600 hover:underline font-semibold">View All</button>
                </div>
              </div>
            )}
          </div>

          {/* Avatar */}
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-black cursor-pointer">
            AD
          </div>
        </div>
      </header>

      {/* ── Main Content ── */}
      <main className="px-4 sm:px-6 py-6 max-w-[1400px] mx-auto space-y-6">

        {/* Page title + date */}
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-2xl font-black text-slate-900 dark:text-white">Welcome, Admin 👋</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              You have <span className="text-blue-600 font-bold">200+ Orders</span> Today
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-600 dark:text-slate-300 font-medium shadow-sm">
            📅 {dateRange}
          </div>
        </div>

        {/* Low stock alert */}
        {!alertDismissed && (
          <div className="flex items-center justify-between bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700 rounded-xl px-4 py-3">
            <p className="text-sm text-orange-700 dark:text-orange-300">
              ⚠️ Your Product <span className="font-bold">Apple iPhone 15</span> is running Low, already below 5 Pcs.{" "}
              <button className="text-blue-600 dark:text-blue-400 underline font-semibold" onClick={() => showToast("Opening stock management…", "info")}>Add Stock</button>
            </p>
            <button onClick={() => setAlertDismissed(true)} className="text-orange-400 hover:text-orange-600 text-lg ml-4 flex-shrink-0">✕</button>
          </div>
        )}

        {/* ── Stat Cards Row 1 ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Total Sales" value="$46,988,078" change="+22%" up accent="bg-gradient-to-br from-orange-400 to-orange-600" icon="💰" />
          <StatCard label="Total Sales Return" value="$16,478,145" change="-17%" up={false} accent="bg-gradient-to-br from-teal-400 to-teal-600" icon="↩️" />
          <StatCard label="Total Purchase" value="$24,145,789" change="+16%" up accent="bg-gradient-to-br from-green-400 to-green-600" icon="🛒" />
          <StatCard label="Total Purchase Return" value="$18,458,747" change="+10%" up accent="bg-gradient-to-br from-blue-500 to-blue-700" icon="🔄" />
        </div>

        {/* ── Stat Cards Row 2 ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Profit", value: "$8,458,798", change: "-10% vs Last Month", up: false },
            { label: "Invoice Due", value: "$48,988.78", change: "-35% vs Last Month", up: false },
            { label: "Total Expenses", value: "$8,980,097", change: "+61% vs Last Month", up: true },
            { label: "Total Payment Returns", value: "$78,458,798", change: "-20% vs Last Month", up: false },
          ].map(item => (
            <Card key={item.label} className="p-4">
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{item.label}</p>
              <p className="text-lg font-black text-slate-900 dark:text-white mb-1">{item.value}</p>
              <div className="flex items-center justify-between">
                <span className={`text-xs font-semibold ${item.up ? "text-green-600 dark:text-green-400" : "text-red-500 dark:text-red-400"}`}>
                  {item.up ? "▲" : "▼"} {item.change}
                </span>
                <button onClick={() => showToast(`Viewing ${item.label} details…`, "info")}
                  className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-semibold">View All</button>
              </div>
            </Card>
          ))}
        </div>

        {/* ── Charts Row ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Sales & Purchase Chart */}
          <Card className="lg:col-span-2 p-5">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <span className="text-lg">📊</span>
                <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm">Sales & Purchase</h3>
              </div>
              <div className="flex gap-1">
                {["1D","1W","1M","3M","6M","1T"].map(p => (
                  <button key={p} onClick={() => setSalesPeriod(p)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-colors ${salesPeriod === p ? "bg-blue-600 text-white" : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"}`}>
                    {p}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-4 mb-4">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Total Purchase <strong className="text-slate-800 dark:text-slate-100">3K</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-orange-400" />
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Total Sales <strong className="text-slate-800 dark:text-slate-100">1K</strong></span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={SALES_DATA} barGap={2} barCategoryGap="35%">
                <CartesianGrid strokeDasharray="3 3" stroke={theme === "dark" ? "#334155" : "#f1f5f9"} />
                <XAxis dataKey="time" tick={{ fontSize: 10, fill: theme === "dark" ? "#94a3b8" : "#94a3b8" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: theme === "dark" ? "#94a3b8" : "#94a3b8" }} axisLine={false} tickLine={false} tickFormatter={v => `${v/1000}k`} />
                <Tooltip formatter={(v: number) => [`$${v.toLocaleString()}`, ""]} contentStyle={{ borderRadius: 8, border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", background: theme === "dark" ? "#1e293b" : "#fff", color: theme === "dark" ? "#f1f5f9" : "#0f172a" }} />
                <Bar dataKey="purchase" fill="#3b82f6" radius={[4,4,0,0]} />
                <Bar dataKey="sales" fill="#fb923c" radius={[4,4,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Overall Information */}
          <Card className="p-5">
            <SectionHeader title="Overall Information" icon="🌐" />
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { label: "Suppliers", value: "6987", icon: "🏭" },
                { label: "Customer", value: "4896", icon: "👥" },
                { label: "Orders", value: "487", icon: "📦" },
              ].map(item => (
                <button key={item.label} onClick={() => showToast(`Viewing ${item.label}…`, "info")}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 dark:bg-slate-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors gap-1.5 cursor-pointer border border-transparent hover:border-blue-200 dark:hover:border-blue-700">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-lg font-black text-slate-900 dark:text-white">{item.value}</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{item.label}</span>
                </button>
              ))}
            </div>
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3">Customers Overview</p>
            <div className="flex items-center gap-4">
              <ResponsiveContainer width={100} height={100}>
                <PieChart>
                  <Pie data={[{value:55},{value:45}]} cx="50%" cy="50%" innerRadius={28} outerRadius={45} startAngle={90} endAngle={-270} dataKey="value" strokeWidth={0}>
                    <Cell fill="#2563eb" />
                    <Cell fill="#f97316" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="flex-1 space-y-2">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">5.5K First Time</span>
                    <span className="text-green-600 font-bold">+35%</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "55%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold text-orange-500">3.5K Return</span>
                    <span className="text-green-600 font-bold">+31%</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-400 rounded-full" style={{ width: "35%" }} />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* ── Top Selling + Low Stock ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Top Selling */}
          <Card className="p-5">
            <SectionHeader title="Top Selling Products" icon="🏆"
              action={<button onClick={() => showToast("Viewing all products…", "info")} className="text-xs text-blue-600 dark:text-blue-400 font-semibold hover:underline">📅 Today</button>} />
            <div className="space-y-3">
              {TOP_SELLING.map((p, i) => (
                <div key={p.name} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                  onClick={() => showToast(`Viewing ${p.name}`, "info")}>
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-white text-sm font-bold ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}>
                    {p.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate">{p.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{p.price} · {p.sales}</p>
                  </div>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${p.up ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400"}`}>
                    {p.trend}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* Low Stock */}
          <Card className="p-5">
            <SectionHeader title="Low Stock Products" icon="⚠️"
              action={<button onClick={() => showToast("Viewing all low stock items…", "info")} className="text-xs text-blue-600 dark:text-blue-400 font-semibold hover:underline">View All</button>} />
            <div className="space-y-3">
              {LOW_STOCK.map((p, i) => (
                <div key={p.id} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                  onClick={() => showToast(`Managing stock for ${p.name}`, "info")}>
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-white text-sm font-bold ${AVATAR_COLORS[(i + 3) % AVATAR_COLORS.length]}`}>
                    {p.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate">{p.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">ID: {p.id}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400 dark:text-slate-500">Instock</p>
                    <p className={`text-sm font-black ${p.instock <= 10 ? "text-red-500" : p.instock <= 15 ? "text-orange-500" : "text-green-600"}`}>{p.instock}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* ── Recent Sales ── */}
        <Card className="p-5">
          <SectionHeader title="Recent Sales" icon="🧾"
            action={
              <div className="flex gap-2">
                <button onClick={() => setShowAddOrder(true)}
                  className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg font-semibold transition-colors">
                  + Add
                </button>
                <button onClick={() => showToast("Exporting sales…", "info")}
                  className="text-xs border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 px-3 py-1.5 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  Weekly ▾
                </button>
              </div>
            } />
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100 dark:border-slate-700">
                  {["Product","Category","Date","Price","Status",""].map(h => (
                    <th key={h} className="text-left text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider py-2 pr-4 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentSales.map((s, i) => (
                  <tr key={i} className="border-b border-slate-50 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                    <td className="py-3 pr-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}>
                          {s.name[0]}
                        </div>
                        <span className="text-sm font-semibold text-slate-800 dark:text-slate-100 whitespace-nowrap">{s.name}</span>
                      </div>
                    </td>
                    <td className="py-3 pr-4 text-xs text-slate-500 dark:text-slate-400">{s.category}</td>
                    <td className="py-3 pr-4 text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">{s.date}</td>
                    <td className="py-3 pr-4 text-sm font-bold text-slate-800 dark:text-slate-100">{s.price}</td>
                    <td className="py-3 pr-4"><StatusBadge status={s.status} /></td>
                    <td className="py-3">
                      <button onClick={() => showToast(`Viewing order: ${s.name}`, "info")}
                        className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-semibold">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* ── Sales Stats + Recent Transactions ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Sales Stats */}
          <Card className="p-5">
            <SectionHeader title="Sales Statistics" icon="📈"
              action={<button onClick={() => showToast("Changing year…", "info")} className="text-xs border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">2026 ▾</button>} />
            <div className="flex gap-4 mb-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs font-bold text-green-700 dark:text-green-300">$12,189 <span className="text-green-500">+3%</span></span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Revenue</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span className="text-xs font-bold text-red-700 dark:text-red-300">$48,988,078 <span className="text-red-500">-21%</span></span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Expense</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={MONTHLY_SALES}>
                <CartesianGrid strokeDasharray="3 3" stroke={theme === "dark" ? "#334155" : "#f1f5f9"} />
                <XAxis dataKey="month" tick={{ fontSize: 10, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: "#94a3b8" }} axisLine={false} tickLine={false} tickFormatter={v => `${v/1000}k`} />
                <Tooltip formatter={(v: number) => [`$${v.toLocaleString()}`, ""]} contentStyle={{ borderRadius: 8, border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", background: theme === "dark" ? "#1e293b" : "#fff", color: theme === "dark" ? "#f1f5f9" : "#0f172a" }} />
                <Line type="monotone" dataKey="revenue" stroke="#22c55e" strokeWidth={2.5} dot={false} />
                <Line type="monotone" dataKey="expense" stroke="#ef4444" strokeWidth={2.5} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Recent Transactions */}
          <Card className="p-5">
            <SectionHeader title="Recent Transactions" icon="💳"
              action={<button onClick={() => showToast("Viewing all transactions…", "info")} className="text-xs text-blue-600 dark:text-blue-400 font-semibold hover:underline">View All</button>} />
            {/* Tabs */}
            <div className="flex gap-1 mb-4 bg-slate-100 dark:bg-slate-700 rounded-lg p-1">
              {["Sale","Purchase","Quotation","Expenses","Invoices"].map(tab => (
                <button key={tab} onClick={() => setTxTab(tab)}
                  className={`flex-1 py-1.5 rounded-md text-xs font-semibold transition-colors whitespace-nowrap ${txTab === tab ? "bg-white dark:bg-slate-600 text-blue-600 dark:text-blue-300 shadow-sm" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}`}>
                  {tab}
                </button>
              ))}
            </div>
            {/* Table header */}
            <div className="grid grid-cols-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 px-1">
              <span>Date</span><span>Customer</span><span>Status</span><span className="text-right">Total</span>
            </div>
            <div className="space-y-1">
              {TRANSACTIONS.map((t, i) => (
                <div key={i} onClick={() => showToast(`Viewing transaction from ${t.customer}`, "info")}
                  className="grid grid-cols-4 items-center px-1 py-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                  <span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">{t.date.slice(0, 6)}</span>
                  <div className="flex items-center gap-1.5">
                    <Avatar name={t.customer} color={AVATAR_COLORS[i % AVATAR_COLORS.length]} />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-slate-800 dark:text-slate-100 truncate">{t.customer.split(" ")[0]}</p>
                      <p className="text-[10px] text-slate-400">{t.id}</p>
                    </div>
                  </div>
                  <StatusBadge status={t.status} />
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-100 text-right">{t.total}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* ── Top Customers + Top Categories ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Top Customers */}
          <Card className="p-5">
            <SectionHeader title="Top Customers" icon="⭐"
              action={<button onClick={() => showToast("Viewing all customers…", "info")} className="text-xs text-blue-600 dark:text-blue-400 font-semibold hover:underline">View All</button>} />
            <div className="space-y-3">
              {TOP_CUSTOMERS.map((c, i) => (
                <div key={c.name} onClick={() => showToast(`Viewing profile: ${c.name}`, "info")}
                  className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                  <Avatar name={c.name} color={AVATAR_COLORS[i % AVATAR_COLORS.length]} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{c.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">🌍 {c.country} · {c.orders} Orders</p>
                  </div>
                  <span className="text-sm font-black text-slate-800 dark:text-white">{c.total}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Top Categories */}
          <Card className="p-5">
            <SectionHeader title="Top Categories" icon="🗂️"
              action={<button onClick={() => showToast("Changing period…", "info")} className="text-xs border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Weekly ▾</button>} />
            <div className="flex items-center gap-6">
              <ResponsiveContainer width={160} height={160}>
                <PieChart>
                  <Pie data={PIE_DATA} cx="50%" cy="50%" innerRadius={45} outerRadius={72} dataKey="value" strokeWidth={2} stroke={theme === "dark" ? "#1e293b" : "#fff"}>
                    {PIE_DATA.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                  </Pie>
                  <Tooltip formatter={(v: number) => [v, ""]} contentStyle={{ borderRadius: 8, border: "none", background: theme === "dark" ? "#1e293b" : "#fff" }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex-1 space-y-3">
                {PIE_DATA.map(cat => (
                  <div key={cat.name} className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => showToast(`Viewing ${cat.name} category`, "info")}>
                    <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: cat.color }} />
                    <div className="flex-1">
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className="text-slate-700 dark:text-slate-300">{cat.name}</span>
                        <span className="text-slate-500 dark:text-slate-400">{cat.value}</span>
                      </div>
                      <div className="h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full rounded-full transition-all" style={{ width: `${(cat.value / 1699 * 100).toFixed(0)}%`, background: cat.color }} />
                      </div>
                    </div>
                  </div>
                ))}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-700 space-y-1">
                  {[["Total Categories","698"],["Total Products","7899"]].map(([k,v]) => (
                    <div key={k} className="flex justify-between text-xs">
                      <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                        <span className="w-2 h-2 rounded-full bg-blue-500" />{k}
                      </span>
                      <span className="font-bold text-slate-800 dark:text-slate-100">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* ── Order Statistics (Heatmap-style) ── */}
        <Card className="p-5">
          <SectionHeader title="Order Statistics" icon="🗓️"
            action={<button onClick={() => showToast("Changing period…", "info")} className="text-xs border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Weekly ▾</button>} />
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={ORDER_STATS} barGap={2} barCategoryGap="20%">
              <CartesianGrid strokeDasharray="3 3" stroke={theme === "dark" ? "#334155" : "#f1f5f9"} />
              <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ borderRadius: 8, border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", background: theme === "dark" ? "#1e293b" : "#fff", color: theme === "dark" ? "#f1f5f9" : "#0f172a" }} />
              {["2am","4am","6am","8am","10am","12pm","2pm","4pm","6pm"].map((key, i) => (
                <Bar key={key} dataKey={key} stackId="a"
                  fill={i % 2 === 0 ? "#f97316" : "#fed7aa"}
                  radius={i === 8 ? [4,4,0,0] : [0,0,0,0]} />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Footer */}
        <div className="flex justify-between items-center text-xs text-slate-400 dark:text-slate-500 pt-2 border-t border-slate-200 dark:border-slate-700 flex-wrap gap-2">
          <span>2014 – 2026 © DreamsPOS. All Right Reserved</span>
          <span>Designed & Developed by <span className="text-blue-600 dark:text-blue-400 font-semibold">Dreams</span></span>
        </div>
      </main>

      {/* ── Modals ── */}
      {showAddOrder && <AddOrderModal onClose={() => setShowAddOrder(false)} onAdd={handleAddOrder} />}
      {toast && <Toast msg={toast.msg} type={toast.type} onDone={() => setToast(null)} />}
    </div>
  );
}