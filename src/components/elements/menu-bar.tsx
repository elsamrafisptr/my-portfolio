"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  BriefcaseBusinessIcon,
  HomeIcon,
  LayoutDashboardIcon,
  Moon,
  NotebookTabsIcon,
  PencilIcon,
  Sun,
  UserRoundCheckIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MENU_ITEMS = [
  { href: "/", icon: HomeIcon, label: "Home" },
  { href: "/about", icon: UserRoundCheckIcon, label: "About" },
  { href: "/projects", icon: BriefcaseBusinessIcon, label: "Projects" },
  { href: "/blog", icon: PencilIcon, label: "Blog" },
  { href: "/contact", icon: NotebookTabsIcon, label: "Contact" },
  { href: "/dashboard", icon: LayoutDashboardIcon, label: "Dashboard" },
];

const MenuBar = () => {
  const pathname = usePathname();
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDarkMode = resolvedTheme === "dark";
  const toggleTheme = () => setTheme(isDarkMode ? "light" : "dark");

  return (
    <header className="fixed flex justify-between items-center bottom-8 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center p-1 bg-white border rounded-lg">
        {MENU_ITEMS.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              aria-label={label}
              className={cn(
                "group p-4 flex justify-center items-center rounded-md hover:bg-gray-100 transition-colors duration-150",
                isActive && "text-gray-800",
              )}
            >
              <Icon
                className={cn(
                  "size-5 transition-colors duration-100 group-hover:text-gray-800",
                  isActive ? "text-gray-800" : "text-gray-400",
                )}
              />
            </Link>
          );
        })}
        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className="group p-4 flex justify-center items-center rounded-md hover:bg-gray-100 transition-colors duration-150"
        >
          {isDarkMode ? (
            <Moon
              className={cn(
                "size-5 transition-colors duration-100 group-hover:text-gray-800",
                "text-gray-400",
              )}
            />
          ) : (
            <Sun
              className={cn(
                "size-5 transition-colors duration-100 group-hover:text-gray-800",
                "text-gray-400",
              )}
            />
          )}
        </button>
      </nav>
    </header>
  );
};

export default MenuBar;
