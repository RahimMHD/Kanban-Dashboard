import { useState, useRef } from "react";

// ─── Type — matches your separeteComponent/darkmode export ───────────────────
type Theme = "light" | "dark";

interface CustomersProps {
  theme: Theme;
}

// ─── Data types ───────────────────────────────────────────────────────────────
type Tier = "VIP" | "Wholesale" | "Retail";
type Status = "Active" | "Inactive";

interface Order {
  id: string;
  date: string;
  items: number;
  total: number;
  status: "Completed" | "Processing" | "Cancelled";
}

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  tier: Tier;
  status: Status;
  totalOrders: number;
  totalSpent: number;
  joinDate: string;     // ISO yyyy-mm-dd
  lastPurchase: string; // ISO yyyy-mm-dd
  avatar: string;
  orders: Order[];
}

// ─── Seed data ────────────────────────────────────────────────────────────────
const SEED: Customer[] = [
  {
    id: "CU001", name: "Carlos Curran", email: "carlos.curran@mail.com", phone: "+1 202 555 0143",
    country: "USA", city: "New York", tier: "VIP", status: "Active",
    totalOrders: 24, totalSpent: 8964.5, joinDate: "2024-02-11", lastPurchase: "2026-06-12",
    avatar: "CC",
    orders: [
      { id: "#114589", date: "2026-06-12", items: 3, total: 560, status: "Completed" },
      { id: "#114322", date: "2026-05-02", items: 1, total: 120, status: "Completed" },
      { id: "#113980", date: "2026-04-18", items: 5, total: 980, status: "Cancelled" },
    ],
  },
  {
    id: "CU002", name: "Stan Gaunter", email: "stan.gaunter@mail.com", phone: "+971 50 555 0192",
    country: "UAE", city: "Dubai", tier: "Wholesale", status: "Active",
    totalOrders: 22, totalSpent: 16985, joinDate: "2023-11-04", lastPurchase: "2026-06-08",
    avatar: "SG",
    orders: [
      { id: "#114501", date: "2026-06-08", items: 12, total: 4200, status: "Completed" },
      { id: "#113875", date: "2026-04-21", items: 8, total: 2100, status: "Processing" },
    ],
  },
  {
    id: "CU003", name: "Richard Wilson", email: "r.wilson@mail.com", phone: "+49 30 555 0114",
    country: "Germany", city: "Berlin", tier: "Retail", status: "Inactive",
    totalOrders: 14, totalSpent: 5366, joinDate: "2024-07-19", lastPurchase: "2026-01-30",
    avatar: "RW",
    orders: [
      { id: "#110234", date: "2026-01-30", items: 2, total: 340, status: "Completed" },
    ],
  },
  {
    id: "CU004", name: "Mary Bronson", email: "mary.b@mail.com", phone: "+32 2 555 0177",
    country: "Belgium", city: "Brussels", tier: "Retail", status: "Active",
    totalOrders: 8, totalSpent: 4569, joinDate: "2025-01-22", lastPurchase: "2026-06-15",
    avatar: "MB",
    orders: [
      { id: "#114600", date: "2026-06-15", items: 1, total: 89, status: "Processing" },
      { id: "#112045", date: "2026-03-10", items: 4, total: 670, status: "Completed" },
    ],
  },
  {
    id: "CU005", name: "Annie Tremblay", email: "annie.t@mail.com", phone: "+1 514 555 0188",
    country: "Canada", city: "Montreal", tier: "VIP", status: "Active",
    totalOrders: 14, totalSpent: 3569.8, joinDate: "2024-09-05", lastPurchase: "2026-06-01",
    avatar: "AT",
    orders: [
      { id: "#114480", date: "2026-06-01", items: 2, total: 210, status: "Completed" },
    ],
  },
  {
    id: "CU006", name: "Eleanor Panek", email: "eleanor.p@mail.com", phone: "+44 20 555 0166",
    country: "UK", city: "London", tier: "Wholesale", status: "Inactive",
    totalOrders: 31, totalSpent: 22480, joinDate: "2023-05-14", lastPurchase: "2025-11-09",
    avatar: "EP",
    orders: [
      { id: "#108761", date: "2025-11-09", items: 20, total: 6100, status: "Completed" },
      { id: "#107320", date: "2025-09-02", items: 14, total: 3900, status: "Completed" },
    ],
  },
  {
    id: "CU007", name: "Gary Hennessy", email: "g.hennessy@mail.com", phone: "+353 1 555 0121",
    country: "Ireland", city: "Dublin", tier: "Retail", status: "Active",
    totalOrders: 6, totalSpent: 1280, joinDate: "2025-08-30", lastPurchase: "2026-05-28",
    avatar: "GH",
    orders: [
      { id: "#114390", date: "2026-05-28", items: 1, total: 60, status: "Completed" },
    ],
  },
];

// ─── Style maps ───────────────────────────────────────────────────────────────
const TIER_CLS: Record<Tier, string> = {
  VIP:       "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
  Wholesale: "bg-blue-100   text-blue-700   dark:bg-blue-900/40   dark:text-blue-300",
  Retail:    "bg-slate-100  text-slate-600  dark:bg-slate-700     dark:text-slate-300",
};

const STATUS_CLS: Record<Status, string> = {
  Active:   "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  Inactive: "bg-red-100   text-red-600   dark:bg-red-900/40   dark:text-red-300",
};

const ORDER_STATUS_CLS: Record<Order["status"], string> = {
  Completed:  "bg-green-100  text-green-700  dark:bg-green-900/40  dark:text-green-300",
  Processing: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  Cancelled:  "bg-red-100    text-red-600    dark:bg-red-900/40    dark:text-red-300",
};

const AVATAR_BG = [
  "bg-blue-500","bg-violet-500","bg-green-600","bg-rose-500","bg-amber-500",
  "bg-cyan-500","bg-pink-600","bg-teal-500","bg-indigo-500","bg-orange-500",
];

const fmtMoney = (n: number) =>
  `$${n.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;

const fmtDate = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-US", { day: "2-digit", month: "short", year: "numeric" });

// ─── Tiny reusable pieces ─────────────────────────────────────────────────────
function AvatarCircle({ initials, colorCls, size = 8 }: { initials: string; colorCls: string; size?: number }) {
  return (
    <div
      className={`rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 tracking-wide ${colorCls}`}
      style={{ width: size * 4, height: size * 4, fontSize: size >= 12 ? 14 : 11 }}
    >
      {initials}
    </div>
  );
}

function TierBadge({ tier }: { tier: Tier }) {
  return <span className={`text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${TIER_CLS[tier]}`}>{tier}</span>;
}

function StatusPill({
  status, onClick,
}: { status: Status; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      title="Click to toggle status"
      className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full transition-opacity hover:opacity-75 ${STATUS_CLS[status]}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${status === "Active" ? "bg-green-500" : "bg-red-500"}`} />
      {status}
    </button>
  );
}

// ─── Dropdown filter ──────────────────────────────────────────────────────────
function Dropdown({
  label, options, value, onChange,
}: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-semibold transition-colors
          ${value
            ? "border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:border-blue-600 dark:text-blue-300"
            : "border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
          }`}
      >
        {value || label}
        <span className="text-[10px] opacity-60">▼</span>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-20" onClick={() => setOpen(false)} />
          <div className="absolute top-[calc(100%+6px)] left-0 z-30 min-w-[160px] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl overflow-hidden">
            <button
              onClick={() => { onChange(""); setOpen(false); }}
              className="w-full text-left px-4 py-2.5 text-xs text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 border-b border-slate-100 dark:border-slate-700 transition-colors"
            >
              All {label}s
            </button>
            {options.map(o => (
              <button
                key={o}
                onClick={() => { onChange(o); setOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-xs transition-colors
                  ${o === value
                    ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
                  }`}
              >
                {o}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Date range filter ────────────────────────────────────────────────────────
function DateRangeFilter({
  from, to, onChange,
}: { from: string; to: string; onChange: (from: string, to: string) => void }) {
  const [open, setOpen] = useState(false);
  const active = !!(from || to);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-semibold transition-colors
          ${active
            ? "border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:border-blue-600 dark:text-blue-300"
            : "border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
          }`}
      >
        📅 {active ? `${from || "…"} → ${to || "…"}` : "Join Date"}
        <span className="text-[10px] opacity-60">▼</span>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-20" onClick={() => setOpen(false)} />
          <div className="absolute top-[calc(100%+6px)] right-0 z-30 w-64 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl p-4 space-y-3">
            <div>
              <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block mb-1">From</label>
              <input
                type="date"
                value={from}
                onChange={e => onChange(e.target.value, to)}
                className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-xs text-slate-700 dark:text-slate-200 outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block mb-1">To</label>
              <input
                type="date"
                value={to}
                onChange={e => onChange(from, e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-xs text-slate-700 dark:text-slate-200 outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex gap-2 pt-1">
              <button
                onClick={() => { onChange("", ""); }}
                className="flex-1 py-1.5 rounded-lg border border-slate-200 dark:border-slate-600 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700"
              >
                Clear
              </button>
              <button
                onClick={() => setOpen(false)}
                className="flex-1 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold"
              >
                Apply
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// ─── Add / Edit Customer Modal ─────────────────────────────────────────────────
type FormState = {
  name: string; email: string; phone: string; country: string; city: string;
  tier: Tier; status: Status;
};

const EMPTY_FORM: FormState = {
  name: "", email: "", phone: "", country: "", city: "", tier: "Retail", status: "Active",
};

function CustomerModal({
  initial, onClose, onSave,
}: {
  initial?: Customer | null;
  onClose: () => void;
  onSave: (data: FormState) => void;
}) {
  const isEdit = !!initial;
  const [form, setForm] = useState<FormState>(
    initial
      ? { name: initial.name, email: initial.email, phone: initial.phone, country: initial.country, city: initial.city, tier: initial.tier, status: initial.status }
      : EMPTY_FORM
  );
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const set = (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm(f => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim())  e.name  = "Required";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Valid email required";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.country.trim()) e.country = "Required";
    if (!form.city.trim())  e.city  = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = () => {
    if (!validate()) return;
    onSave(form);
  };

  const inputCls =
    "w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-700 text-sm text-slate-800 dark:text-slate-100 outline-none transition-colors focus:border-blue-500 dark:focus:border-blue-400";
  const labelCls = "text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1 block";

  const Field = ({ label, k, type = "text", placeholder = "" }: { label: string; k: keyof FormState; type?: string; placeholder?: string }) => (
    <div className="flex flex-col gap-1">
      <label className={labelCls}>{label}</label>
      <input
        type={type}
        placeholder={placeholder || label}
        value={form[k]}
        onChange={set(k)}
        className={`${inputCls} ${errors[k] ? "border-red-400 dark:border-red-500" : "border-slate-200 dark:border-slate-600"}`}
      />
      {errors[k] && <span className="text-[11px] text-red-500">{errors[k]}</span>}
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div
        className="bg-white dark:bg-slate-800 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-blue-50 dark:bg-blue-900/20 flex-shrink-0">
          <div>
            <h2 className="font-bold text-blue-700 dark:text-blue-300 text-base">{isEdit ? "Edit Customer" : "Add New Customer"}</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{isEdit ? "Update customer details" : "Fill in the details below"}</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xl leading-none">✕</button>
        </div>

        <div className="p-6 space-y-4 overflow-y-auto">
          <Field label="Full Name" k="name" placeholder="e.g. John Doe" />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Email" k="email" type="email" placeholder="name@mail.com" />
            <Field label="Phone" k="phone" placeholder="+1 202 555 0143" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Country" k="country" placeholder="e.g. USA" />
            <Field label="City" k="city" placeholder="e.g. New York" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className={labelCls}>Tier</label>
              <select value={form.tier} onChange={set("tier")} className={`${inputCls} border-slate-200 dark:border-slate-600 cursor-pointer`}>
                {(["Retail","Wholesale","VIP"] as Tier[]).map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className={labelCls}>Status</label>
              <select value={form.status} onChange={set("status")} className={`${inputCls} border-slate-200 dark:border-slate-600 cursor-pointer`}>
                {(["Active","Inactive"] as Status[]).map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
          </div>
        </div>

        <div className="flex gap-3 px-6 py-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 flex-shrink-0">
          <button onClick={onClose} className="flex-1 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
            Cancel
          </button>
          <button onClick={submit} className="flex-1 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition-colors flex items-center justify-center gap-1.5">
            <span className="text-base leading-none">{isEdit ? "✓" : "+"}</span> {isEdit ? "Save Changes" : "Add Customer"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Delete Confirm Modal ─────────────────────────────────────────────────────
function DeleteModal({ name, onConfirm, onClose }: { name: string; onConfirm: () => void; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white dark:bg-slate-800 rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className="p-6 text-center">
          <div className="w-14 h-14 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-2xl mx-auto mb-4">🗑️</div>
          <h3 className="text-base font-bold text-slate-800 dark:text-white mb-2">Delete Customer?</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Are you sure you want to delete <strong className="text-slate-700 dark:text-slate-200">{name}</strong>? This will permanently remove their record and order history.
          </p>
        </div>
        <div className="flex gap-3 px-6 pb-5">
          <button onClick={onClose} className="flex-1 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            Cancel
          </button>
          <button onClick={onConfirm} className="flex-1 py-2.5 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm font-bold transition-colors">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Toast ────────────────────────────────────────────────────────────────────
function Toast({ msg, type }: { msg: string; type: "success" | "info" | "error" }) {
  const colorCls = type === "success" ? "bg-green-600" : type === "error" ? "bg-red-600" : "bg-blue-600";
  return (
    <div className={`fixed bottom-6 right-6 z-[100] ${colorCls} text-white px-5 py-3 rounded-xl shadow-xl text-sm font-semibold flex items-center gap-2`}>
      <span>{type === "success" ? "✓" : type === "error" ? "✕" : "ℹ"}</span>
      {msg}
    </div>
  );
}

// ─── Expanded row detail ──────────────────────────────────────────────────────
function ExpandedDetail({ customer }: { customer: Customer }) {
  return (
    <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-100 dark:border-slate-700/60">
      <td colSpan={11} className="px-6 py-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Full details */}
          <div className="lg:col-span-1">
            <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">Customer Details</h4>
            <div className="space-y-2.5 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400 dark:text-slate-500">Email</span>
                <span className="text-slate-700 dark:text-slate-200 font-medium">{customer.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 dark:text-slate-500">Phone</span>
                <span className="text-slate-700 dark:text-slate-200 font-medium">{customer.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 dark:text-slate-500">Location</span>
                <span className="text-slate-700 dark:text-slate-200 font-medium">{customer.city}, {customer.country}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 dark:text-slate-500">Customer Since</span>
                <span className="text-slate-700 dark:text-slate-200 font-medium">{fmtDate(customer.joinDate)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 dark:text-slate-500">Last Purchase</span>
                <span className="text-slate-700 dark:text-slate-200 font-medium">{fmtDate(customer.lastPurchase)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 dark:text-slate-500">Lifetime Value</span>
                <span className="text-slate-900 dark:text-white font-bold">{fmtMoney(customer.totalSpent)}</span>
              </div>
            </div>
          </div>

          {/* Order history */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">Order History ({customer.orders.length})</h4>
            {customer.orders.length === 0 ? (
              <p className="text-sm text-slate-400 dark:text-slate-500">No orders yet.</p>
            ) : (
              <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-700/50 text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      <th className="text-left px-4 py-2 font-bold">Order ID</th>
                      <th className="text-left px-4 py-2 font-bold">Date</th>
                      <th className="text-left px-4 py-2 font-bold">Items</th>
                      <th className="text-left px-4 py-2 font-bold">Status</th>
                      <th className="text-right px-4 py-2 font-bold">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customer.orders.map(o => (
                      <tr key={o.id} className="border-t border-slate-100 dark:border-slate-700">
                        <td className="px-4 py-2.5 font-semibold text-blue-600 dark:text-blue-400">{o.id}</td>
                        <td className="px-4 py-2.5 text-slate-500 dark:text-slate-400">{fmtDate(o.date)}</td>
                        <td className="px-4 py-2.5 text-slate-600 dark:text-slate-300">{o.items}</td>
                        <td className="px-4 py-2.5">
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${ORDER_STATUS_CLS[o.status]}`}>{o.status}</span>
                        </td>
                        <td className="px-4 py-2.5 text-right font-bold text-slate-800 dark:text-slate-100">{fmtMoney(o.total)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </td>
    </tr>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Customers({ theme: _theme }: CustomersProps) {
  const [customers,    setCustomers]    = useState<Customer[]>(SEED);
  const [search,       setSearch]       = useState("");
  const [tierFilter,   setTierFilter]   = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [dateFrom,     setDateFrom]     = useState("");
  const [dateTo,       setDateTo]       = useState("");
  const [selected,     setSelected]     = useState<string[]>([]);
  const [expanded,     setExpanded]     = useState<string[]>([]);
  const [rowsPerPage,  setRowsPerPage]  = useState(10);
  const [currentPage,  setCurrentPage]  = useState(1);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editTarget,   setEditTarget]   = useState<Customer | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Customer | null>(null);
  const [toast,        setToast]        = useState<{ msg: string; type: "success" | "info" | "error" } | null>(null);
  const [spinning,     setSpinning]     = useState(false);

  const tiers = ["Retail", "Wholesale", "VIP"];
  const statuses = ["Active", "Inactive"];

  const showToast = (msg: string, type: "success" | "info" | "error" = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2800);
  };

  // ── Filter ──
  const filtered = customers.filter(c => {
    const q = search.toLowerCase();
    const matchSearch = !q ||
      c.name.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q) ||
      c.phone.toLowerCase().includes(q) ||
      c.country.toLowerCase().includes(q) ||
      c.id.toLowerCase().includes(q);
    const matchTier   = !tierFilter   || c.tier   === tierFilter;
    const matchStatus = !statusFilter || c.status === statusFilter;
    const matchDate =
      (!dateFrom || c.joinDate >= dateFrom) &&
      (!dateTo   || c.joinDate <= dateTo);
    return matchSearch && matchTier && matchStatus && matchDate;
  });

  // ── Pagination ──
  const totalPages = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
  const safePage   = Math.min(currentPage, totalPages);
  const paginated  = filtered.slice((safePage - 1) * rowsPerPage, safePage * rowsPerPage);

  // ── Select ──
  const toggleSelect = (id: string) =>
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  const toggleAll = () =>
    setSelected(selected.length === paginated.length ? [] : paginated.map(c => c.id));

  // ── Expand ──
  const toggleExpand = (id: string) =>
    setExpanded(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

  // ── Status toggle (the "checking right or false" control) ──
  const toggleStatus = (id: string) => {
    setCustomers(prev => prev.map(c =>
      c.id === id ? { ...c, status: c.status === "Active" ? "Inactive" : "Active" } : c
    ));
    showToast("Status updated", "info");
  };

  // ── Add ──
  const handleAdd = (data: FormState) => {
    const nextNum  = customers.length + 1;
    const id       = `CU${String(nextNum).padStart(3, "0")}`;
    const initials = data.name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
    const today    = new Date().toISOString().slice(0, 10);
    const newCustomer: Customer = {
      ...data, id, avatar: initials,
      totalOrders: 0, totalSpent: 0,
      joinDate: today, lastPurchase: today,
      orders: [],
    };
    setCustomers(prev => [newCustomer, ...prev]);
    setShowAddModal(false);
    showToast(`"${data.name}" added successfully`);
  };

  // ── Edit ──
  const handleEditSave = (data: FormState) => {
    if (!editTarget) return;
    setCustomers(prev => prev.map(c => c.id === editTarget.id ? { ...c, ...data } : c));
    setEditTarget(null);
    showToast(`"${data.name}" updated successfully`);
  };

  // ── Delete ──
  const confirmDelete = () => {
    if (!deleteTarget) return;
    setCustomers(prev => prev.filter(c => c.id !== deleteTarget.id));
    setSelected(prev => prev.filter(id => id !== deleteTarget.id));
    showToast(`"${deleteTarget.name}" deleted`, "error");
    setDeleteTarget(null);
  };

  const handleBulkDelete = () => {
    if (selected.length === 0) return;
    setCustomers(prev => prev.filter(c => !selected.includes(c.id)));
    showToast(`${selected.length} customer${selected.length > 1 ? "s" : ""} deleted`, "error");
    setSelected([]);
  };

  // ── Refresh ──
  const handleRefresh = () => {
    setSpinning(true);
    setSearch(""); setTierFilter(""); setStatusFilter("");
    setDateFrom(""); setDateTo("");
    setSelected([]); setCurrentPage(1);
    setTimeout(() => setSpinning(false), 600);
    showToast("Filters cleared", "info");
  };

  const handleExport = (type: "PDF" | "CSV") => showToast(`Exporting as ${type}…`, "info");

  // ── Page buttons ──
  const pageButtons = Array.from({ length: totalPages }, (_, i) => i + 1)
    .filter(p => p === 1 || p === totalPages || Math.abs(p - safePage) <= 1)
    .reduce<(number | "…")[]>((acc, p, idx, arr) => {
      if (idx > 0 && (p as number) - (arr[idx - 1] as number) > 1) acc.push("…");
      acc.push(p);
      return acc;
    }, []);

  const hasActiveFilters = search || tierFilter || statusFilter || dateFrom || dateTo;

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300 px-4 sm:px-8 py-8">

      {/* ── Page Header ── */}
      <div className="flex items-start justify-between flex-wrap gap-4 mb-7">
        <div>
          <h1 className="text-xl font-extrabold text-slate-900 dark:text-white">Customers</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Manage your customer base</p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {selected.length > 0 && (
            <button
              onClick={handleBulkDelete}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-xs font-bold hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
            >
              🗑 Delete ({selected.length})
            </button>
          )}

          <button
            title="Export PDF"
            onClick={() => handleExport("PDF")}
            className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-600 bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400 flex items-center justify-center hover:opacity-75 transition-opacity"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/>
              <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
          </button>

          <button
            title="Export CSV"
            onClick={() => handleExport("CSV")}
            className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-600 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center hover:opacity-75 transition-opacity"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/>
              <line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/>
            </svg>
          </button>

          <button
            title="Refresh / Clear filters"
            onClick={handleRefresh}
            className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-base"
          >
            <span className="inline-block transition-transform duration-500" style={{ transform: spinning ? "rotate(360deg)" : "rotate(0deg)" }}>↻</span>
          </button>

          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition-colors shadow-sm shadow-blue-200 dark:shadow-none"
          >
            <span className="text-base leading-none">+</span> Add Customer
          </button>
        </div>
      </div>

      {/* ── Table Card ── */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">

        {/* Toolbar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2 w-64">
            <svg className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              placeholder="Search name, email, phone…"
              value={search}
              onChange={e => { setSearch(e.target.value); setCurrentPage(1); }}
              className="bg-transparent outline-none text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 w-full"
            />
            {search && (
              <button onClick={() => { setSearch(""); setCurrentPage(1); }} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-base leading-none">✕</button>
            )}
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <Dropdown label="Tier"   options={tiers}    value={tierFilter}   onChange={v => { setTierFilter(v); setCurrentPage(1); }} />
            <Dropdown label="Status" options={statuses} value={statusFilter} onChange={v => { setStatusFilter(v); setCurrentPage(1); }} />
            <DateRangeFilter from={dateFrom} to={dateTo} onChange={(f, t) => { setDateFrom(f); setDateTo(t); setCurrentPage(1); }} />
            {hasActiveFilters && (
              <button
                onClick={() => { setSearch(""); setTierFilter(""); setStatusFilter(""); setDateFrom(""); setDateTo(""); setCurrentPage(1); }}
                className="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 text-xs text-red-500 dark:text-red-400 font-semibold hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
              >
                Clear ✕
              </button>
            )}
          </div>
        </div>

        {hasActiveFilters && (
          <div className="px-5 py-2 bg-blue-50 dark:bg-blue-900/20 border-b border-blue-100 dark:border-blue-800 text-xs font-semibold text-blue-700 dark:text-blue-300">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            {tierFilter   && ` · Tier: ${tierFilter}`}
            {statusFilter && ` · Status: ${statusFilter}`}
            {(dateFrom || dateTo) && ` · Joined: ${dateFrom || "…"} → ${dateTo || "…"}`}
            {search && ` · "${search}"`}
          </div>
        )}

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-700/50 border-b-2 border-slate-200 dark:border-slate-700">
                <th className="px-4 py-3 w-8"></th>
                <th className="px-4 py-3 w-10">
                  <input
                    type="checkbox"
                    checked={paginated.length > 0 && selected.length === paginated.length}
                    onChange={toggleAll}
                    className="w-4 h-4 accent-blue-600 cursor-pointer"
                  />
                </th>
                {["Customer","Contact","Location","Tier","Orders","Total Spent","Last Purchase","Joined","Status","Actions"].map(col => (
                  <th key={col} className="px-4 py-3 text-left text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider whitespace-nowrap">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {paginated.length === 0 ? (
                <tr>
                  <td colSpan={11} className="py-16 text-center text-slate-400 dark:text-slate-500">
                    <div className="text-4xl mb-3">👥</div>
                    <p className="text-sm">No customers match your filters.</p>
                  </td>
                </tr>
              ) : paginated.map((c, i) => {
                const isSelected = selected.includes(c.id);
                const isExpanded = expanded.includes(c.id);
                const avatarCls  = AVATAR_BG[i % AVATAR_BG.length];
                const rowBase    = isSelected
                  ? "bg-blue-50 dark:bg-blue-900/20"
                  : i % 2 === 0 ? "bg-white dark:bg-slate-800" : "bg-slate-50/60 dark:bg-slate-800/60";

                return (
                  <>
                    <tr
                      key={c.id}
                      className={`border-b ${isExpanded ? "border-transparent" : "border-slate-100 dark:border-slate-700/60"} hover:bg-blue-50/50 dark:hover:bg-slate-700/40 transition-colors ${rowBase}`}
                    >
                      {/* Expand toggle */}
                      <td className="px-4 py-3">
                        <button
                          onClick={() => toggleExpand(c.id)}
                          className={`w-6 h-6 rounded-md flex items-center justify-center text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 transition-transform ${isExpanded ? "rotate-90 text-blue-600 dark:text-blue-400" : ""}`}
                        >
                          ▸
                        </button>
                      </td>

                      <td className="px-4 py-3">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleSelect(c.id)}
                          className="w-4 h-4 accent-blue-600 cursor-pointer"
                        />
                      </td>

                      {/* Customer */}
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2.5">
                          <AvatarCircle initials={c.avatar} colorCls={avatarCls} />
                          <div>
                            <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 whitespace-nowrap">{c.name}</p>
                            <p className="text-[11px] text-slate-400 dark:text-slate-500">{c.id}</p>
                          </div>
                        </div>
                      </td>

                      {/* Contact */}
                      <td className="px-4 py-3">
                        <p className="text-xs text-slate-600 dark:text-slate-300 whitespace-nowrap">{c.email}</p>
                        <p className="text-[11px] text-slate-400 dark:text-slate-500">{c.phone}</p>
                      </td>

                      {/* Location */}
                      <td className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
                        🌍 {c.city}, {c.country}
                      </td>

                      {/* Tier */}
                      <td className="px-4 py-3"><TierBadge tier={c.tier} /></td>

                      {/* Orders */}
                      <td className="px-4 py-3 text-sm font-bold text-slate-700 dark:text-slate-200 text-center">{c.totalOrders}</td>

                      {/* Total Spent */}
                      <td className="px-4 py-3 text-sm font-bold text-slate-800 dark:text-slate-100 whitespace-nowrap">{fmtMoney(c.totalSpent)}</td>

                      {/* Last Purchase */}
                      <td className="px-4 py-3 text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">{fmtDate(c.lastPurchase)}</td>

                      {/* Joined */}
                      <td className="px-4 py-3 text-xs text-slate-400 dark:text-slate-500 whitespace-nowrap">{fmtDate(c.joinDate)}</td>

                      {/* Status (clickable toggle = "checking right or false") */}
                      <td className="px-4 py-3">
                        <StatusPill status={c.status} onClick={() => toggleStatus(c.id)} />
                      </td>

                      {/* Actions */}
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1.5">
                          <button
                            title="View"
                            onClick={() => toggleExpand(c.id)}
                            className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-600 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center hover:opacity-75 transition-opacity text-sm"
                          >
                            👁
                          </button>
                          <button
                            title="Edit"
                            onClick={() => setEditTarget(c)}
                            className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-600 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 flex items-center justify-center hover:opacity-75 transition-opacity text-sm"
                          >
                            ✎
                          </button>
                          <button
                            title="Delete"
                            onClick={() => setDeleteTarget(c)}
                            className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-600 bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400 flex items-center justify-center hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
                          >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
                              <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/>
                              <path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>

                    {isExpanded && <ExpandedDetail key={`${c.id}-detail`} customer={c} />}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination footer */}
        <div className="flex items-center justify-between px-5 py-3.5 border-t border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 flex-wrap gap-3">
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <span>Rows per page</span>
            <select
              value={rowsPerPage}
              onChange={e => { setRowsPerPage(Number(e.target.value)); setCurrentPage(1); }}
              className="bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 rounded-lg px-2 py-1 text-xs outline-none cursor-pointer"
            >
              {[5, 10, 25, 50].map(n => <option key={n}>{n}</option>)}
            </select>
            <span className="text-slate-400 dark:text-slate-500 text-xs">
              {filtered.length === 0 ? "0" : `${(safePage - 1) * rowsPerPage + 1}–${Math.min(safePage * rowsPerPage, filtered.length)}`} of {filtered.length}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={safePage === 1}
              className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 disabled:opacity-40 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-base"
            >‹</button>

            {pageButtons.map((p, i) =>
              p === "…" ? (
                <span key={`el-${i}`} className="px-1 text-slate-400 dark:text-slate-500 text-sm">…</span>
              ) : (
                <button
                  key={p}
                  onClick={() => setCurrentPage(p as number)}
                  className={`w-8 h-8 rounded-lg text-sm font-semibold transition-colors
                    ${safePage === p
                      ? "bg-blue-600 text-white border-none shadow-sm"
                      : "border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                    }`}
                >
                  {p}
                </button>
              )
            )}

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={safePage === totalPages}
              className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 disabled:opacity-40 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-base"
            >›</button>
          </div>
        </div>
      </div>

      {/* Page footer */}
      <div className="flex justify-between items-center mt-8 pt-4 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-400 dark:text-slate-500 flex-wrap gap-2">
        <span>2014 – 2026 © DreamsPOS. All Right Reserved</span>
        <span>Designed & Developed by <span className="text-blue-600 dark:text-blue-400 font-semibold">Dreams</span></span>
      </div>

      {/* Modals */}
      {showAddModal && (
        <CustomerModal onClose={() => setShowAddModal(false)} onSave={handleAdd} />
      )}
      {editTarget && (
        <CustomerModal initial={editTarget} onClose={() => setEditTarget(null)} onSave={handleEditSave} />
      )}
      {deleteTarget && (
        <DeleteModal name={deleteTarget.name} onConfirm={confirmDelete} onClose={() => setDeleteTarget(null)} />
      )}
      {toast && <Toast msg={toast.msg} type={toast.type} />}
    </div>
  );
}