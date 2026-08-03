"use client";

import { useState } from "react";
import Link from "next/link";
import { mainNav } from "../../lib/navigation";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <>
      <button
        className="mobile-nav__button"
        onClick={() => setIsOpen(true)}
        aria-label="Ouvrir le menu"
      >
        ☰
      </button>

      {isOpen && (
        <div className="mobile-nav__overlay">
          <div className="mobile-nav__menu">
            <button
              className="mobile-nav__close"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            <nav>
              <ul>
                {mainNav.map((item) => {
                  const hasChildren = !!(item.children && item.children.length > 0);
                  
                  return (
                    <li key={item.href}>
                      <div className="mobile-nav__item">
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>

                        {hasChildren && (
                          <button
                            className="mobile-nav__arrow"
                            onClick={() =>
                              setOpenSubmenu(
                                openSubmenu === item.href ? null : item.href
                              )
                            }
                          >
                            {openSubmenu === item.href ? "−" : "+"}
                          </button>
                        )}
                      </div>

                      {hasChildren && openSubmenu === item.href && (
                        <ul className="mobile-nav__submenu">
                          {item.children?.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={() => setIsOpen(false)}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}