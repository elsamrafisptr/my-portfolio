"use client";

import { cn } from "@/lib/utils";
import {
  BriefcaseBusinessIcon,
  HomeIcon,
  LayoutDashboardIcon,
  NotebookTabsIcon,
  PencilIcon,
  UserRoundCheckIcon,
} from "lucide-react";
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

  return (
    <header className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex gap-8 p-4 bg-white border rounded-lg">
        {MENU_ITEMS.map(({ href, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className="flex flex-col items-center gap-1"
            >
              <Icon
                className={cn(
                  "size-5 transition-colors",
                  isActive
                    ? "text-gray-800"
                    : "text-gray-400 hover:text-gray-800",
                )}
              />
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default MenuBar;
