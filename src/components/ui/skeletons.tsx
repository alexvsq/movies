export function SkeletonCard() {
  return (
    <article className="w-full max-w-[220px] loading h-[300px] rounded-lg"></article>
  );
}

export function SkeletonCardGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <SkeletonCard key={index} />
        ))}
    </div>
  );
}

export function SkeletonDetailContent() {
  return (
    <div className="container-dynamic flex flex-col md:flex-row md:items-center px-4 py-6 gap-8 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[720px]">
      <article className="w-[300px] h-[450px] rounded-xl loading"></article>

      <aside className="flex flex-col gap-4">
        <div className="h-10 w-80 rounded-xl loading"></div>
        <div className="h-52 w-[800px] rounded-xl loading"></div>
        <div className="h-8 w-40 rounded-full loading"></div>
      </aside>
    </div>
  );
}
