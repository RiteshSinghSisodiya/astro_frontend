import isoCountries from "i18n-iso-countries";
import hiLocale from "i18n-iso-countries/langs/hi.json";
import Sanscript from "@indic-transliteration/sanscript";
import { State } from "country-state-city";

// Register Hindi locale for country names
isoCountries.registerLocale(hiLocale);

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
  "Puducherry": "पुदुचेरी",
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
  "Vadodara": "वडोदरा",
};

export function isHindiLang(lang) {
  return !!lang && String(lang).toLowerCase().startsWith("hi");
}

export function toHindiDevanagari(name) {
  if (!name) return "";
  const src = String(name)
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/aa/g, "A")
    .replace(/ee/g, "I")
    .replace(/ii/g, "I")
    .replace(/oo/g, "U")
    .replace(/uu/g, "U")
    .replace(/kh/g, "kh")
    .replace(/gh/g, "gh")
    .replace(/chh/g, "chh")
    .replace(/ch/g, "ch")
    .replace(/jh/g, "jh")
    .replace(/th/g, "th")
    .replace(/dh/g, "dh")
    .replace(/ph/g, "ph")
    .replace(/bh/g, "bh")
    .replace(/sh/g, "sh")
    .replace(/ai/g, "ai")
    .replace(/au/g, "au");
  const dev = Sanscript.t(src, "itrans", "devanagari", { syncope: true });
  return dev || "";
}

export function getHindiCountryLabel(isoCode) {
  if (!isoCode) return "";
  const hi = isoCountries.getName(isoCode, "hi");
  if (hi) return hi;
  const en = isoCountries.getName(isoCode, "en") || isoCode;
  return toHindiDevanagari(en);
}

export function getHindiStateLabel(countryIso, stateIso) {
  if (!countryIso || !stateIso) return "";
  const list = State.getStatesOfCountry(countryIso) || [];
  const st = list.find((s) => s.isoCode === stateIso);
  const en = st?.name || stateIso;
  return HI_STATE_BY_NAME[en] || toHindiDevanagari(en);
}

export function getHindiCityLabel(cityName) {
  if (!cityName) return "";
  return HI_CITY_BY_NAME[cityName] || toHindiDevanagari(cityName);
}