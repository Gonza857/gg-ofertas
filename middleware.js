import { NextResponse } from 'next/server'

export async function middleware(req) {
    const { pathname } = req.nextUrl
    console.log("pathname", pathname)

    if (!pathname.startsWith('/admin')) {
        return NextResponse.next()
    }

    const token = req.cookies.get('access-token')?.value

    if (!token) {
        return NextResponse.redirect(new URL('/', req.url))
    }

    let host = process.env.NEXT_PUBLIC_API_URL

    try {
        const res = await fetch(`${host}/api/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })

        if (!res.ok) {
            return NextResponse.redirect(new URL('/', req.url))
        }

        const data = await res.json()

        console.log(data)

        if (!data) {
            return NextResponse.redirect(new URL('/', req.url))
        }

        return NextResponse.next()

    } catch (e) {
        console.error("Error en middleware:", e)
        return NextResponse.redirect(new URL('/', req.url))
    }

    return NextResponse.next()

}

export const config = {
    matcher: '/admin/:path*', // Coincide con todas las rutas que comienzan con /admin/
}