/** @type {import('next').NextConfig} */
const nextConfig = {
    env: { 
        GIT_TOKEN: process.env.GIT_TOKEN, 
        URL_GIT: process.env.URL_GIT,
    }
};

export default nextConfig;
