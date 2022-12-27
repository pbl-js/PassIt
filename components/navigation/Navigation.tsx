import React from "react";
import TopicsIcon from "public/icons/topics.svg";
import StarIcon from "public/icons/star.svg";
import CollectionIcon from "public/icons/collection.svg";
import SettingsIcon from "public/icons/settings.svg";
import clsx from "clsx";
import { routes } from "../../consts/routes";
import Link from "next/link";

export const navigationWidth = "144px";

const iconSize = {
  width: "50px",
  height: "50px",
};

const navItems = [
  {
    icon: TopicsIcon,
    title: "Topics",
    href: routes.topics,
  },
  {
    icon: StarIcon,
    title: "Admin",
    href: routes.dojo,
  },
  {
    icon: CollectionIcon,
    title: "Collection",
    href: routes.collection,
  },
  {
    icon: SettingsIcon,
    title: "Profile",
    href: routes.profile,
  },
] as const;

export const Navigation = () => {
  return (
    <nav
      style={{ width: navigationWidth }}
      className={clsx(
        "fixed top-0 left-0 bottom-0 py-7",
        "flex flex-col items-center",
        "bg-purple-800 fill-purple-300 text-purple-300",
        "text-sm font-medium",
      )}
    >
      <h1 className="mb-32">Logo</h1>
      <ul className={clsx("flex flex-col gap-5")}>
        {navItems.map(({ icon: Icon, title, href }) => (
          <li key={title} className="flex flex-col items-center gap-2">
            <Link href={href} className="fill-purple-300">
              <Icon {...iconSize} />
            </Link>
            {title}
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <SettingsIcon {...iconSize} />
      </div>
    </nav>
  );
};
