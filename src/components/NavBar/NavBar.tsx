"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './NavBar.module.scss'
import Image from 'next/image';
import { CgMenuRound } from "react-icons/cg";
import { ImCancelCircle } from "react-icons/im";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  function handleOpenMenu() {
    setOpenMenu(!openMenu)
  }

  const menu = [
    {
      id: 'menu01',
      name: "Home",
      href: "/",
    },
    {
      id: 'menu02',
      name: "Skill",
      href: "#skill",
    },
    {
      id: 'menu03',
      name: "Project",
      href: "#project",
    },
    {
      id: 'menu04',
      name: "Formation",
      href: "/formation",
    },
    {
      id: 'menu05',
      name: "Contact",
      href: "/contact",
    },
  ]
  return (
    <header className={styles.header}>
      <Image
        src={'/asset/Logo.webp'}
        alt='logo-erickfabianct'
        width={150}
        height={60}
        priority={true}
        className={styles.header_logo}
      />
      <CgMenuRound
        size={40}
        className={styles.header_menu_movil}
        onClick={handleOpenMenu}
      />
      <nav className={`${styles.header_nav} ${openMenu ? styles.header_nav_open : null}`}>
        <ul>
          <ImCancelCircle
            size={40}
            className={styles.header_nav_closed}
            onClick={handleOpenMenu}
          />
          {
            menu.map((item) =>
              <li key={item.id} className={styles.header_nav__item}>
                <Link
                  href={item.href}
                >
                  {
                    item.name
                  }
                </Link>
              </li>
            )
          }
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;