"use client";
export default function buttonSecondary({ title }: { title: string }) {
  return (
    <button className="rounded-lg border border-white/10 px-4 py-2 hover:bg-white/20 transition cursor-pointer">
      <p className="text-sm">{title}</p>
    </button>
  );
}
