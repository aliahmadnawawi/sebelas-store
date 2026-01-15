import { NextRequest, NextResponse } from 'next/server';

const DOMAIN = 'sebelasindonesia.app';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const hostname = host.split(':')[0];

  if (hostname.endsWith(DOMAIN)) {
    const subdomain = hostname.replace(`.${DOMAIN}`, '');
    if (subdomain && subdomain !== 'admin' && subdomain !== 'api') {
      const url = request.nextUrl.clone();
      url.pathname = `/s/${subdomain}${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  if (hostname.includes('localhost')) {
    const fallback = process.env.NEXT_PUBLIC_STORE_SLUG;
    if (fallback && request.nextUrl.pathname === '/') {
      const url = request.nextUrl.clone();
      url.pathname = `/s/${fallback}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)']
};
