import type { Lang, LangProps } from "../types/types";
import turkishFlag from "../assets/Flag_of_Turkey.svg";
import ukFlag from "../assets/Flag_of_the_United_Kingdom.svg";

export const LanguageMenu = ({
  isLangOpen,
  setLangOpen,
  lang,
  setLang,
}: LangProps) => {
  const languages: { code: Lang; name: string; flag: string }[] = [
    { code: "tr", name: "Türkçe", flag: turkishFlag },
    { code: "en", name: "English", flag: ukFlag },
  ];
  return (
    <div
      className={`
    absolute top-18 right-1 w-30 shadow-lg
    transition-all duration-300 ease-out 
    rounded-2xl bg-white overflow-hidden  border-2 border-[#C4A780]
    ${
      isLangOpen
        ? "opacity-100 translate-y-0"
        : "opacity-0 -translate-y-3 pointer-events-none"
    }
  `}
    >
      <ul className="font-poppins text-base">
        {languages.map((l) => (
          <li
            key={l.code}
            onClick={() => {
              setLang(l.code);
              setLangOpen(false);
            }}
            className={`
        flex items-center gap-3 px-4 py-3 cursor-pointer
        border-b border-[#C4A780] transition-all duration-200
        hover:bg-gray-100

        ${
          lang === l.code
            ? "font-bold text-[#CEA780] bg-[#F8F3ED]"
            : "font-medium"
        }
      `}
          >
            <img
              loading="lazy"
              decoding="async"
              src={l.flag}
              alt={l.name}
              className="w-6 h-6  rounded-md object-cover
              ring-1 ring-[#CEA780] border border-white 
              transition-transform duration-300 hover:scale-[1.01]"
            />
            {l.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
//sm:w-12 sm:h-12 flag
