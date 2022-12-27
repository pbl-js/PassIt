import React from "react";

export const LoadingWrapper = ({ children }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className="bg-white/10 rounded-lg shrink-0 mr-auto">
      <div className="opacity-0">{children}</div>
    </div>
  );
};
