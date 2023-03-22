import { Locales } from "./locales.enum";

export interface DateTimeFormatOptions {
  locale: Locales | Locales[] | undefined,
  options: Intl.DateTimeFormatOptions,
}
