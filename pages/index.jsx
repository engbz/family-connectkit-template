import Title from '../components/Title'
import Ingress from '../components/Ingress'
import MyComponent from '../components/MyComponent'
import Head from 'next/head'
import { ConnectKitButton } from "connectkit";

export default function Home() {
  return (
  <>
    <Head>
      <title>Next with Styled Components Template</title>
      <meta name="HandheldFriendly" content="true" />
      <meta name="theme-color" content="#fafafa" media="(prefers-color-scheme: light)"/>
      <meta name="theme-color" content="#1e2024" media="(prefers-color-scheme: dark)" />
    </Head>
  

    <ConnectKitButton />
    {/* <ConnectKitButton.Custom /> */}
    <Title>Hello?</Title>
    <Ingress>Yo!</Ingress>
    <p>What?!</p>

    {/* <MyComponent/> */}

  </>
  )
}