import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../../public/logo.svg";

export function Header() {
  const navItems = [
    { label: "Discover", link: "/" },
    { label: "Top Picks", link: "/trends" },
  ];

  const location = useLocation();

  return (
    <header className="flex justify-between items-center px-6 py-2 gap-5 fixed z-40 bg-[var(--bg)]/20 w-full box-border rounded-bl-4xl rounded-br-4xl backdrop-blur-2xl h-16 top-0 left-0">
      <Link to={"/"}>
        <img src={logo} alt="" className="w-15 h-15" />
      </Link>
      <nav className="hidden md:flex gap-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.link;

          return (
            <Link
              to={item.link}
              key={item.label}
              className={`py-2 px-7 border border-white/20 hover:bg-[var(--accent-hover)] rounded-4xl ${
                isActive ? "bg-[var(--accent)]" : "bg-transparent"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <button className="md:hidden">
        <Menu />
      </button>
    </header>
  );
}
