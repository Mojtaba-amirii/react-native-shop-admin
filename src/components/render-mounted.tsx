"use client";

import React, { ReactNode, useEffect, useState } from "react";

export const RenderMounted = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(typeof window !== "undefined");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <>{children}</>;
};
