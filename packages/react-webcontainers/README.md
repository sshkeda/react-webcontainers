# WebContainers for React

This package helps you integrate [WebContainers](https://webcontainers.io/) into your React application.

## Installation

```bash
pnpm add react-webcontainers
```

## Usage

### Enable Cross-Origin Isolation

WebContainers _require_ [SharedArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer), which, in turn, requires the website where they are running to be cross-origin isolated. Because of that, you'll need to set COOP/COEP headers:

```yaml
Cross-Origin-Embedder-Policy: require-corp
Cross-Origin-Opener-Policy: same-origin
```

To learn more about this topic and see how to do it, check [Configuring Headers](./configuring-headers.md).

### Add WebContainersProvider to the root of your application

```tsx
import WebContainerProvider from "react-webcontainers";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <WebContainerProvider>{children}</WebContainerProvider>;
}
```

### Use WebContainer

```tsx
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
```
