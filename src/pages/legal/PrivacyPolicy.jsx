import PageShell from "../PageShell";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  const intro = t("privacy.intro");
  const sections = t("privacy.sections", { returnObjects: true });
  
  return (
    <PageShell title={t("legal.privacy_title")}>
      <div className="prose max-w-none text-white/80">
        <p className="text-white/90 text-lg leading-relaxed text-center">{intro}</p>
        <div className="space-y-6 mt-6">
          {sections?.map((sec, idx) => (
            <div key={idx} className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-6 rounded-xl border-l-4 border-yellow-400">
              <h2 className="text-2xl font-bold text-yellow-300 mb-4">{sec.title}</h2>
              {sec.paragraphs && sec.paragraphs.map((p, i) => (
                <p key={i} className="text-white/80 leading-relaxed">{p}</p>
              ))}
              {sec.bullets && (
                <ul className="list-disc pl-6 text-white/80 mt-3 space-y-1">
                  {sec.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
