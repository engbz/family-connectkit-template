import { useAccount } from "wagmi";

// Make sure that this component is wrapped with ConnectKitProvider
const MyComponent = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  if (isConnecting) return <div>Connecting...</div>;
  if (isDisconnected) return <div>Connect to get started!</div>;
  // return <div>Connected Wallet: {address}</div>;
};

export default MyComponent;