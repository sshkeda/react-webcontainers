"use client";

import WebContainerProvider from "react-webcontainers";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <WebContainerProvider>{children}</WebContainerProvider>;
}
