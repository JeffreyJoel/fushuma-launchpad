"use client";

const menuItems: {
  title: string;
  url: string;
}[] = [
  {
    title: "Blueprint",
    url: "https://fushuma.com/blueprint-for-decentralization/",
  },
  {
    title: "About",
    url: "https://fushuma.com/about-fushuma/",
  },
];

export default function HeaderNav() {
  return (
    <nav className="hidden xl:block">
      <ul className="flex items-center gap-2">
        {menuItems.map((link) => (
          <li key={link.title}>
           
              <a
                target="_blank"
                className="px-1.5 font-medium text-primary-text flex items-center gap-1 duration-200 hover:text-red"
                href={link.url}
              >
                {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
