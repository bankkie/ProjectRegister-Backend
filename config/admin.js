module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5c29493338a6646cd119a0e0d17359a5'),
  },
});
