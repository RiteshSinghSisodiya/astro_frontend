import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Country, State, City } from "country-state-city";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    dob: "",
    birthTime: "",
    country: "",
    state: "",
    city: "",
    amount: 1,
  });

  const countries = useMemo(() => Country.getAllCountries(), []);
  const states = useMemo(
    () => State.getStatesOfCountry(formData.country),
    [formData.country]
  );
  const cities = useMemo(
    () => City.getCitiesOfState(formData.country, formData.state),
    [formData.country, formData.state]
  );

  const setField = (k, v) => setFormData((prev) => ({ ...prev, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    const allFilled = Object.values(formData).every(Boolean);
    if (!allFilled) return alert("Please fill all fields");

    navigate("/payment", { state: { formData } });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-600 via-indigo-600 to-pink-600"></div>

      <div className="max-w-xl w-full mx-auto px-4 py-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">
            {t("register")}
          </h2>
          <form onSubmit={submit} className="grid gap-4">
            <label className="text-sm text-white/90">{t("fullname")}</label>
            <input
              className="p-3 border rounded bg-white/90"
              placeholder={t("fullname")}
              required
              value={formData.fullName}
              onChange={(e) => setField("fullName", e.target.value)}
            />

            <label className="text-sm text-white/90">{t("phone")}</label>
            <input
              className="p-3 border rounded bg-white/90"
              placeholder={t("phone")}
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                if (value.length <= 10) {
                  setField("phone", value);
                }
              }}
              pattern="[0-9]{10}"
              title="Phone number must be 10 digits"
            />

            <label className="text-sm text-white/90">{t("email")}</label>
            <input
              className="p-3 border rounded bg-white/90"
              placeholder={t("email")}
              type="email"
              required
              value={formData.email}
              onChange={(e) => setField("email", e.target.value)}
            />

            <label className="text-sm text-white/90">{t("dob")}</label>
            <input
              className="p-3 border rounded bg-white/90"
              type="date"
              required
              value={formData.dob}
              onChange={(e) => setField("dob", e.target.value)}
            />

            <label className="text-sm text-white/90">{t("BirthTime")}</label>
            <input
              className="p-3 border rounded bg-white/90"
              type="time"
              required
              value={formData.birthTime}
              onChange={(e) => setField("birthTime", e.target.value)}
            />

            <label className="text-sm text-white/90">{t("location")}</label>
            <select
              className="p-3 border rounded bg-white/90"
              required
              value={formData.country}
              onChange={(e) => setField("country", e.target.value)}
            >
              <option value="">{t("country")}</option>
              {countries.map((c) => (
                <option key={c.isoCode} value={c.isoCode}>
                  {c.name}
                </option>
              ))}
            </select>

            <select
              className="p-3 border rounded bg-white/90"
              required
              value={formData.state}
              onChange={(e) => setField("state", e.target.value)}
            >
              <option value="">{t("state")}</option>
              {states.map((s) => (
                <option key={s.isoCode} value={s.isoCode}>
                  {s.name}
                </option>
              ))}
            </select>

            <select
              className="p-3 border rounded bg-white/90"
              required
              value={formData.city}
              onChange={(e) => setField("city", e.target.value)}
            >
              <option value="">{t("city")}</option>
              {cities.map((ci) => (
                <option key={ci.name} value={ci.name}>
                  {ci.name}
                </option>
              ))}
            </select>

            <button
              type="submit"
              className="bg-yellow-300 text-black py-3 rounded-xl font-semibold hover:scale-[1.02] transition"
            >
              {t("proceed")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
