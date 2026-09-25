export default function AboutPage() {
  return (
    <main className="space-y-4 max-w-2xl">
      <h1 className="text-2xl font-bold text-slate-100">About This Catalog</h1>
      <p className="text-slate-300 leading-relaxed">
        This application was built as part of Lab 2 for the “Advanced Web Technologies” course.
      </p>
      <p className="text-slate-300 leading-relaxed">
        It showcases file-based routing with Next.js 16 App Router, React Server Components, dynamic routes, Tailwind CSS, and shadcn/ui.
      </p>
    </main>
  );
}