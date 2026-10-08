import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Routes that can be accessed while signed out
const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhooks(.*)",
]);

// Routes that skip auth entirely
const isIgnoredRoute = createRouteMatcher(["/no-auth-in-this-route"]);

export default clerkMiddleware(async (auth, req) => {
  if (isIgnoredRoute(req) || isPublicRoute(req)) return;
  await auth.protect();
});

export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/clerk-middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
