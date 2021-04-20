import { FC } from "react";
import "../styles/globals.css";

const MyApp: FC<any> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
