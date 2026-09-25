const nextConfig = {
  output: "export",
  basePath: process.env.GITHUB_ACTIONS === "true" ? "/rosetta-zara-dev" : "",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
