import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Nur diese Ordner linten – generierte Dateien bleiben außen vor
    dirs: ['app', 'pages', 'components', 'lib', 'src'],
  },
};

export default nextConfig;
