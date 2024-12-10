"use client";

import { useCallback, useEffect, useState } from "react";
import { modal } from "@/connection";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { useAppKitAccount } from "@reown/appkit/react";
export function ConnectButton() {
  const [isClient, setIsClient] = useState(false);
  const { address, caipAddress, isConnected } = useAppKitAccount();

  const handleConnect = useCallback(() => {
    modal.open();
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient && isConnected ? (
    <appkit-button />
  ) : (
    <PrimaryButton onClick={() => handleConnect()}>
      Connect Wallet
    </PrimaryButton>
  );
}
