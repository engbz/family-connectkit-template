import Head from 'next/head'
import { ConnectKitButton } from "connectkit";
import MyComponent from '../components/MyComponent'

export default function Home() {
  return (
  <>
    <Head>
      <title>Family Connect Kit Template</title>
      <meta name="HandheldFriendly" content="true" />
      <meta name="theme-color" content="#fafafa" media="(prefers-color-scheme: light)"/>
      <meta name="theme-color" content="#1e2024" media="(prefers-color-scheme: dark)" />
    </Head>

    <main>
      <h1>Family Connect Kit Template</h1>
      <MyComponent/>
      <ConnectKitButton />
    </main>
  </>
  )
}