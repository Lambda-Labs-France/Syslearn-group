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
      return pathname === href;
    }
    if (href.startsWith("http")) {
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
          aria-label="Syslearn Group - Accueil"
        >
          <span className="header__logo-text">
            Syslearn <span>Group</span>
          </span>
        </Link>

        <nav className="header__nav" aria-label="Navigation principale">
          <ul>
            {mainNav.map((item) => {
              const hasChildren = !!(item.children && item.children.length > 0);
              const isExternal = item.isExternal || false;
              const isActiveLink = isActive(item.href);
              
              return (
                <li key={item.href} className="header__nav-item">
                  {isExternal ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={isActiveLink ? "header__nav-link--active" : ""}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={isActiveLink ? "header__nav-link--active" : ""}
                    >
                      {item.label}
                    </Link>
                  )}

                  {hasChildren && (
                    <ul className="header__submenu">
                      {item.children?.map((child) => {
                        const childIsExternal = child.isExternal || false;
                        const isChildActive = isActive(child.href);
                        
                        return (
                          <li key={child.href}>
                            {childIsExternal ? (
                              <a
                                href={child.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={isChildActive ? "header__submenu-link--active" : ""}
                              >
                                {child.label}
                              </a>
                            ) : (
                              <Link
                                href={child.href}
                                className={isChildActive ? "header__submenu-link--active" : ""}
                              >
                                {child.label}
                              </Link>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mobile-nav">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}