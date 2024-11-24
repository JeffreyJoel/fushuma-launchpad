import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import Preloader from "@/components/atoms/Preloader";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "outlined",
  fullWidth?: boolean,
  loading?: boolean
}
export default function PrimaryButton({variant = "contained", fullWidth = false, loading = false, children, ...props}: PropsWithChildren<Props>) {
  return <button {...props} className={`
    h-10
    rounded-25
    px-6
    font-medium
    border
    border-primary
    duration-200
    flex
    items-center
    gap-1
    justify-center
    disabled:bg-transparent
    disabled:text-grey-light
    disabled:border-grey-light
    ${variant === "contained" 
      ? "text-white bg-[#262528] dark:bg-beige dark:text-red hover:bg-red-light hover:border-bg-red-light" 
      : "text-primary-text bg-transparent hover:bg-green/20"}
    ${fullWidth && "w-full"}
    ${loading && "pointer-events-none"}      
  `}>
    {!loading ? children : <Preloader type="linear" color={variant === "contained" ? "white" : "green"} />}
  </button>
}
