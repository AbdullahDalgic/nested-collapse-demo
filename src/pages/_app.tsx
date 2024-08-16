import type { AppProps } from "next/app";
import React from "react";
import { ToastContainer } from "react-toastify";
import dynamic from "next/dynamic";

import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

const Layout = dynamic(() => import("@/components/layout"), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        // theme={isDarkMode ? "dark" : "light"}
      />
    </Layout>
  );
}
