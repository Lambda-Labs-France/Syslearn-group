"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "../../lib/navigation";
import MobileNav from "./MobileNav";
import "../../styles/accueil/header.css";

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return false;
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="header">
      <div className="header__inner">
        <Link
          href="/"
          className="header__logo"
          aria-label="Syslearn Groupe - Accueil"
        >
          <span className="header__logo-text">
            Syslearn <span>Groupe</span>
          </span>
        </Link>

        {/* Navigation Desktop */}
        <nav className="header__nav" aria-label="Navigation principale">
          <ul>
            {mainNav.map((item) => {
              const hasChildren = !!(item.children && item.children.length > 0);
              
              return (
                <li key={item.href} className="header__nav-item">
                  <Link
                    href={item.href}
                    className={isActive(item.href) ? "header__nav-link--active" : ""}
                  >
                    {item.label}
                  </Link>

                  {hasChildren && (
                    <ul className="header__submenu" aria-label={`Sous-menu ${item.label}`}>
                      {item.children?.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href}>{child.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div className="mobile-nav">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}