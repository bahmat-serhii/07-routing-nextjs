// app/notes/filter/layout.tsx

import React from "react";

type LayoutProps = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  modal: React.ReactNode;
};

const NotesLayout = ({ children, sidebar, modal }: LayoutProps) => {
  return (
    <section>
      <aside>{sidebar}</aside>
      <div>{children}</div>
      <div>{modal}</div>
    </section>
  );
};

export default NotesLayout;
