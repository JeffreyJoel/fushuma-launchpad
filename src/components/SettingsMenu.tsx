import Svg from "@/components/atoms/Svg";
import SystemIconButton from "@/components/buttons/SystemIconButton";
import { ButtonHTMLAttributes, useState } from "react";
import Popover from "@/components/atoms/Popover";
import DialogHeader from "@/components/DialogHeader";
import Switch from "@/components/atoms/Switch";
import { useTheme } from "next-themes";

type SettingsContent = "settings" | "language";

export default function SettingsMenu() {


  const [isSettingsOpened, setSettingsOpened] = useState(false);
  const { theme, setTheme } = useTheme();
  const [content, setContent] = useState<SettingsContent>("settings");

  return (
    <Popover
      setIsOpened={setSettingsOpened}
      isOpened={isSettingsOpened}
      trigger={
        <SystemIconButton
          onClick={() => setSettingsOpened(!isSettingsOpened)}
          icon="settings"
        />
      }
      placement="bottom-end"
    >
      <div className="rounded-2 border border-primary-border w-[400px] bg-primary-bg">
        {content === "settings" ? (
          <DialogHeader
            variant="dropdown"
            title={"Settings"}
            handleClose={() => setSettingsOpened(false)}
          />
        ) : (
          <DialogHeader
            variant="dropdown"
            onBack={() => setContent("settings")}
            title={"Language"}
            handleClose={() => setSettingsOpened(false)}
          />
        )}

        <div className="p-5">
          <ul className="grid gap-2.5">
            <li className="flex items-center justify-between h-[60px] bg-secondary-bg rounded-2 py-3 pr-3 pl-5 duration-200">
              <div className="flex gap-2">
                <div className="">
                  <Svg iconName="night" />
                </div>
                Dark mode
              </div>
              <div>
                <Switch
                  checked={theme === "dark"}
                  setChecked={() => {
                    setTheme(theme === "dark" ? "light" : "dark");
                  }}
                />
              </div>
            </li>
            {/* <li className="flex items-center justify-between h-[60px] bg-secondary-bg rounded-2 py-3 pr-3 pl-5">
              <div className="flex gap-2">
                <div className="">
                  <Svg iconName="line" />
                </div>
                {t("show_charts")}
              </div>
              <div>
                <Switch
                  checked={false}
                  setChecked={() => {
                    addToast("Show chart functionality is coming soon", "info");
                  }}
                />
              </div>
            </li> */}
            {/* <li className="flex items-center justify-between h-[60px] bg-secondary-bg rounded-2 py-3 pr-3 pl-5">
              <div className="flex gap-2">
                <div className="">
                  <Svg iconName="table" />
                </div>
                {t("show_table")}
              </div>
              <div>
                <Switch
                  checked={false}
                  setChecked={() => {
                    addToast("Show table functionality is coming soon", "info");
                  }}
                />
              </div>
            </li> */}
            {/* <li className="flex items-center justify-between h-[60px] bg-secondary-bg rounded-2 py-3 pr-3 pl-5">
              <div className="flex gap-2">
                <div className="">
                  <Svg iconName="sound" />
                </div>
                {t("sounds")}
              </div>
              <div>
                <Switch
                  checked={false}
                  setChecked={() => {
                    addToast(
                      "Toggle sounds functionality is coming soon",
                      "info"
                    );
                  }}
                />
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </Popover>
  );
}
