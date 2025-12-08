import * as React from "react";

export const richFormatter = {
  highlight: (chunks: React.ReactNode) => (
    <span className="bg-pink-600/60 px-1 rounded">{chunks}</span>
  ),
  accent: (chunks: React.ReactNode) => (
    <span className="text-pink-600 font-bold">{chunks}</span>
  ),
  bold: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
};
