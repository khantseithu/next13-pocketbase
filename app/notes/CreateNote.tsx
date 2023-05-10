"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  async function create(e: any) {
    e.preventDefault();
    const res = await fetch(
      "http://127.0.0.1:8090/api/collections/notes/records",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      }
    );

    setTitle("");
    setContent("");
    router.push("/notes");
  }

  return (
    <form onSubmit={create}>
      <h1>Create Note</h1>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="content">Content</label>
      <textarea
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Create</button>
    </form>
  );
}
export default CreateNote;
