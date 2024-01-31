export { default } from "next-auth/middleware";

// Applies next-auth only to matching routes.
export const config = {
  matcher: ["/links", "/preview", "/profile"],
};
