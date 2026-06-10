import { useState } from "react";

const products = [
  { id: "PT001", name: "Lenovo IdeaPad 3", category: "Computers", brand: "Lenovo", price: 600, unit: "Pc", qty: 100, createdBy: "James Kirwin", avatar: "JK" },
  { id: "PT002", name: "Beats Pro", category: "Electronics", brand: "Beats", price: 160, unit: "Pc", qty: 140, createdBy: "Francis Chang", avatar: "FC" },
  { id: "PT003", name: "Nike Jordan", category: "Shoe", brand: "Nike", price: 110, unit: "Pc", qty: 300, createdBy: "Antonio Engle", avatar: "AE" },
  { id: "PT004", name: "Apple Series 5 Watch", category: "Electronics", brand: "Apple", price: 120, unit: "Pc", qty: 450, createdBy: "Leo Kelly", avatar: "LK" },
  { id: "PT005", name: "Amazon Echo Dot", category: "Electronics", brand: "Amazon", price: 80, unit: "Pc", qty: 320, createdBy: "Annette Walker", avatar: "AW" },
  { id: "PT006", name: "Sanford Chair Sofa", category: "Furnitures", brand: "Modern Wave", price: 320, unit: "Pc", qty: 650, createdBy: "John Weaver", avatar: "JW" },
  { id: "PT007", name: "Red Premium Satchel", category: "Bags", brand: "Dior", price: 60, unit: "Pc", qty: 700, createdBy: "Gary Hennessy", avatar: "GH" },
  { id: "PT008", name: "Iphone 14 Pro", category: "Phone", brand: "Apple", price: 540, unit: "Pc", qty: 630, createdBy: "Eleanor Panek", avatar: "EP" },
  { id: "PT009", name: "Gaming Chair", category: "Furniture", brand: "Arlime", price: 200, unit: "Pc", qty: 410, createdBy: "William Levy", avatar: "WL" },
  { id: "PT010", name: "Borealis Backpack", category: "Bags", brand: "The North Face", price: 45, unit: "Pc", qty: 550, createdBy: "Charlotte Klotz", avatar: "CK" },
];

const categoryColors: Record<string, string> = {
  Computers: "#6366f1",
  Electronics: "#f59e0b",
  Shoe: "#10b981",
  Furnitures: "#8b5cf6",
  Furniture: "#8b5cf6",
  Bags: "#ec4899",
  Phone: "#3b82f6",
};

function AvatarBadge({ initials, color }: { initials: string; color: string }) {
  return (
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        background: color,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 11,
        fontWeight: 700,
        flexShrink: 0,
        letterSpacing: "0.05em",
      }}
    >
      {initials}
    </div>
  );
}

const avatarColors = [
  "#6366f1", "#f59e0b", "#10b981", "#ec4899", "#3b82f6",
  "#8b5cf6", "#14b8a6", "#f97316", "#06b6d4", "#a855f7",
];

export default function ProductList() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase())
  );

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (selected.length === filtered.length) {
      setSelected([]);
    } else {
      setSelected(filtered.map((p) => p.id));
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f1117",
        color: "#e2e8f0",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        padding: "32px 32px 48px",
        boxSizing: "border-box",
      }}
    >
      {/* Page Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 28,
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 700, margin: 0, color: "#f1f5f9" }}>
            Product List
          </h1>
          <p style={{ fontSize: 13, color: "#64748b", margin: "4px 0 0" }}>
            Manage your products
          </p>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {/* PDF/Excel/Refresh icons */}
          {[
            { bg: "#ef4444", label: "PDF", icon: "📄" },
            { bg: "#22c55e", label: "XLS", icon: "📊" },
          ].map((btn) => (
            <button
              key={btn.label}
              title={btn.label}
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                border: "none",
                background: btn.bg,
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
              }}
            >
              {btn.icon}
            </button>
          ))}
          <button
            title="Refresh"
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              border: "1px solid #1e293b",
              background: "#1a1f2e",
              color: "#94a3b8",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
            }}
          >
            ↻
          </button>
          <button
            title="Collapse"
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              border: "1px solid #1e293b",
              background: "#1a1f2e",
              color: "#94a3b8",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
            }}
          >
            ∧
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              padding: "9px 18px",
              borderRadius: 8,
              border: "none",
              background: "#f97316",
              color: "#fff",
              fontWeight: 600,
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: 16 }}>⊕</span> Add Product
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              padding: "9px 18px",
              borderRadius: 8,
              border: "none",
              background: "#1e3a5f",
              color: "#60a5fa",
              fontWeight: 600,
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: 15 }}>⬇</span> Import Product
          </button>
        </div>
      </div>

      {/* Table Card */}
      <div
        style={{
          background: "#161b27",
          borderRadius: 14,
          border: "1px solid #1e293b",
          overflow: "hidden",
        }}
      >
        {/* Toolbar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "18px 20px",
            borderBottom: "1px solid #1e293b",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#0f1117",
              border: "1px solid #1e293b",
              borderRadius: 8,
              padding: "8px 14px",
              gap: 8,
              width: 260,
            }}
          >
            <span style={{ color: "#475569", fontSize: 14 }}>🔍</span>
            <input
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#e2e8f0",
                fontSize: 13,
                width: "100%",
              }}
            />
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            {["Category", "Brand"].map((label) => (
              <button
                key={label}
                style={{
                  padding: "8px 16px",
                  borderRadius: 8,
                  border: "1px solid #1e293b",
                  background: "#1a1f2e",
                  color: "#94a3b8",
                  fontSize: 13,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                {label} <span style={{ fontSize: 10 }}>▼</span>
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#0f1117" }}>
                <th style={{ padding: "13px 16px", width: 40, textAlign: "center" }}>
                  <input
                    type="checkbox"
                    checked={selected.length === filtered.length && filtered.length > 0}
                    onChange={toggleAll}
                    style={{ accentColor: "#f97316", cursor: "pointer" }}
                  />
                </th>
                {["SKU", "Product Name", "Category", "Brand", "Price", "Unit", "Qty", "Created By", ""].map(
                  (col) => (
                    <th
                      key={col}
                      style={{
                        padding: "13px 16px",
                        textAlign: "left",
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#64748b",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {col}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {filtered.map((product, i) => {
                const isSelected = selected.includes(product.id);
                const catColor = categoryColors[product.category] ?? "#64748b";
                const avatarBg = avatarColors[i % avatarColors.length];
                return (
                  <tr
                    key={product.id}
                    style={{
                      borderTop: "1px solid #1a2035",
                      background: isSelected ? "#1a2540" : "transparent",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected)
                        (e.currentTarget as HTMLTableRowElement).style.background = "#181e2e";
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected)
                        (e.currentTarget as HTMLTableRowElement).style.background = "transparent";
                    }}
                  >
                    <td style={{ padding: "13px 16px", textAlign: "center" }}>
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleSelect(product.id)}
                        style={{ accentColor: "#f97316", cursor: "pointer" }}
                      />
                    </td>
                    <td
                      style={{
                        padding: "13px 16px",
                        fontSize: 12,
                        color: "#f97316",
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {product.id}
                    </td>
                    <td style={{ padding: "13px 16px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div
                          style={{
                            width: 34,
                            height: 34,
                            borderRadius: 8,
                            background: "#1e293b",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 16,
                            flexShrink: 0,
                          }}
                        >
                          📦
                        </div>
                        <span style={{ fontSize: 13, fontWeight: 500, color: "#e2e8f0" }}>
                          {product.name}
                        </span>
                      </div>
                    </td>
                    <td style={{ padding: "13px 16px" }}>
                      <span
                        style={{
                          fontSize: 12,
                          padding: "3px 10px",
                          borderRadius: 20,
                          background: catColor + "22",
                          color: catColor,
                          fontWeight: 500,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {product.category}
                      </span>
                    </td>
                    <td
                      style={{
                        padding: "13px 16px",
                        fontSize: 13,
                        color: "#94a3b8",
                      }}
                    >
                      {product.brand}
                    </td>
                    <td
                      style={{
                        padding: "13px 16px",
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#f1f5f9",
                        whiteSpace: "nowrap",
                      }}
                    >
                      ${product.price.toLocaleString()}
                    </td>
                    <td
                      style={{
                        padding: "13px 16px",
                        fontSize: 12,
                        color: "#64748b",
                      }}
                    >
                      {product.unit}
                    </td>
                    <td style={{ padding: "13px 16px" }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color:
                            product.qty < 200
                              ? "#f87171"
                              : product.qty < 400
                              ? "#fbbf24"
                              : "#34d399",
                        }}
                      >
                        {product.qty}
                      </span>
                    </td>
                    <td style={{ padding: "13px 16px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <AvatarBadge initials={product.avatar} color={avatarBg} />
                        <span style={{ fontSize: 13, color: "#cbd5e1", whiteSpace: "nowrap" }}>
                          {product.createdBy}
                        </span>
                      </div>
                    </td>
                    <td style={{ padding: "13px 16px" }}>
                      <button
                        title="View"
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: 8,
                          border: "1px solid #1e293b",
                          background: "#1a1f2e",
                          color: "#64748b",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 14,
                        }}
                      >
                        👁
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer Pagination */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "14px 20px",
            borderTop: "1px solid #1e293b",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#64748b" }}>
            Row Per Page
            <select
              style={{
                background: "#1a1f2e",
                border: "1px solid #1e293b",
                color: "#e2e8f0",
                borderRadius: 6,
                padding: "4px 8px",
                fontSize: 12,
                cursor: "pointer",
              }}
            >
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            Entries
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                border: "1px solid #1e293b",
                background: "#1a1f2e",
                color: "#64748b",
                cursor: "pointer",
                fontSize: 14,
              }}
            >
              ‹
            </button>
            {[1, 2].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  border: currentPage === page ? "none" : "1px solid #1e293b",
                  background: currentPage === page ? "#f97316" : "#1a1f2e",
                  color: currentPage === page ? "#fff" : "#64748b",
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: currentPage === page ? 700 : 400,
                }}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(2, p + 1))}
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                border: "1px solid #1e293b",
                background: "#1a1f2e",
                color: "#64748b",
                cursor: "pointer",
                fontSize: 14,
              }}
            >
              ›
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: 40,
          paddingTop: 20,
          borderTop: "1px solid #1e293b",
          display: "flex",
          justifyContent: "space-between",
          fontSize: 12,
          color: "#475569",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <span>2014 – 2026 © DreamsPOS. All Right Reserved</span>
        <span>
          Designed & Developed by{" "}
          <span style={{ color: "#f97316", fontWeight: 600 }}>Dreams</span>
        </span>
      </div>
    </div>
  );
}
