export default function CornerMarks() {
  return (
    <>
      <span className="pointer-events-none absolute left-0 top-0 h-2 w-2 border-l border-t border-brand-600 dark:border-brand-500" />
      <span className="pointer-events-none absolute right-0 top-0 h-2 w-2 border-r border-t border-brand-600 dark:border-brand-500" />
      <span className="pointer-events-none absolute bottom-0 left-0 h-2 w-2 border-b border-l border-brand-600 dark:border-brand-500" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-2 w-2 border-b border-r border-brand-600 dark:border-brand-500" />
    </>
  );
}
