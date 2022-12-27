import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { routes } from "../../consts/routes";
import { LoadingWrapper } from "../LoadingWrapper/LoadingWrapper";

// TODO: React better button component

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  href: typeof routes[keyof typeof routes];
  loading?: boolean;
};

export const Button = ({ children, href, className, loading }: ButtonProps) => {
  if (loading) {
    return (
      <LoadingWrapper className={className}>
        <Link
          className={clsx(
            "py-5 px-8 bg-yellow-400 rounded-xl text-purple-800 text-lg font-bold",
            "shrink-0 mr-auto",
            className,
          )}
          href={href}
        >
          {children}
        </Link>
      </LoadingWrapper>
    );
  }
  return (
    <Link
      className={clsx(
        "py-5 px-8 bg-yellow-400 rounded-xl text-purple-800 text-lg font-bold",
        "shrink-0 mr-auto",
        className,
      )}
      href={href}
    >
      {children}
    </Link>
  );
};
