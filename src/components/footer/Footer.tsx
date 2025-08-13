export default function Footer() {
  return (
    <footer className="h-52 w-full ">
      <div className="container-dynamic flex items-center justify-between h-full">
        <div className="flex flex-col gap-2 items-center">
          <a href="https://www.themoviedb.org" target="_blank">
            <img src="/tmdb-logo.svg" alt="tmdb logo" className="h-6" />
          </a>
          <p className="text-xs text-text-secondary">API by tmdb</p>
        </div>

        <aside>
          Project by{" "}
          <a
            href="https://portfolio-six-sooty-75.vercel.app/en/"
            target="_blank"
            className="text-primary font-semibold underline"
          >
            AlexVsq
          </a>
        </aside>
      </div>
    </footer>
  );
}
