"use client";

import Link from "next/link";
import { mainNav } from "../../lib/navigation";
import MobileNav from "./MobileNav";
import "../../styles/accueil/header.css";

export default function Header() {
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
              const isContact = item.label === "Contact";
              
              return (
                <li key={item.href} className="header__nav-item">
                  {isExternal ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={isContact ? "header__nav-link--contact" : ""}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={isContact ? "header__nav-link--contact" : ""}
                    >
                      {item.label}
                    </Link>
                  )}

                  {hasChildren && (
                    <ul className="header__submenu">
                      {item.children?.map((child) => {
                        const childIsExternal = child.isExternal || false;
                        
                        return (
                          <li key={child.href}>
                            {childIsExternal ? (
                              <a
                                href={child.href}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {child.label}
                              </a>
                            ) : (
                              <Link href={child.href}>{child.label}</Link>
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