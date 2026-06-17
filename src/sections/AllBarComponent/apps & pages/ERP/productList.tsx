import { useState, useRef, type JSX } from "react";
import type { Theme } from "../../../../separeteComponent/darkmode";


// ─── Types ────────────────────────────────────────────────────────────────────
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

// ─── Seed Data ────────────────────────────────────────────────────────────────
const SEED: Product[] = [
  { id: "PT001", name: "Lenovo IdeaPad 3",    category: "Computers",   brand: "Lenovo",        price: 600, unit: "Pc", qty: 100, createdBy: "James Kirwin",    avatar: "JK" },
  { id: "PT002", name: "Beats Pro",           category: "Electronics", brand: "Beats",         price: 160, unit: "Pc", qty: 140, createdBy: "Francis Chang",   avatar: "FC" },
  { id: "PT003", name: "Nike Jordan",         category: "Shoe",        brand: "Nike",          price: 110, unit: "Pc", qty: 300, createdBy: "Antonio Engle",   avatar: "AE" },
  { id: "PT004", name: "Apple Series 5 Watch",category: "Electronics", brand: "Apple",         price: 120, unit: "Pc", qty: 450, createdBy: "Leo Kelly",       avatar: "LK" },
  { id: "PT005", name: "Amazon Echo Dot",     category: "Electronics", brand: "Amazon",        price: 80,  unit: "Pc", qty: 320, createdBy: "Annette Walker",  avatar: "AW" },
  { id: "PT006", name: "Sanford Chair Sofa",  category: "Furnitures",  brand: "Modern Wave",   price: 320, unit: "Pc", qty: 650, createdBy: "John Weaver",     avatar: "JW" },
  { id: "PT007", name: "Red Premium Satchel", category: "Bags",        brand: "Dior",          price: 60,  unit: "Pc", qty: 700, createdBy: "Gary Hennessy",   avatar: "GH" },
  { id: "PT008", name: "Iphone 14 Pro",       category: "Phone",       brand: "Apple",         price: 540, unit: "Pc", qty: 630, createdBy: "Eleanor Panek",   avatar: "EP" },
  { id: "PT009", name: "Gaming Chair",        category: "Furniture",   brand: "Arlime",        price: 200, unit: "Pc", qty: 410, createdBy: "William Levy",    avatar: "WL" },
  { id: "PT010", name: "Borealis Backpack",   category: "Bags",        brand: "The North Face",price: 45,  unit: "Pc", qty: 550, createdBy: "Charlotte Klotz", avatar: "CK" },
];

// ─── Palette ──────────────────────────────────────────────────────────────────
const C = {
  blue:       "#2563eb",
  blueSoft:   "#eff6ff",
  blueMid:    "#dbeafe",
  blueHover:  "#1d4ed8",
  red:        "#ef4444",
  redSoft:    "#fef2f2",
  green:      "#16a34a",
  greenSoft:  "#f0fdf4",
  amber:      "#d97706",
  amberSoft:  "#fffbeb",
  bg:         "#f1f5f9",
  surface:    "#ffffff",
  border:     "#e2e8f0",
  borderDark: "#cbd5e1",
  text:       "#0f172a",
  textMid:    "#475569",
  textLight:  "#94a3b8",
};

const CAT_COLORS: Record<string, { bg: string; text: string }> = {
  Computers:   { bg: "#ede9fe", text: "#7c3aed" },
  Electronics: { bg: "#fef3c7", text: "#b45309" },
  Shoe:        { bg: "#dcfce7", text: "#16a34a" },
  Furnitures:  { bg: "#fce7f3", text: "#be185d" },
  Furniture:   { bg: "#fce7f3", text: "#be185d" },
  Bags:        { bg: "#ffedd5", text: "#c2410c" },
  Phone:       { bg: "#dbeafe", text: "#1d4ed8" },
};

const AVATAR_COLORS = [
  "#2563eb","#7c3aed","#16a34a","#dc2626","#d97706",
  "#0891b2","#be185d","#059669","#9333ea","#0284c7",
];

// ─── Sub-components ───────────────────────────────────────────────────────────
function Avatar({ initials, color }: { initials: string; color: string }) {
  return (
    <div style={{
      width: 32, height: 32, borderRadius: "50%",
      background: color, color: "#fff",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 11, fontWeight: 700, flexShrink: 0, letterSpacing: "0.05em",
    }}>
      {initials}
    </div>
  );
}

function IconBtn({
  title, onClick, children, variant = "default",
}: {
  title: string; onClick?: () => void; children: React.ReactNode; variant?: "default" | "danger" | "blue";
}) {
  const bg: Record<string, string> = { default: C.surface, danger: C.redSoft, blue: C.blueSoft };
  const clr: Record<string, string> = { default: C.textMid, danger: C.red, blue: C.blue };
  return (
    <button title={title} onClick={onClick} style={{
      width: 34, height: 34, borderRadius: 8,
      border: `1px solid ${C.border}`,
      background: bg[variant], color: clr[variant],
      cursor: "pointer", display: "flex", alignItems: "center",
      justifyContent: "center", fontSize: 15, transition: "opacity .15s",
    }}
      onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
      onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
    >
      {children}
    </button>
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

  const set = (k: keyof typeof EMPTY_FORM) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e: Partial<typeof EMPTY_FORM> = {};
    if (!form.name.trim())      e.name = "Required";
    if (!form.category.trim())  e.category = "Required";
    if (!form.brand.trim())     e.brand = "Required";
    if (!form.price || isNaN(Number(form.price))) e.price = "Valid number required";
    if (!form.qty || isNaN(Number(form.qty)))     e.qty = "Valid number required";
    if (!form.createdBy.trim()) e.createdBy = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleAdd = () => {
    if (!validate()) return;
    onAdd({
      name: form.name.trim(),
      category: form.category.trim(),
      brand: form.brand.trim(),
      price: Number(form.price),
      unit: form.unit || "Pc",
      qty: Number(form.qty),
      createdBy: form.createdBy.trim(),
    });
  };

  const field = (
    label: string,
    key: keyof typeof EMPTY_FORM,
    type: string = "text",
    placeholder: string = ""
  ) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <label style={{ fontSize: 12, fontWeight: 600, color: C.textMid }}>{label}</label>
      <input
        type={type}
        placeholder={placeholder || label}
        value={form[key]}
        onChange={set(key)}
        style={{
          padding: "9px 12px", borderRadius: 8,
          border: `1.5px solid ${errors[key] ? C.red : C.border}`,
          fontSize: 13, color: C.text, background: C.bg, outline: "none",
        }}
        onFocus={e => (e.currentTarget.style.borderColor = C.blue)}
        onBlur={e => (e.currentTarget.style.borderColor = errors[key] ? C.red : C.border)}
      />
      {errors[key] && <span style={{ fontSize: 11, color: C.red }}>{errors[key]}</span>}
    </div>
  );

  const selectField = (label: string, key: keyof typeof EMPTY_FORM, options: string[]) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <label style={{ fontSize: 12, fontWeight: 600, color: C.textMid }}>{label}</label>
      <select
        value={form[key]}
        onChange={set(key)}
        style={{
          padding: "9px 12px", borderRadius: 8,
          border: `1.5px solid ${errors[key] ? C.red : C.border}`,
          fontSize: 13, color: form[key] ? C.text : C.textLight,
          background: C.surface, outline: "none", cursor: "pointer",
        }}
        onFocus={e => (e.currentTarget.style.borderColor = C.blue)}
        onBlur={e => (e.currentTarget.style.borderColor = errors[key] ? C.red : C.border)}
      >
        <option value="">Select {label}</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
        <option value="__other__">Other (type below)</option>
      </select>
      {form[key] === "__other__" && (
        <input
          placeholder={`Enter ${label.toLowerCase()}`}
          onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
          style={{
            padding: "9px 12px", borderRadius: 8,
            border: `1.5px solid ${C.border}`,
            fontSize: 13, color: C.text, background: C.bg, outline: "none",
          }}
        />
      )}
      {errors[key] && <span style={{ fontSize: 11, color: C.red }}>{errors[key]}</span>}
    </div>
  );

  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.35)",
      display: "flex", alignItems: "center", justifyContent: "center",
      zIndex: 1000, padding: 16,
    }} onClick={onClose}>
      <div style={{
        background: C.surface, borderRadius: 16, width: "100%", maxWidth: 520,
        boxShadow: "0 20px 60px rgba(0,0,0,0.18)", overflow: "hidden",
      }} onClick={e => e.stopPropagation()}>
        {/* Modal Header */}
        <div style={{
          padding: "20px 24px", borderBottom: `1px solid ${C.border}`,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          background: C.blueSoft,
        }}>
          <div>
            <h2 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: C.blue }}>Add New Product</h2>
            <p style={{ margin: "2px 0 0", fontSize: 12, color: C.textMid }}>Fill in the details below</p>
          </div>
          <button onClick={onClose} style={{
            border: "none", background: "transparent", fontSize: 20,
            color: C.textLight, cursor: "pointer", lineHeight: 1,
          }}>✕</button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {field("Product Name", "name", "text", "e.g. Macbook Pro")}
            {field("Created By", "createdBy", "text", "e.g. John Doe")}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {selectField("Category", "category", categories)}
            {selectField("Brand", "brand", brands)}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            {field("Price ($)", "price", "number", "0.00")}
            {field("Quantity", "qty", "number", "0")}
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: C.textMid }}>Unit</label>
              <select
                value={form.unit}
                onChange={set("unit")}
                style={{
                  padding: "9px 12px", borderRadius: 8,
                  border: `1.5px solid ${C.border}`,
                  fontSize: 13, color: C.text,
                  background: C.surface, outline: "none", cursor: "pointer",
                }}
              >
                {["Pc", "Box", "Kg", "L", "Set"].map(u => <option key={u}>{u}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div style={{
          padding: "16px 24px", borderTop: `1px solid ${C.border}`,
          display: "flex", justifyContent: "flex-end", gap: 10,
          background: "#fafafa",
        }}>
          <button onClick={onClose} style={{
            padding: "9px 20px", borderRadius: 8,
            border: `1.5px solid ${C.borderDark}`,
            background: C.surface, color: C.textMid,
            fontWeight: 600, fontSize: 13, cursor: "pointer",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = C.bg)}
            onMouseLeave={e => (e.currentTarget.style.background = C.surface)}
          >
            Cancel
          </button>
          <button onClick={handleAdd} style={{
            padding: "9px 24px", borderRadius: 8,
            border: "none", background: C.blue, color: "#fff",
            fontWeight: 700, fontSize: 13, cursor: "pointer",
            display: "flex", alignItems: "center", gap: 6,
          }}
            onMouseEnter={e => (e.currentTarget.style.background = C.blueHover)}
            onMouseLeave={e => (e.currentTarget.style.background = C.blue)}
          >
            <span style={{ fontSize: 16 }}>+</span> Add Product
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Delete Confirm Modal ─────────────────────────────────────────────────────
function DeleteModal({ name, onConfirm, onClose }: { name: string; onConfirm: () => void; onClose: () => void }) {
  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.35)",
      display: "flex", alignItems: "center", justifyContent: "center",
      zIndex: 1000, padding: 16,
    }} onClick={onClose}>
      <div style={{
        background: C.surface, borderRadius: 16, width: "100%", maxWidth: 380,
        boxShadow: "0 20px 60px rgba(0,0,0,0.18)", overflow: "hidden",
      }} onClick={e => e.stopPropagation()}>
        <div style={{ padding: "28px 24px", textAlign: "center" }}>
          <div style={{
            width: 56, height: 56, borderRadius: "50%", background: C.redSoft,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 26, margin: "0 auto 16px",
          }}>🗑️</div>
          <h3 style={{ margin: "0 0 8px", fontSize: 17, fontWeight: 700, color: C.text }}>Delete Product?</h3>
          <p style={{ margin: 0, fontSize: 13, color: C.textMid, lineHeight: 1.6 }}>
            Are you sure you want to delete <strong>{name}</strong>? This action cannot be undone.
          </p>
        </div>
        <div style={{
          padding: "16px 24px", borderTop: `1px solid ${C.border}`,
          display: "flex", gap: 10,
        }}>
          <button onClick={onClose} style={{
            flex: 1, padding: "10px", borderRadius: 8,
            border: `1.5px solid ${C.borderDark}`,
            background: C.surface, color: C.textMid,
            fontWeight: 600, fontSize: 13, cursor: "pointer",
          }}>Cancel</button>
          <button onClick={onConfirm} style={{
            flex: 1, padding: "10px", borderRadius: 8,
            border: "none", background: C.red, color: "#fff",
            fontWeight: 700, fontSize: 13, cursor: "pointer",
          }}>Delete</button>
        </div>
      </div>
    </div>
  );
}

// ─── Toast ────────────────────────────────────────────────────────────────────
function Toast({ msg, type }: { msg: string; type: "success" | "info" | "error" }) {
  const bg = type === "success" ? C.green : type === "error" ? C.red : C.blue;
  return (
    <div style={{
      position: "fixed", bottom: 28, right: 28,
      background: bg, color: "#fff",
      padding: "12px 20px", borderRadius: 10, fontSize: 13, fontWeight: 600,
      boxShadow: "0 4px 20px rgba(0,0,0,0.15)", zIndex: 2000,
      animation: "fadeIn 0.2s ease",
    }}>
      {type === "success" ? "✓ " : type === "error" ? "✕ " : "ℹ "}{msg}
    </div>
  );
}

// ─── Dropdown ─────────────────────────────────────────────────────────────────
function Dropdown({
  label, options, value, onChange,
}: {
  label: string; options: string[]; value: string; onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          padding: "8px 14px", borderRadius: 8,
          border: `1.5px solid ${value ? C.blue : C.border}`,
          background: value ? C.blueSoft : C.surface,
          color: value ? C.blue : C.textMid,
          fontWeight: 600, fontSize: 13, cursor: "pointer",
          display: "flex", alignItems: "center", gap: 6,
        }}
      >
        {value || label} <span style={{ fontSize: 10, opacity: 0.7 }}>▼</span>
      </button>
      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 6px)", left: 0, zIndex: 200,
          background: C.surface, border: `1px solid ${C.border}`,
          borderRadius: 10, boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          minWidth: 160, overflow: "hidden",
        }}>
          <div
            onClick={() => { onChange(""); setOpen(false); }}
            style={{
              padding: "9px 14px", fontSize: 13, color: C.textMid,
              cursor: "pointer", borderBottom: `1px solid ${C.border}`,
            }}
            onMouseEnter={e => (e.currentTarget.style.background = C.bg)}
            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
          >
            All {label}s
          </div>
          {options.map(o => (
            <div
              key={o}
              onClick={() => { onChange(o); setOpen(false); }}
              style={{
                padding: "9px 14px", fontSize: 13,
                color: o === value ? C.blue : C.text,
                background: o === value ? C.blueSoft : "transparent",
                cursor: "pointer", fontWeight: o === value ? 600 : 400,
              }}
              onMouseEnter={e => { if (o !== value) e.currentTarget.style.background = C.bg; }}
              onMouseLeave={e => { if (o !== value) e.currentTarget.style.background = "transparent"; }}
            >
              {o}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ProductList(theme: Theme) : JSX.Element {
  const [products, setProducts] = useState<Product[]>(SEED);
  const [search, setSearch]     = useState("");
  const [catFilter, setCatFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddModal, setShowAddModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<Product | null>(null);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "info" | "error" } | null>(null);
  const [spinning, setSpinning] = useState(false);

  const categories = [...new Set(products.map(p => p.category))].sort();
  const brands = [...new Set(products.map(p => p.brand))].sort();

  const showToast = (msg: string, type: "success" | "info" | "error" = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2800);
  };

  // ── Filtering ──
  const filtered = products.filter(p => {
    const q = search.toLowerCase();
    const matchSearch = !q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.id.toLowerCase().includes(q);
    const matchCat = !catFilter || p.category === catFilter;
    const matchBrand = !brandFilter || p.brand === brandFilter;
    return matchSearch && matchCat && matchBrand;
  });

  // ── Pagination ──
  const totalPages = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
  const safePage = Math.min(currentPage, totalPages);
  const paginated = filtered.slice((safePage - 1) * rowsPerPage, safePage * rowsPerPage);

  // ── Select ──
  const toggleSelect = (id: string) =>
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  const toggleAll = () =>
    setSelected(selected.length === paginated.length ? [] : paginated.map(p => p.id));

  // ── Add ──
  const handleAdd = (data: Omit<Product, "id" | "avatar">) => {
    const nextNum = products.length + 1;
    const id = `PT${String(nextNum).padStart(3, "0")}`;
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

  // ── Export stub ──
  const handleExport = (type: "PDF" | "CSV") =>
    showToast(`Exporting as ${type}…`, "info");

  return (
    <div style={{
      minHeight: "100vh", background: C.bg,
      fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
      padding: "32px 32px 48px", boxSizing: "border-box", color: C.text,
    }}>

      {/* ── Page Header ── */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "flex-start",
        marginBottom: 28, flexWrap: "wrap", gap: 16,
      }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 800, margin: 0, color: C.text }}>Product List</h1>
          <p style={{ fontSize: 13, color: C.textMid, margin: "4px 0 0" }}>Manage your products</p>
        </div>

        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          <IconBtn title="Export PDF" onClick={() => handleExport("PDF")} variant="danger">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
          </IconBtn>
          <IconBtn title="Export CSV" onClick={() => handleExport("CSV")} variant="blue">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <line x1="3" y1="9" x2="21" y2="9"/>
              <line x1="3" y1="15" x2="21" y2="15"/>
              <line x1="9" y1="3" x2="9" y2="21"/>
            </svg>
          </IconBtn>
          <IconBtn title="Refresh / Clear filters" onClick={handleRefresh}>
            <span style={{
              display: "inline-block",
              transition: "transform 0.6s",
              transform: spinning ? "rotate(360deg)" : "rotate(0deg)",
            }}>↻</span>
          </IconBtn>

          <button
            onClick={() => setShowAddModal(true)}
            style={{
              display: "flex", alignItems: "center", gap: 7,
              padding: "9px 18px", borderRadius: 8, border: "none",
              background: C.blue, color: "#fff",
              fontWeight: 700, fontSize: 13, cursor: "pointer",
              boxShadow: "0 2px 8px rgba(37,99,235,0.3)",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = C.blueHover)}
            onMouseLeave={e => (e.currentTarget.style.background = C.blue)}
          >
            <span style={{ fontSize: 18, lineHeight: 1 }}>+</span> Add Product
          </button>

          <button style={{
            display: "flex", alignItems: "center", gap: 7,
            padding: "9px 18px", borderRadius: 8,
            border: `1.5px solid ${C.blue}`,
            background: C.blueSoft, color: C.blue,
            fontWeight: 700, fontSize: 13, cursor: "pointer",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = C.blueMid)}
            onMouseLeave={e => (e.currentTarget.style.background = C.blueSoft)}
          >
            <span style={{ fontSize: 15 }}>⬇</span> Import Product
          </button>
        </div>
      </div>

      {/* ── Table Card ── */}
      <div style={{
        background: C.surface, borderRadius: 14,
        border: `1px solid ${C.border}`,
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)", overflow: "hidden",
      }}>
        {/* Toolbar */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "16px 20px", borderBottom: `1px solid ${C.border}`,
          flexWrap: "wrap", gap: 12,
        }}>
          {/* Search */}
          <div style={{
            display: "flex", alignItems: "center",
            background: C.bg, border: `1.5px solid ${C.border}`,
            borderRadius: 8, padding: "8px 14px", gap: 8, width: 260,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.textLight} strokeWidth="2.5">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              placeholder="Search by name, category, brand…"
              value={search}
              onChange={e => { setSearch(e.target.value); setCurrentPage(1); }}
              style={{
                background: "transparent", border: "none", outline: "none",
                color: C.text, fontSize: 13, width: "100%",
              }}
            />
            {search && (
              <button onClick={() => { setSearch(""); setCurrentPage(1); }} style={{
                border: "none", background: "transparent", color: C.textLight,
                cursor: "pointer", fontSize: 15, lineHeight: 1, padding: 0,
              }}>✕</button>
            )}
          </div>

          {/* Filters */}
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <Dropdown label="Category" options={categories} value={catFilter} onChange={v => { setCatFilter(v); setCurrentPage(1); }} />
            <Dropdown label="Brand" options={brands} value={brandFilter} onChange={v => { setBrandFilter(v); setCurrentPage(1); }} />
            {(catFilter || brandFilter) && (
              <button onClick={() => { setCatFilter(""); setBrandFilter(""); setCurrentPage(1); }} style={{
                padding: "7px 12px", borderRadius: 8, border: `1px solid ${C.border}`,
                background: C.surface, color: C.red, fontSize: 12, fontWeight: 600, cursor: "pointer",
              }}>
                Clear ✕
              </button>
            )}
          </div>
        </div>

        {/* Results count */}
        {(search || catFilter || brandFilter) && (
          <div style={{ padding: "8px 20px", background: C.blueSoft, fontSize: 12, color: C.blue, fontWeight: 600, borderBottom: `1px solid ${C.blueMid}` }}>
            {filtered.length} result{filtered.length !== 1 ? "s" : ""} found
            {catFilter && ` · Category: ${catFilter}`}
            {brandFilter && ` · Brand: ${brandFilter}`}
            {search && ` · "${search}"`}
          </div>
        )}

        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#f8fafc", borderBottom: `2px solid ${C.border}` }}>
                <th style={{ padding: "12px 16px", width: 40 }}>
                  <input
                    type="checkbox"
                    checked={paginated.length > 0 && selected.length === paginated.length}
                    onChange={toggleAll}
                    style={{ accentColor: C.blue, cursor: "pointer", width: 15, height: 15 }}
                  />
                </th>
                {["SKU","Product Name","Category","Brand","Price","Unit","Qty","Created By","Actions"].map(col => (
                  <th key={col} style={{
                    padding: "12px 16px", textAlign: "left",
                    fontSize: 11, fontWeight: 700, color: C.textMid,
                    textTransform: "uppercase", letterSpacing: "0.07em", whiteSpace: "nowrap",
                  }}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginated.length === 0 ? (
                <tr>
                  <td colSpan={10} style={{ padding: "48px 20px", textAlign: "center", color: C.textLight, fontSize: 14 }}>
                    <div style={{ fontSize: 40, marginBottom: 12 }}>📭</div>
                    No products match your filters.
                  </td>
                </tr>
              ) : paginated.map((product, i) => {
                const isSelected = selected.includes(product.id);
                const catStyle = CAT_COLORS[product.category] ?? { bg: "#f1f5f9", text: "#475569" };
                const avatarBg = AVATAR_COLORS[(products.indexOf(product)) % AVATAR_COLORS.length];
                return (
                  <tr key={product.id} style={{
                    borderBottom: `1px solid ${C.border}`,
                    background: isSelected ? "#eff6ff" : i % 2 === 0 ? C.surface : "#fafbfc",
                    transition: "background .1s",
                  }}
                    onMouseEnter={e => { if (!isSelected) (e.currentTarget as HTMLTableRowElement).style.background = "#f0f9ff"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLTableRowElement).style.background = isSelected ? "#eff6ff" : i % 2 === 0 ? C.surface : "#fafbfc"; }}
                  >
                    <td style={{ padding: "12px 16px" }}>
                      <input
                        type="checkbox" checked={isSelected} onChange={() => toggleSelect(product.id)}
                        style={{ accentColor: C.blue, cursor: "pointer", width: 15, height: 15 }}
                      />
                    </td>
                    <td style={{ padding: "12px 16px", fontSize: 12, color: C.blue, fontWeight: 700, whiteSpace: "nowrap" }}>
                      {product.id}
                    </td>
                    <td style={{ padding: "12px 16px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{
                          width: 34, height: 34, borderRadius: 8,
                          background: C.bg, border: `1px solid ${C.border}`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 16, flexShrink: 0,
                        }}>📦</div>
                        <span style={{ fontSize: 13, fontWeight: 600, color: C.text }}>{product.name}</span>
                      </div>
                    </td>
                    <td style={{ padding: "12px 16px" }}>
                      <span style={{
                        fontSize: 12, padding: "3px 10px", borderRadius: 20,
                        background: catStyle.bg, color: catStyle.text,
                        fontWeight: 600, whiteSpace: "nowrap",
                      }}>{product.category}</span>
                    </td>
                    <td style={{ padding: "12px 16px", fontSize: 13, color: C.textMid }}>{product.brand}</td>
                    <td style={{ padding: "12px 16px", fontSize: 13, fontWeight: 700, color: C.text, whiteSpace: "nowrap" }}>
                      ${product.price.toLocaleString()}
                    </td>
                    <td style={{ padding: "12px 16px", fontSize: 12, color: C.textLight }}>{product.unit}</td>
                    <td style={{ padding: "12px 16px" }}>
                      <span style={{
                        fontSize: 13, fontWeight: 700,
                        color: product.qty < 200 ? C.red : product.qty < 400 ? C.amber : C.green,
                      }}>{product.qty}</span>
                    </td>
                    <td style={{ padding: "12px 16px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <Avatar initials={product.avatar} color={avatarBg} />
                        <span style={{ fontSize: 13, color: C.text, whiteSpace: "nowrap" }}>{product.createdBy}</span>
                      </div>
                    </td>
                    <td style={{ padding: "12px 16px" }}>
                      <div style={{ display: "flex", gap: 6 }}>
                        <button title="View" style={{
                          width: 32, height: 32, borderRadius: 7,
                          border: `1px solid ${C.border}`,
                          background: C.blueSoft, color: C.blue,
                          cursor: "pointer", display: "flex",
                          alignItems: "center", justifyContent: "center", fontSize: 14,
                        }}>👁</button>
                        <button
                          title="Delete"
                          onClick={() => setDeleteTarget(product)}
                          style={{
                            width: 32, height: 32, borderRadius: 7,
                            border: `1px solid ${C.border}`,
                            background: C.redSoft, color: C.red,
                            cursor: "pointer", display: "flex",
                            alignItems: "center", justifyContent: "center", fontSize: 14,
                          }}
                          onMouseEnter={e => (e.currentTarget.style.background = "#fee2e2")}
                          onMouseLeave={e => (e.currentTarget.style.background = C.redSoft)}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
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
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "14px 20px", borderTop: `1px solid ${C.border}`,
          flexWrap: "wrap", gap: 12, background: "#fafafa",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: C.textMid }}>
            <span>Rows per page</span>
            <select
              value={rowsPerPage}
              onChange={e => { setRowsPerPage(Number(e.target.value)); setCurrentPage(1); }}
              style={{
                background: C.surface, border: `1px solid ${C.border}`,
                color: C.text, borderRadius: 6, padding: "4px 8px",
                fontSize: 12, cursor: "pointer", outline: "none",
              }}
            >
              {[5, 10, 25, 50].map(n => <option key={n}>{n}</option>)}
            </select>
            <span style={{ color: C.textLight }}>
              {filtered.length === 0 ? "0" : `${(safePage - 1) * rowsPerPage + 1}–${Math.min(safePage * rowsPerPage, filtered.length)}`} of {filtered.length}
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={safePage === 1}
              style={{
                width: 32, height: 32, borderRadius: 8,
                border: `1px solid ${C.border}`, background: C.surface,
                color: safePage === 1 ? C.textLight : C.textMid,
                cursor: safePage === 1 ? "default" : "pointer", fontSize: 16,
              }}
            >‹</button>
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(p => p === 1 || p === totalPages || Math.abs(p - safePage) <= 1)
              .reduce<(number | "…")[]>((acc, p, idx, arr) => {
                if (idx > 0 && (p as number) - (arr[idx - 1] as number) > 1) acc.push("…");
                acc.push(p);
                return acc;
              }, [])
              .map((p, i) =>
                p === "…" ? (
                  <span key={`ellipsis-${i}`} style={{ padding: "0 4px", color: C.textLight, fontSize: 13 }}>…</span>
                ) : (
                  <button
                    key={p}
                    onClick={() => setCurrentPage(p as number)}
                    style={{
                      width: 32, height: 32, borderRadius: 8,
                      border: safePage === p ? "none" : `1px solid ${C.border}`,
                      background: safePage === p ? C.blue : C.surface,
                      color: safePage === p ? "#fff" : C.textMid,
                      cursor: "pointer", fontSize: 13,
                      fontWeight: safePage === p ? 700 : 400,
                    }}
                  >{p}</button>
                )
              )}
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={safePage === totalPages}
              style={{
                width: 32, height: 32, borderRadius: 8,
                border: `1px solid ${C.border}`, background: C.surface,
                color: safePage === totalPages ? C.textLight : C.textMid,
                cursor: safePage === totalPages ? "default" : "pointer", fontSize: 16,
              }}
            >›</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        marginTop: 36, paddingTop: 18, borderTop: `1px solid ${C.border}`,
        display: "flex", justifyContent: "space-between",
        fontSize: 12, color: C.textLight, flexWrap: "wrap", gap: 8,
      }}>
        <span>2014 – 2026 © DreamsPOS. All Right Reserved</span>
        <span>Designed & Developed by <span style={{ color: C.blue, fontWeight: 600 }}>Dreams</span></span>
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
