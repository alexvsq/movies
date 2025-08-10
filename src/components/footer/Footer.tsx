import React from "react";
import Logo from "@/components/shared/Logo";

export default function Footer() {
  return (
    <footer className="h-52 w-full ">
      <div className="container-dynamic flex items-center justify-between h-full">
        <Logo />

        <aside>
          Proyect by{" "}
          <a
            href="https://portfolio-six-sooty-75.vercel.app/en/"
            target="_blank"
            rel="noreferrer"
            className="text-primary font-semibold underline"
          >
            AlexVsq
          </a>
        </aside>
      </div>
    </footer>
  );
}
