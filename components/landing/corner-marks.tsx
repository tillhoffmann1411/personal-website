export default function CornerMarks() {
  return (
    <>
      <span className="pointer-events-none absolute -left-px -top-px h-2 w-2 border-l border-t border-brand-600 dark:border-brand-500" />
      <span className="pointer-events-none absolute -right-px -top-px h-2 w-2 border-r border-t border-brand-600 dark:border-brand-500" />
      <span className="pointer-events-none absolute -bottom-px -left-px h-2 w-2 border-b border-l border-brand-600 dark:border-brand-500" />
      <span className="pointer-events-none absolute -bottom-px -right-px h-2 w-2 border-b border-r border-brand-600 dark:border-brand-500" />
    </>
  );
}
