import nextI18nextConfig from "@root/next-i18next.config";
import styled from "styled-components";
import { useSwitchLanguage } from "../../hooks/useSwitchLanguage";
import { Button } from "@nextui-org/react";

const locales = nextI18nextConfig.i18n.locales;

function getLocaleName(locale: string) {
  switch (locale) {
    case "ja":
      return "日本語";
    default:
      return locale;
  }
}

export const SwitchLanguage = () => {
  const onSwitch = useSwitchLanguage();

  return (
    <Switch>
      {locales.map((locale) => (
        <Option key={locale} onClick={() => onSwitch(locale)}>
          {getLocaleName(locale)}
        </Option>
      ))}
    </Switch>
  );
};

const Switch = styled.div`
  display: flex;
  gap: 5px;
`;

const Option = styled(Button)`
  cursor: pointer;
`;
