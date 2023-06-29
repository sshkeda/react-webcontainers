"use client";

import { useWebContainer } from "react-webcontainers";

export default function Page() {
  const webContainer = useWebContainer();

  return (
    <h1>
      {webContainer
        ? `WebContainer instance instantiated at ${webContainer.workdir}.`
        : "WebContainer instance still booting."}
    </h1>
  );
}
