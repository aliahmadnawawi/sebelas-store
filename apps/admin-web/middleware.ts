import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const token = req.cookies.get('sebelas_session')
  const { pathname } = req.nextUrl

  // Allow auth page
  if (pathname.startsWith('/auth')) {
    return NextResponse.next()
  }

  // If not logged in → redirect to Codex auth
  if (!token) {
    return NextResponse.redirect(new URL('/auth', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
}
