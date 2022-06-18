import { IApi } from "umi";

export default (api: IApi) => {
  api.chainWebpack((config) => {
    config.module
      .rule("ts")
      .test(/styled\.(ts|tsx)/)
      .use("style-loader")
      .loader("css-loader")
      .options({
        postcssOptions: {
          parser: "postcss-js",
        },
        execute: true,
      });
    return config;
  });
};
