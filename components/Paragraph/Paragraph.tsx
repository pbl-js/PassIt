import React from "react";
import { LoadingWrapper } from "../LoadingWrapper/LoadingWrapper";

type ParagraphProps = {
  children: React.ReactNode;
  loading?: boolean;
  className?: string;
};

export const Paragraph = ({ children, className, loading }: ParagraphProps) => {
  if (loading) {
    return (
      <LoadingWrapper className={className}>
        <p>{children}</p>
      </LoadingWrapper>
    );
  }

  return <p className={className}>{children}</p>;
};
