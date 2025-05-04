import jwt from 'jsonwebtoken'

class CookieManager {
    static expiration = {
        expiresIn: '7d'
    }

    static setAndGetToken (payload) {
        return {
            token: jwt.sign({ payload }, process.env.SECRET_JWT_KEY, this.expiration),
            name: 'access-token'
        }
    }

    static getDefaultCookieConfig () {
        return {
            httpOnly: true,
            secure: process.env.APP_MODE === "production",
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7, // 1 hora
        }
    }

    static get (cookieStore, cookieName) {
        const token = cookieStore.get(cookieName)?.value;
        console.log("token obtenido", token)
        if (token === "undefined" || token === undefined) return null;
        console.log("el token existe")
        let {payload: data} = jwt.verify(token, process.env.SECRET_JWT_KEY);
        console.log("data del token", data)
        return data;
    }
}

export default CookieManager