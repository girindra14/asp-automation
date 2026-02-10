export const languages = {
  en: "English",
  id: "Indonesia",
  // tambahkan bahasa lain sesuai kebutuhan
} as const;

export type Language = keyof typeof languages;