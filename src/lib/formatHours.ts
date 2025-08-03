export function formatMinutesToHM(mins: number) {
  const hours = Math.floor(mins / 60);
  const minutes = mins % 60;

  const h = hours > 0 ? `${hours}h` : "";
  const m = minutes > 0 ? `${minutes}m` : "";

  return [h, m].filter(Boolean).join(" ");
}
