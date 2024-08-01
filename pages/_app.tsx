import { AuthCoreContextProvider } from "@particle-network/auth-core-modal";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthCoreContextProvider
      options={{
        projectId: "772f7499-1d2e-40f4-8e2c-7b6dd47db9de",
        clientKey: "ctWeIc2UBA6sYTKJknT9cu9LBikF00fbk1vmQjsV",
        appId: "64267c6b-e512-4df2-a7ca-f8b78520a24e",
        wallet: {
          visible: true,
        },
      }}
    >
      <Component {...pageProps} />
    </AuthCoreContextProvider>
  );
}

export default MyApp;
