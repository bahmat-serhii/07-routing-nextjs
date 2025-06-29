// app/notes/filter/layout.tsx

import React from "react";

export default function NotesLayout({
  children,
  sidebar,
  modal,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <section>
      <aside>{sidebar}</aside>
      <main>{children}</main>
      <div>{modal}</div>
    </section>
  );
}
