// app/notes/filter/layout.tsx

import { ReactNode } from "react";

export default function NotesLayout({
  children,
  sidebar,
  modal,
}: {
  children: ReactNode;
  sidebar: ReactNode;
  modal: ReactNode;
}) {
  return (
    <section>
      <aside>{sidebar}</aside>
      <div>{children}</div>
      <div>{modal}</div>
    </section>
  );
}
