'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavLinks({ footer }: { footer?: boolean }) {
  const pathname = usePathname();

  const links = [
    { href: '/', name: 'Home' },
    { href: '/headphones', name: 'Headphones' },
    { href: '/speakers', name: 'Speakers' },
    { href: '/earphones', name: 'Earphones' },
  ];

  return (
    <nav
      className={`${
        footer ? 'flex' : 'hidden'
      } md:flex items-center uppercase text-white space-x-6 tracking-widest text-[0.95rem]`}
    >
      {links.map((link) => (
        <NavLink
          key={link.href}
          href={link.href}
          name={link.name}
          pathname={pathname}
        />
      ))}
    </nav>
  );
}

function NavLink({
  href,
  name,
  pathname,
}: {
  href: string;
  name: string;
  pathname: string;
}) {
  return (
    <Link
      className={
        'hover:text-orange transition-all duration-300' +
        (pathname === href ? ' text-orange' : '')
      }
      href={href}
    >
      {name}
    </Link>
  );
}

export default NavLinks;
