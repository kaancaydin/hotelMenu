import type { MenuTypeProp } from "../types/menuType";

interface MenuProps {
  menu: MenuTypeProp;
  activeDir: string;
}
export const Menu = ({ menu, activeDir }: MenuProps) => {
  const activeCat = menu.menuler.find((cat) => cat.id === activeDir);

  if (!activeCat) return null;
  return (
    <div className="flex flex-col items-center justify-center font-playfair gap-1 mb-5">
      <img
        src={activeCat.image}
        alt={activeCat.id} loading="lazy"
        className="h-44 w-[95%] pt-1 max-w-md rounded-2xl object-cover shadow-md transition-transform duration-300 "
      />
      {activeCat.starttitle.tr && (
        <p className="mt-4 text-[#8b8b7a] text-xs tracking-[0.25em]">
          {activeCat.starttitle.tr}
        </p>
      )}

      <p className="text-[#2b2b2b] text-3xl font-semibold tracking-[0.4em] mt-1">
        {activeCat.title.tr}
      </p>
      <div className="w-50 h-0.5 bg-linear-to-r from-transparent via-[#C4A780] to-transparent mt-3" />
      <div className="font-poppins w-full max-w-xl px-2.5">

          {activeCat.items.map((item, i) => {
            return (
              <div key={i} className="mt-2.5">
                <div className="flex items-end w-full">
                  <span className="font-bold text-base text-zinc-900 whitespace-nowrap">
                    {item.name.tr}
                  </span>
                  <span className="grow border-b border-dotted border-zinc-400 mx-2 mb-1" />
                  <span className="font-bold text-base text-[#C4A780] whitespace-nowrap">
                    {item.price} ₺
                  </span>
                </div>
                <p className="text-sm text-zinc-600 mt-0.5 font-light ">
                  {item.about.tr}
                </p>
              </div>
            );
          })}

      </div>
      <div className="w-[95%] h-0.5 bg-[#F2EAE0] to-transparent rounded-2xl m-2" />
      <p className="text-center text-[#797874] font-playfair italic text-base w-[90%]">
        "Yemek yemek üstüne ne düşünürsünüz bilmem ama kahvaltının mutlulukla
        bir ilgisi olmalı"
      </p>
      <p className="text-[#CBB08E] tracking-wider italic uppercase">CEMAL SÜREYYA</p>
    </div>
  );
};
/* activeCat && (
  <div
    key={i}
    className="flex flex-col items-center justify-center font-playfair gap-1 mb-5"
  >
    <img
      src={cat.image}
      alt={cat.id}
      className="h-44 w-[95%] pt-1 max-w-md rounded-2xl object-cover shadow-md transition-transform duration-300 "
    />
    {cat.starttitle.tr && (
      <p className="mt-4 text-[#8b8b7a] text-xs tracking-[0.25em]">
        {cat.starttitle.tr}
      </p>
    )}

    <p className="text-[#2b2b2b] text-3xl font-semibold tracking-[0.4em] mt-1">
      {cat.title.tr}
    </p>
    <div className="w-50 h-0.5 bg-linear-to-r from-transparent via-[#C4A780] to-transparent mt-3 mb-1" />
    {activeCat.items.map((item, i) => {
      return (
        <div key={i} className="font-poppins w-full max-w-2xl text-[#2D2D2D]">
          <div>
            <div className="flex items-end w-full">
              <span className="font-bold text-base text-zinc-900 whitespace-nowrap">
                {item.name.tr}
              </span>
              <span className="grow border-b border-dotted border-zinc-400 mx-2 mb-1"></span>
              <span className="font-bold text-base text-[#C4A780] whitespace-nowrap">
                {item.price} ₺
              </span>
            </div>
            <p className="text-sm text-zinc-600 mt-0.5 font-light ">
              {item.about.tr}
            </p>
          </div>
        </div>
      );
    })}
    <div className="w-[95%] h-0.5 bg-[#F2EAE0] to-transparent rounded-2xl mb-1"></div>
    <p className="text-center text-[#797874] font-playfair italic text-base w-[90%]">
      "Yemek yemek üstüne ne düşünürsünüz bilmem ama kahvaltının mutlulukla bir
      ilgisi olmalı"
    </p>
    <p className="text-[#CBB08E] tracking-wider italic">CEMAL SÜREYYA</p>
  </div>
); */
