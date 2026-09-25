import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ProductId = "can" | "figure" | "bust" | "cheetah";
export type Finish = "gloss" | "matte" | "metal" | "ceramic" | "chrome";
export type LightPreset = "gallery" | "studio" | "night" | "neon";

export type ColorOption = {
  id: string;
  label: string;
  value: string;
};

export type Product = {
  id: ProductId;
  nameAr: string;
  nameEn: string;
  series: string;
  price: number;
  edition: string;
  height: string;
  blurb: string;
  defaultColor: string;
};

export const COLORS: ColorOption[] = [
  { id: "cyan", label: "سماوي سنبل", value: "#00B4FF" },
  { id: "ink", label: "حبر", value: "#14161A" },
  { id: "paper", label: "ورق", value: "#EEF1F5" },
  { id: "red", label: "رش أحمر", value: "#D63A32" },
  { id: "sand", label: "رمل", value: "#C4A574" },
  { id: "navy", label: "كحلي", value: "#1E3A68" },
];

export const FINISHES: { id: Finish; label: string }[] = [
  { id: "gloss", label: "لمّاع" },
  { id: "matte", label: "مطفي" },
  { id: "metal", label: "معدني" },
  { id: "ceramic", label: "سيراميك" },
  { id: "chrome", label: "كروم" },
];

export const LIGHT_PRESETS: { id: LightPreset; label: string }[] = [
  { id: "gallery", label: "معرض" },
  { id: "studio", label: "استوديو" },
  { id: "night", label: "ليلي" },
  { id: "neon", label: "نيون" },
];

export const PRODUCTS: Product[] = [
  {
    id: "can",
    nameAr: "علبة الرش الأيقونية",
    nameEn: "Signature Spray",
    series: "Walls Drop 01",
    price: 1280,
    edition: "47 / 200",
    height: "28 سم",
    blurb: "مجسم نحتي لعلبة الرش التي وُلدت منها الهوية. من الجدران إلى العوالم.",
    defaultColor: "cyan",
  },
  {
    id: "figure",
    nameAr: "فيغر المجموعة",
    nameEn: "Collectible Figure",
    series: "Atelier Vinyl",
    price: 960,
    edition: "112 / 400",
    height: "22 سم",
    blurb: "شخصية فينيل بثوب وغترة، بروح المتجر وأسلوب الشارع.",
    defaultColor: "paper",
  },
  {
    id: "bust",
    nameAr: "تمثال المعرض",
    nameEn: "Gallery Bust",
    series: "Portrait Cast",
    price: 1840,
    edition: "19 / 80",
    height: "32 سم",
    blurb: "تمثال صدر منحوت للعرض في العلبة، بخامة تتحوّل من حجر إلى كروم.",
    defaultColor: "sand",
  },
  {
    id: "cheetah",
    nameAr: "فهد الجزيرة",
    nameEn: "Arabian Cheetah",
    series: "Wild Cast",
    price: 2140,
    edition: "08 / 50",
    height: "18 سم",
    blurb: "منحوتة الركض — قطعة غير مطلية تتحوّل مع الخامة والضوء.",
    defaultColor: "sand",
  },
];

export type LightRig = {
  key: number;
  fill: number;
  rim: number;
  ambient: number;
  keyColor: string;
  rimColor: string;
  fillColor: string;
  bg: string;
  exposure: number;
};

export const LIGHT_RIGS: Record<LightPreset, LightRig> = {
  gallery: {
    key: 12,
    fill: 3.2,
    rim: 8,
    ambient: 1.4,
    keyColor: "#fff4e8",
    rimColor: "#00B4FF",
    fillColor: "#c5d4e2",
    bg: "#0e1116",
    exposure: 1.15,
  },
  studio: {
    key: 16,
    fill: 5,
    rim: 4,
    ambient: 2.2,
    keyColor: "#ffffff",
    rimColor: "#e8eef4",
    fillColor: "#ffffff",
    bg: "#1c1f26",
    exposure: 1.2,
  },
  night: {
    key: 4.5,
    fill: 1.2,
    rim: 14,
    ambient: 0.45,
    keyColor: "#8eb6ff",
    rimColor: "#00B4FF",
    fillColor: "#3a4a62",
    bg: "#07080b",
    exposure: 1.05,
  },
  neon: {
    key: 6,
    fill: 1.8,
    rim: 16,
    ambient: 0.7,
    keyColor: "#00B4FF",
    rimColor: "#D63A32",
    fillColor: "#3a2a3a",
    bg: "#0a0810",
    exposure: 1.12,
  },
};

export type PhysicalProps = {
  color: string;
  roughness: number;
  metalness: number;
  clearcoat: number;
  clearcoatRoughness: number;
  envMapIntensity: number;
  ior: number;
  reflectivity: number;
};

export function physicalFor(finish: Finish, color: string): PhysicalProps {
  const base = {
    color,
    roughness: 0.3,
    metalness: 0.08,
    clearcoat: 0,
    clearcoatRoughness: 0.25,
    envMapIntensity: 1,
    ior: 1.5,
    reflectivity: 0.5,
  };
  switch (finish) {
    case "gloss":
      return {
        ...base,
        roughness: 0.22,
        metalness: 0.08,
        clearcoat: 0.85,
        clearcoatRoughness: 0.12,
        envMapIntensity: 1.2,
      };
    case "matte":
      return {
        ...base,
        roughness: 0.88,
        metalness: 0,
        clearcoat: 0,
        envMapIntensity: 0.45,
        reflectivity: 0.12,
      };
    case "metal":
      return {
        ...base,
        roughness: 0.28,
        metalness: 0.82,
        clearcoat: 0.25,
        clearcoatRoughness: 0.3,
        envMapIntensity: 1.35,
      };
    case "ceramic":
      return {
        ...base,
        roughness: 0.32,
        metalness: 0.02,
        clearcoat: 0.85,
        clearcoatRoughness: 0.18,
        ior: 1.6,
        envMapIntensity: 0.9,
      };
    case "chrome":
      return {
        ...base,
        roughness: 0.04,
        metalness: 1,
        clearcoat: 0.4,
        clearcoatRoughness: 0.08,
        envMapIntensity: 1.8,
        reflectivity: 1,
      };
  }
}

export function colorValue(id: string): string {
  return COLORS.find((c) => c.id === id)?.value ?? COLORS[0].value;
}

type StudioState = {
  productId: ProductId;
  finish: Finish;
  colorId: string;
  autoRotate: boolean;
  lightPreset: LightPreset;
  lightIntensity: number;
  resetToken: number;
  zoomToken: number;
  zoomDir: 1 | -1;
  setProduct: (id: ProductId) => void;
  setFinish: (finish: Finish) => void;
  setColor: (id: string) => void;
  setAutoRotate: (on: boolean) => void;
  setLightPreset: (preset: LightPreset) => void;
  setLightIntensity: (v: number) => void;
  resetCamera: () => void;
  zoomBy: (dir: 1 | -1) => void;
};

export const useStudio = create<StudioState>()(
  persist(
    (set) => ({
      productId: "can",
      finish: "gloss",
      colorId: "cyan",
      autoRotate: true,
      lightPreset: "gallery",
      lightIntensity: 1,
      resetToken: 0,
      zoomToken: 0,
      zoomDir: 1,
      setProduct: (productId) =>
        set((s) => {
          const product = PRODUCTS.find((p) => p.id === productId);
          return {
            productId,
            colorId: product?.defaultColor ?? s.colorId,
          };
        }),
      setFinish: (finish) => set({ finish }),
      setColor: (colorId) => set({ colorId }),
      setAutoRotate: (autoRotate) => set({ autoRotate }),
      setLightPreset: (lightPreset) => set({ lightPreset }),
      setLightIntensity: (lightIntensity) => set({ lightIntensity }),
      resetCamera: () => set((s) => ({ resetToken: s.resetToken + 1 })),
      zoomBy: (zoomDir) => set((s) => ({ zoomToken: s.zoomToken + 1, zoomDir })),
    }),
    {
      name: "snbl-art-studio",
      partialize: (s) => ({
        productId: s.productId,
        finish: s.finish,
        colorId: s.colorId,
        autoRotate: s.autoRotate,
        lightPreset: s.lightPreset,
        lightIntensity: s.lightIntensity,
      }),
    },
  ),
);

export function formatSar(n: number): string {
  return new Intl.NumberFormat("ar-SA", {
    style: "currency",
    currency: "SAR",
    maximumFractionDigits: 0,
  }).format(n);
}
