import { cn } from "@cn";
import { Button } from "@shadcn/button";
import { api } from "@/utility/backend/api";
import { useQuery } from "@tanstack/react-query";
// import { useTheme } from "./utility/providers/dark-mode";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { createLazyFileRoute } from '@tanstack/react-router';

async function fetchData() {
  const res = await api.events["data"].$post({
    json: {
      name: "carlo",
    },
  });
  const data = await res.json();
  return data;
}

export const Route = createLazyFileRoute('/home')({
  component: Home,
})

function Home() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation(["common", "games"]);
  const [currentLanguage, setCurrentLanguage] = useState(language);
  // const { setTheme } = useTheme();
  const { data, isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: fetchData,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en-GB" ? "it-IT" : "en-GB";
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };

  console.log(`🧊 ~ data: `, data);

  return (
    <div className={cn("md:bg-red-400-50 bg-red-700")}>
      Home
      <h3>Current Language: {currentLanguage}</h3>
      <p>{t("games:games")}</p>
      <Button onClick={() => changeLanguage("it-IT")}>{t("games:word")}</Button>
      <Button onClick={() => changeLanguage("en-GB")}>
        {t("games:games")}
      </Button>
      <Button onClick={() => handleChangeLanguage()}>Change Language</Button>
    </div>
  );
}

export default Home;
