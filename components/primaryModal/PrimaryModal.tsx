import React from "react";
import { Portal } from "@reach/portal";
import { CloseModalFunctionType } from "../../hooks/useModalState";
import ArrowIcon from "public/icons/half-arrow-left.svg";
import { useKeyboardEvent } from "@react-hookz/web";
import clsx from "clsx";

type PrimaryModalWrapperProps = {
  children: React.ReactNode;
  closeModal: CloseModalFunctionType;
  title: string;
};

export const PrimaryModalWrapper = ({
  children,
  closeModal,
  title,
}: PrimaryModalWrapperProps) => {
  useKeyboardEvent("Escape", closeModal, [closeModal]);

  return (
    <Portal>
      <div
        className={clsx(
          "fixed z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
          "w-full max-w-xl shadow-xl bg-theme-800 rounded-2xl p-6"
        )}
      >
        <div className="grid grid-cols-3 items-center mb-10">
          <button
            onClick={closeModal}
            className="w-12 h-12 grid place-items-center bg-theme-700 fill-theme-150 rounded-full"
          >
            <ArrowIcon width={20} height={20} />
          </button>
          <div className="text-theme-150 font-medium text-lg text-center">
            {title}
          </div>
        </div>
        {children}
      </div>
      <div className="fixed z-10 top-0 right-0 bottom-0 left-0 backdrop-blur-lg bg-black/20" />
    </Portal>
  );
};
