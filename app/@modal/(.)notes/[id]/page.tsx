// app/@modal/(.)notes/[id]/page.tsx
"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import Modal from "../../../../components/Modal/Modal";
import NotePreview from "./NotePreview.client";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "../../../../lib/api";

type Props = {
  params: Promise<{ id: string }>;
};

export default function NotePreviewModal({ params }: Props) {
  const { id } = use(params); // ⬅️ тут використовуємо use() для промісу
  const router = useRouter();

  const noteId = Number(id);

  const {
    data: note,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["note", noteId],
    queryFn: () => fetchNoteById(noteId),
    enabled: !isNaN(noteId),
  });

  if (isNaN(noteId) || isError) return null;
  if (isLoading || !note) return null;

  return (
    <Modal onClose={() => router.back()}>
      <NotePreview note={note} />
    </Modal>
  );
}
