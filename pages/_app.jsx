import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../components/GlobalStyle'

import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";

const client = createClient(
  getDefaultClient({
    appName: "ConnectKit Next.js demo",
    alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_ID,
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
  })
);

export default function App({ Component, pageProps }) {
  return (
    <>
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        </ThemeProvider>
        </ConnectKitProvider>
    </WagmiConfig>
    </>
  )
}
