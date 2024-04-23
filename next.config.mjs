/** @type {import('next').NextConfig} */

const prefix =
  process.env.NODE_ENV === "production"
    ? "https://boahla.github.io/detailez/"
    : "";
// const repository = "detailez";

const nextConfig = {
  //   reactStrictMode: true,
  //   assetPrefix: !debug ? `/${repository}/` : "", // production 일때 prefix 경로
  //   trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록,
  output: "export",
  assetPrefix: prefix,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/products",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
