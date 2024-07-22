import { NextResponse, NextRequest } from "next/server";
import {
  PUBLIC_IMAGES_PATH,
  getCoreRoutes,
  unauthenticatedRoutes,
} from "@/infra/routes";

const { login } = getCoreRoutes();

export function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  const url = request.nextUrl.clone();

  const isUnauthenticatedRoute = unauthenticatedRoutes.some((route) =>
    pathName.includes(route)
  );

  const isImagePath = pathName.includes(PUBLIC_IMAGES_PATH);

  if (!isUnauthenticatedRoute && !isImagePath) {
    const token = true;
    if (!token) {
      url.pathname = login;
      return NextResponse.redirect(url);
    }
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|favicon.ico|_next/image|.*\\.png$).*)"],
};
