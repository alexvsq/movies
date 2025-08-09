"use client";
import { useFilterMenuIsOpenStore } from "@/store/filterMenuStore";

export default function AsideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen, setIsOpen } = useFilterMenuIsOpenStore();

  return (
    <div className={`${isOpen ? "md:block" : "hidden md:block"}`}>
      {children}
    </div>
  );
}
