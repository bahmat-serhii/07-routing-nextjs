"use client";
import { useRouter } from "next/navigation";
import React from "react";
import type { Note } from "@/types/note";
import css from "./NotePreview.module.css";

type Props = {
  note: Note;
};

const NotePreview = ({ note }: Props) => {
  const router = useRouter();
  const closeModal = () => router.back();
  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
          <span className={css.tag}>{note.tag}</span>
          <button className={css.backBtn} onClick={closeModal}>
            Back
          </button>
        </div>

        <p className={css.content}>{note.content}</p>

        <p className={css.date}>{new Date(note.createdAt).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default NotePreview;
