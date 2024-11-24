"use client";
import Container from "@/components/atoms/Container";
import { IconName } from "@/config/types/IconName";
import SocialIconButton from "@/components/buttons/SocialIconLink";
import ThemedLogo from "@/components/ThemedLogo";
import { useTranslations } from "use-intl";

type FooterLink = {
  label: "telegram"  |"zeeve" |"fushuma_roadmap" |"fuma_tokenomics" | "blog",
  url: string | null
}

export const Links: FooterLink[] = [
  {
    label: "fushuma_roadmap",
    url: "https://t.me/Soy_Finance"
  },
  {
    label: "fuma_tokenomics",
    url: "https://docs.soy.finance/soy-products/soy-token/monetary-policy-vision"
  },
  {
    label: "blog",
    url: "https://docs.soy.finance/"
  }
];

export const technicalPartners: FooterLink[] = [
  {
    label: "zeeve",
    url: "https://www.zeeve.io/"
  },
];

export const footerLinks: {
  groupLabel: "links" | "technical_partners",
  links: FooterLink[]
}[] = [
  {
    groupLabel: "links",
    links: Links
  },
  {
    groupLabel: "technical_partners",
    links: technicalPartners
  },
]

export const socialLinks: Array<{
  icon: IconName,
  link: string
}> = [
  {
    icon: "twitter",
    link: "https://twitter.com/FushumaChain"
  },
  {
    icon: "telegram",
    link: "https://t.me/FushumaChain"
  },
  {
    icon: "reddit",
    link: "https://reddit.com/r/Fushuma"
  },
  {
    icon: "facebook",
    link: "https://www.facebook.com/FushumaChain"
  },
];



export default function Footer() {

  const t = useTranslations("Footer");

  return <Container>
    <footer className="pb-5 sm:pb-0 sm:rounded-5 overflow-hidden mb-5 bg-primary-bg border-y sm:border border-primary-border">
      <div className="grid xl:flex p-4 xl:pt-5 xl:px-10 xl:pb-10 justify-between border-b border-primary-border">
        <div className="pt-3">
          <div className="mb-[14px]">
            <ThemedLogo/>
          </div>

          <span className="text-16 text-secondary-text font-medium">{t("be_lazy")}</span>
          <div className="flex gap-2.5 my-5">
          </div>
          <div className="flex items-center gap-2.5 flex-wrap">
            {socialLinks.map((item, index) => {
              return <a aria-label={item.icon} key={index} target="_blank" href={item.link}>
                <SocialIconButton icon={item.icon}/>
              </a>
            })}
          </div>
        </div>
        <div className="grid xl:flex gap-6 xl:gap-[120px] pt-5">
          {footerLinks.map((group) => {
            return <div key={group.groupLabel}>
              <h3 className="font-bold text-primary-text mb-4 text-20">{t(group.groupLabel)}</h3>
              <div className="flex flex-col gap-2.5 font-medium">
                {group.links.map((link) => {
                  if (link.url) {
                    return <a className="duration-200 hover:text-red" target="_blank" href={link.url}
                              key={link.label}>{t(link.label)}</a>
                  }

                  return <a className="duration-200 hover:text-red" onClick={(e) => {
                    e.preventDefault();
                    // showMessage("Coming soon...", "info");
                  }} href="" key={link.label}>{t(link.label)}</a>
                })}
              </div>
            </div>
          })}
        </div>
      </div>
      <div className="p-4 mb-5 sm:mb-0 sm:px-10 sm:py-5 flex justify-between items-center text-12 sm:text-16">
        <span className="text-secondary-text text-12 sm:text-16">©{new Date(Date.now()).getFullYear()} {t("rights_reserved")}</span>
        <div className="flex items-center gap-3 sm:gap-5">
          <a href="#">{t("terms")}</a>
          <a href="#">{t("privacy_policy")}</a>
        </div>
      </div>
    </footer>
  </Container>
}
