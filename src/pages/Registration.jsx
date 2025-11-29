import { useState, useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Country, State, City } from "country-state-city";
import { useNavigate, useLocation } from "react-router-dom";
import {
  isHindiLang,
  getHindiCountryLabel,
  getHindiStateLabel,
  getHindiCityLabel,
} from "../utils/locationLabels";

export default function Registration() {
  const { state } = useLocation();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isHindi = isHindiLang(i18n.language);

  // If user navigates directly to /register without selecting a service,
  // redirect them to the services page to choose a service first.
  useEffect(() => {
    if (!state?.selectedService) {
      navigate("/service", { replace: true });
    }
  }, [state, navigate]);

  // Calculate GST-inclusive price
  const calculateGSTPrice = (basePrice) => {
    const gst = Math.round(basePrice * 0.18);
    const totalPrice = basePrice + gst;
    return { basePrice, gst, totalPrice };
  };

  // If user navigates directly to /register there may be no service selected.
  // Use 0 as the default price so we don't show a misleading amount like ₹1.
  const servicePrice = Number(state?.price ?? 0);
  const { basePrice, gst, totalPrice } = calculateGSTPrice(servicePrice);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    dob: "",
    birthTime: "",
    country: "",
    state: "",
    city: "",
    amount: totalPrice, // Use GST-inclusive price (0 if no service selected)
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

    navigate("/payment", {
      state: {
        formData,
        ...state,
      },
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-600 via-indigo-600 to-pink-600"></div>

      <div className="w-full max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">
            {t("register")}
          </h2>
          <form onSubmit={submit} className="grid gap-6">
            <div>
              <label className="text-sm text-white/90">{t("fullname")}</label>
              <input
                className="p-3 border rounded bg-white/90 w-full"
                placeholder={t("fullname")}
                required
                value={formData.fullName}
                onChange={(e) => setField("fullName", e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm text-white/90">{t("phone")}</label>
              <input
                className="p-3 border rounded bg-white/90 w-full"
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
            </div>

            <div>
              <label className="text-sm text-white/90">{t("email")}</label>
              <input
                className="p-3 border rounded bg-white/90 w-full"
                placeholder={t("email")}
                type="email"
                required
                value={formData.email}
                onChange={(e) => setField("email", e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm text-white/90">{t("dob")}</label>
              <input
                className="p-3 border rounded bg-white/90 w-full"
                type="date"
                required
                value={formData.dob}
                onChange={(e) => setField("dob", e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm text-white/90">{t("BirthTime")}</label>
              <input
                className="p-3 border rounded bg-white/90 w-full"
                type="time"
                required
                value={formData.birthTime}
                onChange={(e) => setField("birthTime", e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm text-white/90">{t("location")}</label>
              <select
                className="p-3 border rounded bg-white/90 w-full"
                required
                value={formData.country}
                onChange={(e) => setField("country", e.target.value)}
              >
                <option value="">{t("country")}</option>
                {countries.map((c) => (
                  <option key={c.isoCode} value={c.isoCode}>
                    {isHindi ? getHindiCountryLabel(c.isoCode) : c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <select
                className="p-3 border rounded bg-white/90 w-full"
                required
                value={formData.state}
                onChange={(e) => setField("state", e.target.value)}
              >
                <option value="">{t("state")}</option>
                {states.map((s) => (
                  <option key={s.isoCode} value={s.isoCode}>
                    {isHindi
                      ? getHindiStateLabel(formData.country, s.isoCode)
                      : s.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <select
                className="p-3 border rounded bg-white/90 w-full"
                required
                value={formData.city}
                onChange={(e) => setField("city", e.target.value)}
              >
                <option value="">{t("city")}</option>
                {cities.map((ci) => (
                  <option key={ci.name} value={ci.name}>
                    {isHindi
                      ? getHindiCityLabel(ci.name)
                      : ci.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Service Summary */}
            {state?.selectedService && (
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30">
                <h3 className="text-lg font-semibold text-white mb-4">Service Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-white/90">
                    <span>Service:</span>
                    <span className="font-medium">{state.selectedService}</span>
                  </div>
                  <div className="flex justify-between text-white/90">
                    <span>Base Price:</span>
                    <span>₹{basePrice}</span>
                  </div>
                  <div className="flex justify-between text-white/90">
                    <span>GST (18%):</span>
                    <span>₹{gst}</span>
                  </div>
                  <div className="border-t border-white/30 pt-2">
                    <div className="flex justify-between text-white font-bold text-lg">
                      <span>Total Amount:</span>
                      <span className="text-yellow-300">₹{totalPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="bg-yellow-300 text-black py-3 rounded-xl font-semibold hover:scale-[1.02] transition w-full"
            >
              {t("proceed")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
