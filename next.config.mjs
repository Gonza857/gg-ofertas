/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            // {
            //     protocol: 'https',
            //     hostname: 'localhost',
            //     port: '3000', // Especifica el puerto si es necesario
            //     pathname: '/public/**', // Asegúrate de que el pathname coincida con tus imágenes
            // },
            {
                protocol: "https",
                hostname: "firebasestorage.googleapis.com",
                port: "",
                pathname: "/v0/b/garretgames-adm.firebasestorage.app/o/**",
            },
        ],
    },
};

export default nextConfig;
