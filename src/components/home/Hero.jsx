import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { useLanguage } from "../../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero-gradient relative overflow-hidden px-6 py-20 text-center">
      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-default mb-4">
          {t("hero.title")}
        </h1>
        <p className="text-base text-muted mb-4 max-w-xl mx-auto leading-relaxed opacity-80">
          {t("hero.subtitle")}
        </p>
        <p className="text-xl text-muted mb-8 max-w-xl mx-auto leading-relaxed">
          {t("hero.description")}
        </p>
        <div className="flex gap-4 justify-center items-center flex-wrap">
          <Link to="/test">
            <Button size="lg">
              {t("hero.buttons.test")}
            </Button>
          </Link>
          <Link to="/tracker">
            <Button variant="outline" size="lg">
              {t("hero.buttons.tracker")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
