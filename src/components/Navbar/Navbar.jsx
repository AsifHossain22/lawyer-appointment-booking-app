import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // InitializeThemeFromLocalStorageOrSystemPreference
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  // SyncThemeAttributeOn<html>AndSaveToLocalStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-base-100/80 border-b border-base-300 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* BrandLogo */}
          <button
            onClick={() => {
              navigate('/');
              closeMenu();
            }}
            className="flex items-center gap-3 bg-transparent border-none cursor-pointer group"
          >
            <img
              src="/logo.png"
              alt="Law.BD Logo"
              className="w-10 sm:w-12 transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-base-content text-xl sm:text-2xl font-extrabold tracking-tight">
              Law<span className="text-[#0EA106]">.BD</span>
            </span>
          </button>

          {/* DesktopNavigationLinks */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-[#0EA106] font-semibold'
                    : 'text-base-content/80 hover:text-[#0EA106]'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/my-bookings"
              className={({ isActive }) =>
                `text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-[#0EA106] font-semibold'
                    : 'text-base-content/80 hover:text-[#0EA106]'
                }`
              }
            >
              My Bookings
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-[#0EA106] font-semibold'
                    : 'text-base-content/80 hover:text-[#0EA106]'
                }`
              }
            >
              Blogs
            </NavLink>
          </nav>

          {/* RightActionArea (ThemeToggleAndCTA) */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="btn btn-ghost btn-circle text-base-content"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {/* BookNowButton */}
            <button
              onClick={() => navigate('/')}
              className="btn bg-[#0EA106] text-white border border-[#0EA106] hover:bg-transparent hover:border-[#0EA106] hover:text-[#0EA106] rounded-full px-7 text-base font-semibold shadow-sm transition-all duration-300"
            >
              Book Now
            </button>
          </div>

          {/* MobileMenuAndThemeToggleButtons */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="btn btn-ghost btn-circle btn-sm text-base-content"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            {/* HamburgerButton */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn btn-ghost btn-circle text-base-content focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MobileSlideDownDrawer / DropdownMenu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-base-100 border-b border-base-300 shadow-lg ${
          isOpen ? 'max-h-96 opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={({ isActive }) =>
              `text-lg font-medium px-4 py-2 rounded-xl transition-colors ${
                isActive
                  ? 'bg-[#0EA106]/10 text-[#0EA106] font-semibold'
                  : 'text-base-content hover:bg-base-200'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/my-bookings"
            onClick={closeMenu}
            className={({ isActive }) =>
              `text-lg font-medium px-4 py-2 rounded-xl transition-colors ${
                isActive
                  ? 'bg-[#0EA106]/10 text-[#0EA106] font-semibold'
                  : 'text-base-content hover:bg-base-200'
              }`
            }
          >
            My Bookings
          </NavLink>
          <NavLink
            to="/blogs"
            onClick={closeMenu}
            className={({ isActive }) =>
              `text-lg font-medium px-4 py-2 rounded-xl transition-colors ${
                isActive
                  ? 'bg-[#0EA106]/10 text-[#0EA106] font-semibold'
                  : 'text-base-content hover:bg-base-200'
              }`
            }
          >
            Blogs
          </NavLink>

          <div className="pt-2">
            <button
              onClick={() => {
                navigate('/');
                closeMenu();
              }}
              className="w-full btn bg-[#0EA106] text-white border border-[#0EA106] hover:bg-transparent hover:text-[#0EA106] rounded-full py-3 text-base font-semibold shadow-sm transition-all duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
