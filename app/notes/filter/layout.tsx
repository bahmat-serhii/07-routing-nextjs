// app/notes/filter/layout.tsx

import React from "react";

type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  modal: React.ReactNode;
};

const NotesLayout = ({ children, sidebar, modal }: Props) => {
  return (
    <section>
      <aside>{sidebar}</aside>
      <div>{children}</div>
      <div>{modal}</div>
    </section>
  );
};

export default NotesLayout;
