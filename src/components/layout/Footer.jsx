import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-6 py-6 text-center text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200">
      <p>{t("footer.hotline")} <strong className="text-gray-900 dark:text-gray-200">0 800 505 101</strong></p>
      <p className="mt-1">{t("footer.copyright")}</p>
    </footer>
  );
}
