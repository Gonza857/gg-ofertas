import {NextResponse} from 'next/server'
import { jwtVerify } from 'jose'

const key = new TextEncoder().encode(process.env.SECRET_JWT_KEY)

export async function middleware(req) {
    // if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    //     return NextResponse.redirect(new URL('/login', request.url))
    // }
    const token = req.cookies.get('access-token')?.value
    if (!token) return NextResponse.next()
    try {
        const {payload} = await jwtVerify(token, key)
        const res = NextResponse.next()
        return res;
    } catch (error) {
        console.error(error)
    }
    return NextResponse.next()

}

export const config = {
    matcher: ['/login', "/admin/stock/juegos"], // rutas donde se aplica
}