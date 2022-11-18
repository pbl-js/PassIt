"use client";

import clsx from "clsx";
import React from "react";
import { CreateSectionModal } from "../../../components/CreateSectionForm/CreateSectionModal";

import { useModalState } from "../../../hooks/useModalState";

type ControlCenterProps = {
  className?: string;
};

export const ControlCenter = ({ className }: ControlCenterProps) => {
  const { isOpen, openModal, closeModal } = useModalState();

  return (
    <>
      <div className={clsx(className)}>
        <button onClick={openModal}>Create new section</button>
      </div>
      {isOpen && <CreateSectionModal closeModal={closeModal} />}
    </>
  );
};
