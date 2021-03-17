module.exports = ({env}) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'a3410ee0fc4c1d081cefe4952b1b72a1'),
    },
  },
  /*cors: {
    enabled: true,
    headers: "*",
    origin: ["https://blog-lsf4all.herokuapp.com/", "http://localhost"]
  }*/
});
