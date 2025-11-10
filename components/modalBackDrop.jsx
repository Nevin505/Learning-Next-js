'use client'
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";

const ModalBackDrop = ({children}) => {
  const router = useRouter();
  
  const goBackHandler = useCallback((e) => {
    // Only navigate back if clicking directly on the backdrop (not on children)
    if (e.target === e.currentTarget) {
      router.back();
    }
  }, [router]);
  
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);
  
  return (
    <div className="modal-backdrop" onClick={goBackHandler}>
      <div onClick={stopPropagation}>
        {children}
      </div>
    </div>
  );
};

export default ModalBackDrop;
