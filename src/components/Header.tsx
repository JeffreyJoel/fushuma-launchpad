"use client";
import HeaderNav from "@/components/HeaderNav";
import { useAccount } from "wagmi";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SettingsMenu from "@/components/SettingsMenu";
import Container from "@/components/atoms/Container";
import { useEffect, useState } from "react";
import WalletMenu from "@/components/WalletMenu";
import ChangeNetworkMenu from "@/components/ChangeNetworkMenu";
import ThemedLogo from "@/components/ThemedLogo";
import MobileMenu from "@/components/MobileMenu";
import { useConnectWalletDialogStateStore } from "@/components/dialogs/stores/useConnectWalletStore";
import { useRecentTransactionTracking } from "@/hooks/useRecentTransactionsTracking";
import { useTranslations } from "use-intl";
import { ConnectButton } from "@/connection/ConnectButton";

export default function Header() {
  const navT = useTranslations("Navigation");

  const { isConnected, address } = useAccount();
  const {setIsOpened} = useConnectWalletDialogStateStore();
  const {
    pending
  } = useRecentTransactionTracking();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  return <Container>
    <header className="mx-auto w-full">
      <div
        className="sm:bg-primary-bg duration-200 h-[60px] flex justify-between items-center px-5 border border-transparent sm:border-primary-border sm:rounded-5 sm:mt-5">
        <div className="flex items-center gap-10">
          <ThemedLogo/>
          <HeaderNav/>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="hidden md:flex items-center gap-2.5">
            <SettingsMenu/>

            <ConnectButton/>
          </div>
          <MobileMenu />

        </div>
      </div>
    </header>
  </Container>
}
