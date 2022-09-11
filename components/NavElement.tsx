import Link from 'next/link';

const NavElement: React.FC<{
  text: string;
  href: string;
  active?: boolean;
}> = ({ text, href, active }) => {
  let baseClass = 'font-mono text-xl md:text-2xl bg-red-100';
  if (active) {
    baseClass += ' bg-yellow-200';
  }

  return (
    <li className={baseClass}>
      <Link href={href}>
        <a>{text}</a>
      </Link>
    </li>
  );
};

export default NavElement;
