export default [
  {
    context: ["/users/signin", "/users/register", "/product"],
    target: "https://online-store-api-714z.onrender.com/api",
    secure: false,
    changeOrigin: true,
  },
];
