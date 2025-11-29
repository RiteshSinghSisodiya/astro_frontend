import { useState, useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Country, State, City } from "country-state-city";
import { useNavigate, useLocation } from "react-router-dom";
import isoCountries from "i18n-iso-countries";
import hiLocale from "i18n-iso-countries/langs/hi.json";

// Register Hindi locale for country names
isoCountries.registerLocale(hiLocale);

// Basic Hindi mappings for Indian states and common cities
const HI_STATE_BY_NAME = {
  "Andhra Pradesh": "आंध्र प्रदेश",
  "Arunachal Pradesh": "अरुणाचल प्रदेश",
  "Assam": "असम",
  "Bihar": "बिहार",
  "Chhattisgarh": "छत्तीसगढ़",
  "Goa": "गोवा",
  "Gujarat": "गुजरात",
  "Haryana": "हरियाणा",
  "Himachal Pradesh": "हिमाचल प्रदेश",
  "Jharkhand": "झारखंड",
  "Karnataka": "कर्नाटक",
  "Kerala": "केरल",
  "Madhya Pradesh": "मध्य प्रदेश",
  "Maharashtra": "महाराष्ट्र",
  "Manipur": "मणिपुर",
  "Meghalaya": "मेघालय",
  "Mizoram": "मिज़ोरम",
  "Nagaland": "नगालैंड",
  "Odisha": "ओडिशा",
  "Punjab": "पंजाब",
  "Rajasthan": "राजस्थान",
  "Sikkim": "सिक्किम",
  "Tamil Nadu": "तमिलनाडु",
  "Telangana": "तेलंगाना",
  "Tripura": "त्रिपुरा",
  "Uttar Pradesh": "उत्तर प्रदेश",
  "Uttarakhand": "उत्तराखंड",
  "West Bengal": "पश्चिम बंगाल",
  "Andaman and Nicobar Islands": "अंडमान और निकोबार द्वीपसमूह",
  "Chandigarh": "चंडीगढ़",
  "Dadra and Nagar Haveli and Daman and Diu": "दादरा और नगर हवेली और दमन और दीव",
  "Delhi": "दिल्ली",
  "Jammu and Kashmir": "जम्मू और कश्मीर",
  "Ladakh": "लद्दाख",
  "Lakshadweep": "लक्षद्वीप",
  "Puducherry": "पुदुचेरी"
};

const HI_CITY_BY_NAME = {
  "Delhi": "दिल्ली",
  "New Delhi": "नई दिल्ली",
  "Mumbai": "मुंबई",
  "Kolkata": "कोलकाता",
  "Chennai": "चेन्नई",
  "Bengaluru": "बेंगलुरु",
  "Bangalore": "बेंगलुरु",
  "Hyderabad": "हैदराबाद",
  "Pune": "पुणे",
  "Ahmedabad": "अहमदाबाद",
  "Jaipur": "जयपुर",
  "Lucknow": "लखनऊ",
  "Noida": "नोएडा",
  "Greater Noida": "ग्रेटर नोएडा",
  "Varanasi": "वाराणसी",
  "Kanpur": "कानपुर",
  "Patna": "पटना",
  "Bhopal": "भोपाल",
  "Indore": "इंदौर",
  "Surat": "सूरत",
  "Nagpur": "नागपुर",
  "Vadodara": "वडोदरा"
};

// Helper function to get Hindi names
function toHindiDevanagari(name, type) {
  if (!name) return "";
  if (type === "state") return HI_STATE_BY_NAME[name] || name;
  if (type === "city") return HI_CITY_BY_NAME[name] || name;
  return name;
}

export default function Registration() {
  const { state } = useLocation();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isHindi = i18n.language?.startsWith("hi");

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
                    {isHindi
                      ? isoCountries.getName(c.isoCode, "hi") || c.name
                      : c.name}
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
                      ? toHindiDevanagari(s.name, "state")
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
                      ? toHindiDevanagari(ci.name, "city")
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
