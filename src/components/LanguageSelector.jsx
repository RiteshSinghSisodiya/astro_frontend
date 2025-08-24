import { useTranslation } from 'react-i18next'

export default function LanguageSelector() {
  const { i18n } = useTranslation()
  return (
    <select
      className="p-2 bg-yellow-400 rounded text-sm text-black "
      value={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
    >
      <option value="en">English</option>
      <option value="hi">हिन्दी</option>
    </select>
  )
}
