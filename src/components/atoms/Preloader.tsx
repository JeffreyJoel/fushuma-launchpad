import clsx from "clsx";

interface Props {
  size?: number,
  color?: "red" | "white",
  type?: "circular" | "linear"
}

export default function Preloader({ size = 100, type = "circular", color = "red" }: Props) {
    switch (type) {
      case "circular":
        return <div style={{width: size, height: size}} className="flex items-center justify-center relative">
          <div style={{borderWidth: size > 50 ? 4 : 2}} className="rounded-full border-4 border-secondary-bg border-t-red top-0 left-0 w-full h-full bg-transparent animate-spin" />
        </div>
      case "linear":
        return <div className="flex items-center gap-[5px]">
          <span className={clsx("block rounded-full w-2 h-2 animate-flicker1", color === "red" ? "bg-red" : "bg-white")} />
          <span className={clsx("block rounded-full w-2 h-2 animate-flicker2", color === "red" ? "bg-red" : "bg-white")} />
          <span className={clsx("block rounded-full w-2 h-2 animate-flicker3", color === "red" ? "bg-red" : "bg-white")} />
        </div>
    }
}
