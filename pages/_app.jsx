import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../components/GlobalStyle'

import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";

const config = createConfig(
  getDefaultConfig({
    appName: "ConnectKit Next.js demo",
    alchemyId: process.env.ALCHEMY_ID, // or infuraId
    walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID,
  })
);

export default function App({ Component, pageProps }) {
  return (
    <>
    <WagmiConfig config={config}>
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
