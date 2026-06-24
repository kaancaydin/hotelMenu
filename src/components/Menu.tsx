import breakfastPhoto from "../assets/breakfast.jpg";

export const Menu = () => {
  return (
    <div className="flex flex-col items-center justify-center font-playfair gap-1 mb-5">
      <img
        src={breakfastPhoto}
        alt="breakfast photo"
        className="h-44 w-[95%] pt-1 max-w-md rounded-2xl object-cover shadow-md transition-transform duration-300 "
      />
      <p className="mt-4 text-[#8b8b7a] text-xs tracking-[0.25em]">
        Güne Başlarken,
      </p>

      <p className="text-[#2b2b2b] text-3xl font-semibold tracking-[0.4em] mt-1">
        KAHVALTI
      </p>
      <div className="w-50 h-0.5 bg-linear-to-r from-transparent via-[#C4A780] to-transparent mt-3 mb-1" />
      <div className="font-poppins w-full max-w-xl p-4 ">
        <div className="font-poppins w-full max-w-2xl text-[#2D2D2D]">
          <div>
            <div className="flex items-end w-full">
              <span className="font-bold text-base text-zinc-900 whitespace-nowrap">
                Variante Kahvaltı (2 Kişilik)
              </span>
              <span className="grow border-b border-dotted border-zinc-400 mx-2 mb-1"></span>
              <span className="font-bold text-base text-[#C4A780] whitespace-nowrap">
                1.375 ₺
              </span>
            </div>
            <p className="text-sm text-zinc-600 mt-0.5 font-light ">
              Peynir tabağı, bal&kaymak, zeytin çeşitleri, söğüş tabağı, güveçte
              yumurta, ekmek çeşitleri, 1 bardak sıcak ballı süt veya 2 fincan
              çay
            </p>
          </div>
          <div className="font-poppins w-full max-w-2xl mt-5 text-[#2D2D2D]">
            <div>
              <div className="flex items-end w-full">
                <span className="font-bold text-base text-zinc-900 whitespace-nowrap">
                  İzmir Kahvaltısı
                </span>
                <span className="grow border-b border-dotted border-zinc-400 mx-2 mb-1"></span>
                <span className="font-bold text-base text-[#C4A780] whitespace-nowrap">
                  400 ₺
                </span>
              </div>
              <p className="text-sm text-zinc-600 mt-0.5 font-light ">
                1 adet boyoz, İzmir tulumu, ceviz, haşlanmış yumurta, domates,
                salatalık, ev yapımı reçel ve 2 adet fincan çay
              </p>
            </div>
          </div>
          <div className="font-poppins w-full max-w-2xl mt-5 text-[#2D2D2D]">
            <div>
              <div className="flex items-end w-full">
                <span className="font-bold text-base text-zinc-900 whitespace-nowrap">
                  Menemen
                </span>
                <span className="grow border-b border-dotted border-zinc-400 mx-2 mb-1"></span>
                <span className="font-bold text-base text-[#C4A780] whitespace-nowrap">
                  200 ₺
                </span>
              </div>
              <p className="text-sm text-zinc-600 mt-0.5 font-light ">
                Kızarmış ekşi maya ekmeği ile
              </p>
            </div>
          </div>
          <div className="font-poppins w-full max-w-2xl mt-5 text-[#2D2D2D]">
            <div>
              <div className="flex items-end w-full">
                <span className="font-bold text-base text-zinc-900 whitespace-nowrap">
                  Güveçte Sucuklu&Kaşarlı Yumurta
                </span>
                <span className="grow border-b border-dotted border-zinc-400 mx-2 mb-1"></span>
                <span className="font-bold text-base text-[#C4A780] whitespace-nowrap">
                  345 ₺
                </span>
              </div>
              <p className="text-sm text-zinc-600 mt-0.5 font-light ">
                Tereyağı, kasap sucuk, iki adet yumurta üzerine kaşar peyniri
                ile
              </p>
            </div>
          </div>
          <div className="font-poppins w-full max-w-2xl mt-5 text-[#2D2D2D]">
            <div>
              <div className="flex items-end w-full">
                <span className="font-bold text-base text-zinc-900 whitespace-nowrap">
                  Ege Otlu Tulum Peynirli Omlet
                </span>
                <span className="grow border-b border-dotted border-zinc-400 mx-2 mb-1"></span>
                <span className="font-bold text-base text-[#C4A780] whitespace-nowrap">
                  325 ₺
                </span>
              </div>
              <p className="text-sm text-zinc-600 mt-0.5 font-light ">
                İzmir tulum peyniri, zeytinyağı, iki adet yumurta, mevsimlik ege
                otları
              </p>
            </div>
          </div>
          <div className="font-poppins w-full max-w-2xl mt-5 text-[#2D2D2D]">
            <div>
              <div className="flex items-end w-full">
                <span className="font-bold text-base text-zinc-900 whitespace-nowrap">
                  Variante Kahvaltı Salatası
                </span>
                <span className="grow border-b border-dotted border-zinc-400 mx-2 mb-1"></span>
                <span className="font-bold text-base text-[#C4A780] whitespace-nowrap">
                  475 ₺
                </span>
              </div>
              <p className="text-sm text-zinc-600 mt-0.5 font-light ">
                İzmir tulum peyniri, salatalık, domates, ceviz, ege
                yeşillikleri, yeşil biber, süt peyniri, kuru domates, kekik,
                zeytinyağı, kıtır gevrek ile
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[95%] h-0.5 bg-[#F2EAE0] to-transparent rounded-2xl mb-1"></div>
      <p className="text-center text-[#797874] font-playfair italic text-base w-[90%]">
        "Yemek yemek üstüne ne düşünürsünüz bilmem ama kahvaltının mutlulukla bir
        ilgisi olmalı"
      </p>
      <p className="text-[#CBB08E] tracking-wider italic">CEMAL SÜREYYA</p>
    </div>
  );
};
