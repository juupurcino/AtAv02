/** @type {import('next').NextConfig} */
const nextConfig = {

    rewrites: () => {
        return [
            {
                source: "/primeira-pagina",
                destination: "/fetch-page",

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