import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../../public/logo.svg";
import { useEffect, useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  const navItems = [
    { label: "Discover", link: "/" },
    { label: "Top Picks", link: "/trends" },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const location = useLocation();

  return (
    <>
      <header className="flex justify-between items-center px-6 py-2 gap-5 fixed z-50 bg-[var(--bg)]/20 w-full rounded-bl-4xl rounded-br-4xl backdrop-blur-2xl h-16 top-0 left-0 border-b-1 border-white/20">
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
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </header>

      {isOpen && (
        <div className="h-screen w-screen bg-[var(--bg)]/20 fixed left-0 top-0 backdrop-blur-2xl z-40">
          <nav className="w-11/12 pt-24 flex flex-col mx-auto">
            {navItems.map((item) => {
              const isActive = location.pathname === item.link;

              return (
                <Link
                  to={item.link}
                  key={item.label}
                  className={`py-4 px-7 border mb-1 border-white/20 hover:bg-[var(--accent-hover)] ${
                    isActive ? "bg-[var(--accent)]" : "bg-transparent"
                  }`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
