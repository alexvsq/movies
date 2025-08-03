import TitlePges from "@/components/layout/TitlePges";
import AsidePages from "@/components/layout/AsidePages";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container-dynamic">
      <TitlePges />
      <section className=" grid grid-cols-4 gap-4">
        <AsidePages />
        <div className="col-span-3 ">{children}</div>
      </section>
    </div>
  );
}
