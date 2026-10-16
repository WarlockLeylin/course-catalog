export type Course = {
  id: string;
  title: string;
  description: string;
  credits: number;
  isElective: boolean;
  likes: number;
};

export type Enrollment = {
  id: number;
  courseId: string;
  studentName: string;
};

const API_URL = process.env.API_URL;
if (!API_URL) throw new Error("API_URL is not set: create .env.local");

// 5 sec timeout
async function fetchWithTimeout(url: string, options: RequestInit = {}, timeout = 5000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}

export async function getCourses(): Promise<Course[]> {
  const res = await fetchWithTimeout(`${API_URL}/courses`, { cache: "no-store" });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

export async function getCourse(id: string): Promise<Course | undefined> {
  const res = await fetchWithTimeout(`${API_URL}/courses/${id}`, { cache: "no-store" });
  if (res.status === 404) return undefined;
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}