import Image from "next/image";

export default function ThemedLogo() {
  return <>
    <Image
      className="dark:hidden"
      width={132}
      height={46}
      src="/Logo.png"
      alt="Fushuma"
    />
    <Image
      className="dark:block hidden"
      width={132}
      height={46}
      src="/Logo-white.png"
      alt="Fushuma"
    />
  </>
}
