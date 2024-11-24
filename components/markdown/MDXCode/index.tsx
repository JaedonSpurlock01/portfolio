import { Code } from "bright";
import { code_theme_dark, code_theme_light } from "./code_theme.ts";

Code.theme = {
  light: code_theme_light,
  dark: code_theme_dark,
  lightSelector: '[data-color-theme="light"]',
};

export default function MDXCode({ children }: { children?: React.ReactNode }) {
  return <Code>{children}</Code>;
}
