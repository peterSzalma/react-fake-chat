import * as React from "react";

export function Renderable({render, children}: React.PropsWithChildren<{render: boolean}>) {
   return render? children as any : null;
}