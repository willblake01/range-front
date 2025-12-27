module.exports = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com']
  },

  async rewrites() {
    const isProd = process.env.NODE_ENV === 'production';

    return [
      {
        source: '/api/graphql',
        destination: isProd
          ? 'https://range-front-backend.onrender.com/'
          : 'http://localhost:4444/',
      },
    ];
  },
};
