import Drawer from "@/components/atoms/Drawer";
import Svg from "@/components/atoms/Svg";
import { socialLinks } from "@/components/Footer";
import SocialIconButton from "@/components/buttons/SocialIconLink";
import ActionIconButton from "@/components/buttons/ActionIconButton";
import { useState } from "react";
import addToast from "@/other/toast";

export default function MobileMenu() {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  return (
    <div className="xl:hidden">
      <Drawer
        placement="left"
        isOpen={mobileMenuOpened}
        setIsOpen={setMobileMenuOpened}
      >
        <div className="py-6 px-4 grid gap-6">
          <div>
            <h3 className="mb-2 text-12 text-secondary-text -tracking-[0.24px]">
              Exchange
            </h3>
            <h3 className="mb-2 text-12 text-secondary-text -tracking-[0.24px]">
              Social media
            </h3>
            <div className="flex items-center gap-2.5 flex-wrap">
              {socialLinks.map((item, index) => {
                return (
                  <a key={item.icon} target="_blank" href={item.link}>
                    <SocialIconButton icon={item.icon} key={index} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Drawer>
      <ActionIconButton icon="menu" onClick={() => setMobileMenuOpened(true)} />
    </div>
  );
}
