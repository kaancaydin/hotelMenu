interface TitleProp {
  tr: string;
  en: string;
}

interface ItemProp {
  id: string;
  name: TitleProp;
  price: number;
  about: TitleProp;
}

export type IconKey = "coffee" | "egg" | "wine";

interface MenuCat {
  id: string;
  icon: IconKey;
  image:string;
  starttitle: TitleProp;
  title: TitleProp;
  items: ItemProp[];
}

export interface MenuTypeProp {
  menuler: MenuCat[];
}
