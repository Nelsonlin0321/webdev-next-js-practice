"use client";
import React from "react";

interface Props {
  onShow: () => void;
}

const HeavyComponentShowButton = ({ onShow }: Props) => {
  return (
    <button onClick={() => onShow()} className="btn">
      Show
    </button>
  );
};

export default HeavyComponentShowButton;
