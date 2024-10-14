"use client";

import { Moon, Sun } from "lucide-react";
import { useRouter } from "next/navigation";
// import { en } from "../../messages/en";
// import { ro } from "../../messages/ro";

export default function LanguageToggle() {
  const router = useRouter();
  const {} = router;
  //   const t = locale === "en" ? en : (ro as any);

  //   const changeLanguage = (e: any) => {
  //     const locale = e.target.value;
  //     router.push("/", "/", { locale });
  //   };

  return (
    // <button onMouseDown={() => setTheme(theme === "dark" ? "light" : "dark")}>
    //   <Sun
    //     size={24}
    //     className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
    //   />
    //   <Moon
    //     size={24}
    //     className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
    //   />
    // </button>
    <button>test</button>
  );
}
