import type * as React from "react";

declare global {
  // React 19 removed the global JSX namespace. The app annotates component
  // return types as JSX.Element in many files; re-expose it globally.
  namespace JSX {
    type Element = React.JSX.Element;
  }
}

export {};
