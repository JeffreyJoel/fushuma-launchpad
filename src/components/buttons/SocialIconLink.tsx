import Svg from "@/components/atoms/Svg";
import { IconName } from "@/config/types/IconName";
import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
  icon: IconName
}

export default function SocialIconButton({ icon, ...props }: Props) {
  return <button {...props} className={`
    w-10
    h-10
    rounded-full
    border
    border-[#e4d0af]
    bg-transparent
    hover:bg-[#e4d0af]
    text-secondary-text
    hover:text-red
    flex
    items-center
    justify-center
    duration-200
  `}>
    <Svg iconName={icon}/>
  </button>
};
