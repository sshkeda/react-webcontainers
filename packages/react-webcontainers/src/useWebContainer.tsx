"use client";

import { useContext } from "react";
import { WebContainerContext } from "./WebContainerProvider";

export function useWebContainer() {
  const webContainer = useContext(WebContainerContext);

  return webContainer;
}
