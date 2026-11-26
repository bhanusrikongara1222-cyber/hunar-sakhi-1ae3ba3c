import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import { LanguageProvider, useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site-shell";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  const { text } = useLanguage();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">{text('Page not found', 'పేజీ కనిపించలేదు', 'यह पेज नहीं मिला')}</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {text("The page you're looking for doesn't exist or has been moved.", 'మీరు వెతుకుతున్న పేజీ లేదు లేదా వేరే చోటుకు మార్చారు.', 'आप जिस पेज को ढूँढ रहे हैं, वह यहाँ नहीं है या दूसरी जगह चला गया है।')}
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {text('Go home', 'హోమ్‌కు వెళ్లండి', 'होम पर जाएँ')}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  const { text } = useLanguage();
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          {text("This page didn't load", 'ఈ పేజీ లోడ్ కాలేదు', 'यह पेज नहीं खुल पाया')}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {text('Something went wrong on our end. You can try refreshing or head back home.', 'ఏదో సమస్య వచ్చింది. మళ్లీ ప్రయత్నించండి లేదా హోమ్‌కు వెళ్లండి.', 'हमारी तरफ़ कुछ गड़बड़ हो गई। फिर से कोशिश करें या होम पर जाएँ।')}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {text('Try again', 'మళ్లీ ప్రయత్నించండి', 'फिर कोशिश करें')}
          </Button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            {text('Go home', 'హోమ్‌కు వెళ్లండి', 'होम पर जाएँ')}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    // Replace these placeholders with the app's name and description when first building the app.
    // Each content route, / included, must still set its own head(). Never add og:image or
    // twitter:image here: every page without its own would inherit the root's preview image.
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Hunar Sakhi" },
      { name: "description", content: "A student prototype supporting women artisans, one product story at a time." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Hunar Sakhi" },
      { property: "og:description", content: "A student prototype supporting women artisans, one product story at a time." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=Noto+Serif+Devanagari:wght@400;500;600&family=Noto+Sans+Telugu:wght@400;500;600&family=Noto+Serif+Telugu:wght@400;500&display=swap" },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <SiteShell><Outlet /></SiteShell>
    </QueryClientProvider>
  );
}
