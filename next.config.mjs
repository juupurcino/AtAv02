/** @type {import('next').NextConfig} */
const nextConfig = {

    rewrites: () => {
        return [
            {
                source: "/primeira-pagina",
                destination: "/fetch-page",

            },
            {
                source: "/segunda-pagina",
                destination: "/axios-page",

            }
        ]
    },

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'dragonball-api.com',
          },
      ],
    }
};

export default nextConfig;