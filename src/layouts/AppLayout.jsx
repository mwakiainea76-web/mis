import { Bell, Menu, Search } from "lucide-react";
import { NavLink, Outlet } from "react-router";

const links = [
  { label: "Admin", to: "/admin/dashboard" },
  { label: "Trainer", to: "/trainer/dashboard" },
  { label: "Student", to: "/student/dashboard" },
];

export function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 lg:grid lg:grid-cols-[260px_1fr]">
      <aside className="flex flex-col border-r border-slate-200 bg-slate-950 px-5 py-6 text-white">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-slate-400">MAGO ERP</p>
          <h1 className="mt-2 text-2xl font-semibold">App Shell</h1>
          <p className="mt-2 text-sm text-slate-300">Sidebar placeholder for protected modules.</p>
        </div>

        <nav className="mt-8 space-y-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  "block rounded-xl px-4 py-3 text-sm transition",
                  isActive ? "bg-white text-slate-950" : "text-slate-300 hover:bg-white/10 hover:text-white",
                ].join(" ")
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="flex min-h-screen flex-col">
        <header className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <button type="button" className="rounded-lg border border-slate-200 p-2 text-slate-600">
              <Menu className="size-4" />
            </button>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Topbar</p>
              <h2 className="text-lg font-semibold">Protected Area</h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button type="button" className="rounded-lg border border-slate-200 p-2 text-slate-600">
              <Search className="size-4" />
            </button>
            <button type="button" className="rounded-lg border border-slate-200 p-2 text-slate-600">
              <Bell className="size-4" />
            </button>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
