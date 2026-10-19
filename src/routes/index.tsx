import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Open in Browser" },
      { name: "description", content: "Open this page in your browser to continue." },
      { property: "og:title", content: "Open in Browser" },
      { property: "og:description", content: "Open this page in your browser to continue." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="buffer-bg flex min-h-dvh items-center justify-center px-6 py-10">
      <div className="flex w-full max-w-sm flex-col items-center gap-6 text-center sm:gap-8">
        <h1 className="font-display text-3xl font-bold uppercase leading-tight tracking-[-0.02em] text-balance text-foreground sm:text-4xl">
          Open in browser
        </h1>
        <a
          href="https://www.google.com"

          rel="noopener noreferrer"
          className="buffer-btn w-full max-w-xs rounded-full px-8 py-3.5 text-base font-medium text-primary-foreground sm:w-auto sm:max-w-none sm:px-10 sm:py-4 sm:text-lg"
        >
          Click here
        </a>
      </div>
    </main>
  );
}
