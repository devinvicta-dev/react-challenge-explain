export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-6 h-6">
        <div className="absolute inset-0 animate-ping will-change-auto rounded-full bg-neutral-950" />
        <div className="absolute inset-0 bg-neutral-950 rounded-full" />
      </div>
    </div>
  );
}
