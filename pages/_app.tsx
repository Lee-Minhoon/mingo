import "../styles/globals.css";
import type { AppProps } from "next/app";
import { canvasExtend } from "../common/types";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    canvasExtend();
    setLoading(true);
  }, []);

  return loading && <Component {...pageProps} />;
}
