import { createLazyFileRoute } from "@tanstack/react-router";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@shadcn/select";
import { useTranslation } from "react-i18next";
import { useState } from "react";

// import { Moon, Sun } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { useTheme } from "@/components/theme-provider"

// export function ModeToggle() {
//   const { setTheme } = useTheme()

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="outline" size="icon">
//           <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//           <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//           <span className="sr-only">Toggle theme</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         <DropdownMenuItem onClick={() => setTheme("light")}>
//           Light
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("dark")}>
//           Dark
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("system")}>
//           System
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }

export const Route = createLazyFileRoute("/_authenticated/settings")({
  component: Settings,
});

function Settings() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation(["common"]);
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChangeLanguage = (newLanguage: string) => {
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };
  return (
    <main>
      <Select
        defaultValue={currentLanguage}
        onValueChange={handleChangeLanguage}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem key={"en-GB"} value="en-GB">
              Apple
            </SelectItem>
            <SelectItem key={"it-IT"} value="it-IT">
              Apple
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </main>
  );
}

{
  /* <Select onValueChange={handleChange} defaultValue={currentLocale}>
<SelectTrigger>
  <SelectValue />
</SelectTrigger>
<SelectContent>
  <SelectGroup>
    <SelectLabel>Languages</SelectLabel>
    {localeSelectItem}
  </SelectGroup>
</SelectContent>
</Select>
); */
}
