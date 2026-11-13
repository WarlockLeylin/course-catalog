"use client";

import { useState, type FormEvent } from "react";
import type { Enrollment } from "@/lib/courses";

const API = process.env.NEXT_PUBLIC_API_URL;

type EnrollFormProps = {
  courseId: string;
};

type Status = "idle" | "sending" | "done" | "rejected" | "error";

export function EnrollForm({ courseId }: EnrollFormProps) {
  const [studentName, setStudentName] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!studentName.trim()) return;
    setStatus("sending");

    try {
      // Creating user by the name in the field
      const email = `${studentName.toLowerCase().replace(/\s+/g, "_")}@example.com`;

      const studentRes = await fetch(`${API}/students`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: studentName, email }),
      });

      let studentId: number;

      if (studentRes.status === 201) {
        const student = await studentRes.json();
        studentId = student.id;
      } else if (studentRes.status === 409) {
        // Если студент с таким email уже есть, можно либо разрешить, либо вывести ошибку.
        // Для простоты зачисления в рамках лабы проще пересоздать или считать, что имя уникально.
        const errData = await studentRes.json();
        setMessage(errData.detail || "Student already exists");
        setStatus("rejected");
        return;
      } else {
        const errData = await studentRes.json();
        setMessage(errData.detail?.[0]?.msg || "Failed to create student");
        setStatus("rejected");
        return;
      }

      // Шаг 2: Создаем зачисление (enrollment)
      const enrollRes = await fetch(`${API}/enrollments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId, studentId }),
      });

      if (enrollRes.status === 409 || enrollRes.status === 404) {
        const errData = await enrollRes.json();
        setMessage(errData.detail || "Enrollment failed");
        setStatus("rejected");
        return;
      }

      if (!enrollRes.ok) throw new Error();

      const enrollment: Enrollment = await enrollRes.json();
      setMessage(`Enrollment ID: ${enrollment.id}`);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-sm flex-col gap-2 mt-4">
      <label htmlFor="studentName" className="font-medium">Your name</label>
      <input
        id="studentName"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        className="rounded-md border border-slate-300 px-3 py-2"
        placeholder="Enter your name"
        required
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-md border border-slate-300 px-3 py-2 hover:bg-slate-100 bg-slate-50 font-medium disabled:opacity-50"
      >
        {status === "sending" ? "Enrolling..." : "Enroll"}
      </button>
      {status === "done" && <p className="text-green-600 font-medium">You are successfully enrolled! {message}</p>}
      {status === "rejected" && (
        <p className="text-red-600 text-sm">The server rejected the data: {message}</p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm">Could not submit the enrollment</p>
      )}
    </form>
  );
}