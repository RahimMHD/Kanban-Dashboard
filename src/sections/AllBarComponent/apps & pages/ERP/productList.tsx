import { useState, useRef } from "react";

// ─── Type — matches your separeteComponent/darkmode export ───────────────────
type Theme = "light" | "dark";

interface ProductListProps {
  theme: Theme;
}

// ─── Data types ───────────────────────────────────────────────────────────────
interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  unit: string;
  qty: number;
  createdBy: string;
  avatar: string;
}

// ─── Seed data ────────────────────────────────────────────────────────────────
const SEED: Product[] = [
  { id: "PT001", name: "Lenovo IdeaPad 3",     category: "Computers",   brand: "Lenovo",         price: 600, unit: "Pc", qty: 100, createdBy: "James Kirwin",    avatar: "JK" },
  { id: "PT002", name: "Beats Pro",            category: "Electronics", brand: "Beats",          price: 160, unit: "Pc", qty: 140, createdBy: "Francis Chang",   avatar: "FC" },
  { id: "PT003", name: "Nike Jordan",          category: "Shoe",        brand: "Nike",           price: 110, unit: "Pc", qty: 300, createdBy: "Antonio Engle",   avatar: "AE" },
  { id: "PT004", name: "Apple Series 5 Watch", category: "Electronics", brand: "Apple",          price: 120, unit: "Pc", qty: 450, createdBy: "Leo Kelly",       avatar: "LK" },
  { id: "PT005", name: "Amazon Echo Dot",      category: "Electronics", brand: "Amazon",         price: 80,  unit: "Pc", qty: 320, createdBy: "Annette Walker",  avatar: "AW" },
  { id: "PT006", name: "Sanford Chair Sofa",   category: "Furnitures",  brand: "Modern Wave",    price: 320, unit: "Pc", qty: 650, createdBy: "John Weaver",     avatar: "JW" },
  { id: "PT007", name: "Red Premium Satchel",  category: "Bags",        brand: "Dior",           price: 60,  unit: "Pc", qty: 700, createdBy: "Gary Hennessy",   avatar: "GH" },
  { id: "PT008", name: "Iphone 14 Pro",        category: "Phone",       brand: "Apple",          price: 540, unit: "Pc", qty: 630, createdBy: "Eleanor Panek",   avatar: "EP" },
  { id: "PT009", name: "Gaming Chair",         category: "Furniture",   brand: "Arlime",         price: 200, unit: "Pc", qty: 410, createdBy: "William Levy",    avatar: "WL" },
  { id: "PT010", name: "Borealis Backpack",    category: "Bags",        brand: "The North Face", price: 45,  unit: "Pc", qty: 550, createdBy: "Charlotte Klotz", avatar: "CK" },
];

// ─── Category badge colours (light / dark pairs as Tailwind classes) ──────────
const CAT_CLS: Record<string, string> = {
  Computers:   "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
  Electronics: "bg-amber-100  text-amber-700  dark:bg-amber-900/40  dark:text-amber-300",
  Shoe:        "bg-green-100  text-green-700  dark:bg-green-900/40  dark:text-green-300",
  Furnitures:  "bg-pink-100   text-pink-700   dark:bg-pink-900/40   dark:text-pink-300",
  Furniture:   "bg-pink-100   text-pink-700   dark:bg-pink-900/40   dark:text-pink-300",
  Bags:        "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  Phone:       "bg-blue-100   text-blue-700   dark:bg-blue-900/40   dark:text-blue-300",
};

const AVATAR_BG = [
  "bg-blue-500","bg-violet-500","bg-green-600","bg-rose-500","bg-amber-500",
  "bg-cyan-500","bg-pink-600","bg-teal-500","bg-indigo-500","bg-orange-500",
];

// ─── Tiny reusable pieces ─────────────────────────────────────────────────────
function AvatarCircle({ initials, colorCls }: { initials: string; colorCls: string }) {
  return (
    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 tracking-wide ${colorCls}`}>
      {initials}
    </div>
  );
}

function QtyBadge({ qty }: { qty: number }) {
  const cls =
    qty < 200 ? "text-red-500 dark:text-red-400" :
    qty < 400 ? "text-amber-600 dark:text-amber-400" :
                "text-green-600 dark:text-green-400";
  return <span className={`text-sm font-black ${cls}`}>{qty}</span>;
}

// ─── Dropdown filter ──────────────────────────────────────────────────────────
function Dropdown({
  label, options, value, onChange,
}: {
  label: string; options: string[]; value: string; onChange: (v: string) => void;
}) {
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
      )}
    </div>
  );
}

// ─── Add Product Modal ────────────────────────────────────────────────────────
const EMPTY_FORM = { name: "", category: "", brand: "", price: "", unit: "Pc", qty: "", createdBy: "" };

function AddProductModal({
  onAdd, onClose, categories, brands,
}: {
  onAdd: (p: Omit<Product, "id" | "avatar">) => void;
  onClose: () => void;
  categories: string[];
  brands: string[];
}) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<typeof EMPTY_FORM>>({});

  const set = (k: keyof typeof EMPTY_FORM) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm(f => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e: Partial<typeof EMPTY_FORM> = {};
    if (!form.name.trim())                         e.name      = "Required";
    if (!form.category.trim())                     e.category  = "Required";
    if (!form.brand.trim())                        e.brand     = "Required";
    if (!form.price || isNaN(Number(form.price)))  e.price     = "Valid number required";
    if (!form.qty   || isNaN(Number(form.qty)))    e.qty       = "Valid number required";
    if (!form.createdBy.trim())                    e.createdBy = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleAdd = () => {
    if (!validate()) return;
    onAdd({
      name:      form.name.trim(),
      category:  form.category === "__other__" ? "" : form.category.trim(),
      brand:     form.brand    === "__other__" ? "" : form.brand.trim(),
      price:     Number(form.price),
      unit:      form.unit || "Pc",
      qty:       Number(form.qty),
      createdBy: form.createdBy.trim(),
    });
  };

  const inputCls =
    "w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-700 " +
    "text-sm text-slate-800 dark:text-slate-100 outline-none transition-colors " +
    "focus:border-blue-500 dark:focus:border-blue-400 ";

  const labelCls = "text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1 block";

  const Field = ({ label, k, type = "text", placeholder = "" }: { label: string; k: keyof typeof EMPTY_FORM; type?: string; placeholder?: string }) => (
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

  const SelectField = ({ label, k, options }: { label: string; k: keyof typeof EMPTY_FORM; options: string[] }) => (
    <div className="flex flex-col gap-1">
      <label className={labelCls}>{label}</label>
      <select
        value={form[k]}
        onChange={set(k)}
        className={`${inputCls} cursor-pointer ${errors[k] ? "border-red-400 dark:border-red-500" : "border-slate-200 dark:border-slate-600"}`}
      >
        <option value="">Select {label}</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
        <option value="__other__">Other…</option>
      </select>
      {form[k] === "__other__" && (
        <input
          placeholder={`Type ${label.toLowerCase()}`}
          onChange={e => setForm(f => ({ ...f, [k]: e.target.value }))}
          className={`${inputCls} border-slate-200 dark:border-slate-600 mt-1`}
        />
      )}
      {errors[k] && <span className="text-[11px] text-red-500">{errors[k]}</span>}
    </div>
  );

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-800 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-blue-50 dark:bg-blue-900/20">
          <div>
            <h2 className="font-bold text-blue-700 dark:text-blue-300 text-base">Add New Product</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Fill in the details below</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xl leading-none">✕</button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Field label="Product Name" k="name" placeholder="e.g. MacBook Pro" />
            <Field label="Created By"   k="createdBy" placeholder="e.g. John Doe" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <SelectField label="Category" k="category" options={categories} />
            <SelectField label="Brand"    k="brand"    options={brands} />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Field label="Price ($)"  k="price" type="number" placeholder="0.00" />
            <Field label="Quantity"   k="qty"   type="number" placeholder="0" />
            <div className="flex flex-col gap-1">
              <label className={labelCls}>Unit</label>
              <select
                value={form.unit}
                onChange={set("unit")}
                className={`${inputCls} border-slate-200 dark:border-slate-600 cursor-pointer`}
              >
                {["Pc","Box","Kg","L","Set"].map(u => <option key={u}>{u}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 px-6 py-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            className="flex-1 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition-colors flex items-center justify-center gap-1.5"
          >
            <span className="text-base leading-none">+</span> Add Product
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Delete Confirm Modal ─────────────────────────────────────────────────────
function DeleteModal({ name, onConfirm, onClose }: { name: string; onConfirm: () => void; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-800 rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6 text-center">
          <div className="w-14 h-14 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-2xl mx-auto mb-4">🗑️</div>
          <h3 className="text-base font-bold text-slate-800 dark:text-white mb-2">Delete Product?</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Are you sure you want to delete <strong className="text-slate-700 dark:text-slate-200">{name}</strong>?
            This action cannot be undone.
          </p>
        </div>
        <div className="flex gap-3 px-6 pb-5">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-2.5 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm font-bold transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Toast ────────────────────────────────────────────────────────────────────
function Toast({ msg, type }: { msg: string; type: "success" | "info" | "error" }) {
  const colorCls =
    type === "success" ? "bg-green-600" :
    type === "error"   ? "bg-red-600"   : "bg-blue-600";
  return (
    <div className={`fixed bottom-6 right-6 z-[100] ${colorCls} text-white px-5 py-3 rounded-xl shadow-xl text-sm font-semibold flex items-center gap-2`}>
      <span>{type === "success" ? "✓" : type === "error" ? "✕" : "ℹ"}</span>
      {msg}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
// Receives `theme` as a prop from your parent darkmode component.
// The parent owns the `dark` class on <html>; this component reads the value
// only so it can be passed to any imperative APIs if needed in future.
export default function ProductList({ theme: _theme }: ProductListProps) {
  const [products,     setProducts]     = useState<Product[]>(SEED);
  const [search,       setSearch]       = useState("");
  const [catFilter,    setCatFilter]    = useState("");
  const [brandFilter,  setBrandFilter]  = useState("");
  const [selected,     setSelected]     = useState<string[]>([]);
  const [rowsPerPage,  setRowsPerPage]  = useState(10);
  const [currentPage,  setCurrentPage]  = useState(1);
  const [showAddModal, setShowAddModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<Product | null>(null);
  const [toast,        setToast]        = useState<{ msg: string; type: "success" | "info" | "error" } | null>(null);
  const [spinning,     setSpinning]     = useState(false);

  const categories = [...new Set(products.map(p => p.category))].sort();
  const brands     = [...new Set(products.map(p => p.brand))].sort();

  const showToast = (msg: string, type: "success" | "info" | "error" = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2800);
  };

  // ── Filter ──
  const filtered = products.filter(p => {
    const q = search.toLowerCase();
    return (
      (!q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.id.toLowerCase().includes(q)) &&
      (!catFilter   || p.category === catFilter) &&
      (!brandFilter || p.brand    === brandFilter)
    );
  });

  // ── Pagination ──
  const totalPages = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
  const safePage   = Math.min(currentPage, totalPages);
  const paginated  = filtered.slice((safePage - 1) * rowsPerPage, safePage * rowsPerPage);

  // ── Select ──
  const toggleSelect = (id: string) =>
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  const toggleAll = () =>
    setSelected(selected.length === paginated.length ? [] : paginated.map(p => p.id));

  // ── Add ──
  const handleAdd = (data: Omit<Product, "id" | "avatar">) => {
    const nextNum  = products.length + 1;
    const id       = `PT${String(nextNum).padStart(3, "0")}`;
    const initials = data.createdBy.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
    setProducts(prev => [...prev, { ...data, id, avatar: initials }]);
    setShowAddModal(false);
    showToast(`"${data.name}" added successfully`);
  };

  // ── Delete ──
  const confirmDelete = () => {
    if (!deleteTarget) return;
    setProducts(prev => prev.filter(p => p.id !== deleteTarget.id));
    setSelected(prev => prev.filter(id => id !== deleteTarget.id));
    showToast(`"${deleteTarget.name}" deleted`, "error");
    setDeleteTarget(null);
  };

  // ── Refresh ──
  const handleRefresh = () => {
    setSpinning(true);
    setSearch(""); setCatFilter(""); setBrandFilter("");
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

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300 px-4 sm:px-8 py-8">

      {/* ── Page Header ── */}
      <div className="flex items-start justify-between flex-wrap gap-4 mb-7">
        <div>
          <h1 className="text-xl font-extrabold text-slate-900 dark:text-white">Product List</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Manage your products</p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* PDF */}
          <button
            title="Export PDF"
            onClick={() => handleExport("PDF")}
            className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-600 bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400 flex items-center justify-center hover:opacity-75 transition-opacity"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
          </button>

          {/* CSV */}
          <button
            title="Export CSV"
            onClick={() => handleExport("CSV")}
            className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-600 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center hover:opacity-75 transition-opacity"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <line x1="3" y1="9" x2="21" y2="9"/>
              <line x1="3" y1="15" x2="21" y2="15"/>
              <line x1="9" y1="3" x2="9" y2="21"/>
            </svg>
          </button>

          {/* Refresh */}
          <button
            title="Refresh / Clear filters"
            onClick={handleRefresh}
            className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-base"
          >
            <span
              className="inline-block transition-transform duration-500"
              style={{ transform: spinning ? "rotate(360deg)" : "rotate(0deg)" }}
            >↻</span>
          </button>

          {/* Add Product */}
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition-colors shadow-sm shadow-blue-200 dark:shadow-none"
          >
            <span className="text-base leading-none">+</span> Add Product
          </button>

          {/* Import */}
          <button
            onClick={() => showToast("Import feature coming soon…", "info")}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-blue-500 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-bold transition-colors hover:bg-blue-100 dark:hover:bg-blue-900/40"
          >
            <span className="text-sm">⬇</span> Import Product
          </button>
        </div>
      </div>

      {/* ── Table Card ── */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">

        {/* Toolbar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex-wrap gap-3">
          {/* Search */}
          <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2 w-64">
            <svg className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              placeholder="Search name, category, brand…"
              value={search}
              onChange={e => { setSearch(e.target.value); setCurrentPage(1); }}
              className="bg-transparent outline-none text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 w-full"
            />
            {search && (
              <button onClick={() => { setSearch(""); setCurrentPage(1); }} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-base leading-none">✕</button>
            )}
          </div>

          {/* Dropdowns */}
          <div className="flex items-center gap-2">
            <Dropdown label="Category" options={categories} value={catFilter} onChange={v => { setCatFilter(v); setCurrentPage(1); }} />
            <Dropdown label="Brand"    options={brands}    value={brandFilter} onChange={v => { setBrandFilter(v); setCurrentPage(1); }} />
            {(catFilter || brandFilter) && (
              <button
                onClick={() => { setCatFilter(""); setBrandFilter(""); setCurrentPage(1); }}
                className="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 text-xs text-red-500 dark:text-red-400 font-semibold hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
              >
                Clear ✕
              </button>
            )}
          </div>
        </div>

        {/* Active filter banner */}
        {(search || catFilter || brandFilter) && (
          <div className="px-5 py-2 bg-blue-50 dark:bg-blue-900/20 border-b border-blue-100 dark:border-blue-800 text-xs font-semibold text-blue-700 dark:text-blue-300">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            {catFilter   && ` · Category: ${catFilter}`}
            {brandFilter && ` · Brand: ${brandFilter}`}
            {search      && ` · "${search}"`}
          </div>
        )}

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-700/50 border-b-2 border-slate-200 dark:border-slate-700">
                <th className="px-4 py-3 w-10">
                  <input
                    type="checkbox"
                    checked={paginated.length > 0 && selected.length === paginated.length}
                    onChange={toggleAll}
                    className="w-4 h-4 accent-blue-600 cursor-pointer"
                  />
                </th>
                {["SKU","Product Name","Category","Brand","Price","Unit","Qty","Created By","Actions"].map(col => (
                  <th key={col} className="px-4 py-3 text-left text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider whitespace-nowrap">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {paginated.length === 0 ? (
                <tr>
                  <td colSpan={10} className="py-16 text-center text-slate-400 dark:text-slate-500">
                    <div className="text-4xl mb-3">📭</div>
                    <p className="text-sm">No products match your filters.</p>
                  </td>
                </tr>
              ) : paginated.map((product, i) => {
                const isSelected  = selected.includes(product.id);
                const catCls      = CAT_CLS[product.category] ?? "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300";
                const avatarCls   = AVATAR_BG[products.indexOf(product) % AVATAR_BG.length];
                const rowBase     = isSelected
                  ? "bg-blue-50 dark:bg-blue-900/20"
                  : i % 2 === 0
                    ? "bg-white dark:bg-slate-800"
                    : "bg-slate-50/60 dark:bg-slate-800/60";

                return (
                  <tr
                    key={product.id}
                    className={`border-b border-slate-100 dark:border-slate-700/60 hover:bg-blue-50/50 dark:hover:bg-slate-700/40 transition-colors ${rowBase}`}
                  >
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleSelect(product.id)}
                        className="w-4 h-4 accent-blue-600 cursor-pointer"
                      />
                    </td>

                    {/* SKU */}
                    <td className="px-4 py-3 text-xs font-bold text-blue-600 dark:text-blue-400 whitespace-nowrap">
                      {product.id}
                    </td>

                    {/* Name */}
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-base flex-shrink-0">
                          📦
                        </div>
                        <span className="text-sm font-semibold text-slate-800 dark:text-slate-100 whitespace-nowrap">{product.name}</span>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="px-4 py-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${catCls}`}>
                        {product.category}
                      </span>
                    </td>

                    {/* Brand */}
                    <td className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400">{product.brand}</td>

                    {/* Price */}
                    <td className="px-4 py-3 text-sm font-bold text-slate-800 dark:text-slate-100 whitespace-nowrap">
                      ${product.price.toLocaleString()}
                    </td>

                    {/* Unit */}
                    <td className="px-4 py-3 text-xs text-slate-400 dark:text-slate-500">{product.unit}</td>

                    {/* Qty */}
                    <td className="px-4 py-3">
                      <QtyBadge qty={product.qty} />
                    </td>

                    {/* Created By */}
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <AvatarCircle initials={product.avatar} colorCls={avatarCls} />
                        <span className="text-sm text-slate-700 dark:text-slate-300 whitespace-nowrap">{product.createdBy}</span>
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        {/* View */}
                        <button
                          title="View"
                          onClick={() => showToast(`Viewing ${product.name}`, "info")}
                          className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-600 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center hover:opacity-75 transition-opacity text-sm"
                        >
                          👁
                        </button>

                        {/* Delete */}
                        <button
                          title="Delete"
                          onClick={() => setDeleteTarget(product)}
                          className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-600 bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400 flex items-center justify-center hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
                        >
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
                            <polyline points="3 6 5 6 21 6"/>
                            <path d="M19 6l-1 14H6L5 6"/>
                            <path d="M10 11v6M14 11v6"/>
                            <path d="M9 6V4h6v2"/>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination footer */}
        <div className="flex items-center justify-between px-5 py-3.5 border-t border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 flex-wrap gap-3">
          {/* Rows per page + count */}
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
              {filtered.length === 0
                ? "0"
                : `${(safePage - 1) * rowsPerPage + 1}–${Math.min(safePage * rowsPerPage, filtered.length)}`
              } of {filtered.length}
            </span>
          </div>

          {/* Page buttons */}
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
        <AddProductModal
          onAdd={handleAdd}
          onClose={() => setShowAddModal(false)}
          categories={categories}
          brands={brands}
        />
      )}
      {deleteTarget && (
        <DeleteModal
          name={deleteTarget.name}
          onConfirm={confirmDelete}
          onClose={() => setDeleteTarget(null)}
        />
      )}
      {toast && <Toast msg={toast.msg} type={toast.type} />}
    </div>
  );
}