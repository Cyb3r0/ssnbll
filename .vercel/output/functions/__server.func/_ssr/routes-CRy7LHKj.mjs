import { i as __toESM } from "../_runtime.mjs";
import { n as Slot, o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { a as SlidersHorizontal, c as Palette, i as SunMedium, n as ZoomOut, o as RotateCw, s as RotateCcw, t as ZoomIn } from "../_libs/lucide-react.mjs";
import { t as Drawer } from "../_libs/vaul.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/@radix-ui/react-slider+[...].mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/radix-ui__react-switch.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CRy7LHKj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var COLORS = [
	{
		id: "cyan",
		label: "سماوي سنبل",
		value: "#00B4FF"
	},
	{
		id: "ink",
		label: "حبر",
		value: "#14161A"
	},
	{
		id: "paper",
		label: "ورق",
		value: "#EEF1F5"
	},
	{
		id: "red",
		label: "رش أحمر",
		value: "#D63A32"
	},
	{
		id: "sand",
		label: "رمل",
		value: "#C4A574"
	},
	{
		id: "navy",
		label: "كحلي",
		value: "#1E3A68"
	}
];
var FINISHES = [
	{
		id: "gloss",
		label: "لمّاع"
	},
	{
		id: "matte",
		label: "مطفي"
	},
	{
		id: "metal",
		label: "معدني"
	},
	{
		id: "ceramic",
		label: "سيراميك"
	},
	{
		id: "chrome",
		label: "كروم"
	}
];
var LIGHT_PRESETS = [
	{
		id: "gallery",
		label: "معرض"
	},
	{
		id: "studio",
		label: "استوديو"
	},
	{
		id: "night",
		label: "ليلي"
	},
	{
		id: "neon",
		label: "نيون"
	}
];
var PRODUCTS = [
	{
		id: "can",
		nameAr: "علبة الرش الأيقونية",
		nameEn: "Signature Spray",
		series: "Walls Drop 01",
		price: 1280,
		edition: "47 / 200",
		height: "28 سم",
		blurb: "مجسم نحتي لعلبة الرش التي وُلدت منها الهوية. من الجدران إلى العوالم.",
		defaultColor: "cyan"
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
		defaultColor: "paper"
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
		defaultColor: "sand"
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
		defaultColor: "sand"
	}
];
var LIGHT_RIGS = {
	gallery: {
		key: 12,
		fill: 3.2,
		rim: 8,
		ambient: 1.4,
		keyColor: "#fff4e8",
		rimColor: "#00B4FF",
		fillColor: "#c5d4e2",
		bg: "#0e1116",
		exposure: 1.15
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
		exposure: 1.2
	},
	night: {
		key: 4.5,
		fill: 1.2,
		rim: 14,
		ambient: .45,
		keyColor: "#8eb6ff",
		rimColor: "#00B4FF",
		fillColor: "#3a4a62",
		bg: "#07080b",
		exposure: 1.05
	},
	neon: {
		key: 6,
		fill: 1.8,
		rim: 16,
		ambient: .7,
		keyColor: "#00B4FF",
		rimColor: "#D63A32",
		fillColor: "#3a2a3a",
		bg: "#0a0810",
		exposure: 1.12
	}
};
function physicalFor(finish, color) {
	const base = {
		color,
		roughness: .3,
		metalness: .08,
		clearcoat: 0,
		clearcoatRoughness: .25,
		envMapIntensity: 1,
		ior: 1.5,
		reflectivity: .5
	};
	switch (finish) {
		case "gloss": return {
			...base,
			roughness: .22,
			metalness: .08,
			clearcoat: .85,
			clearcoatRoughness: .12,
			envMapIntensity: 1.2
		};
		case "matte": return {
			...base,
			roughness: .88,
			metalness: 0,
			clearcoat: 0,
			envMapIntensity: .45,
			reflectivity: .12
		};
		case "metal": return {
			...base,
			roughness: .28,
			metalness: .82,
			clearcoat: .25,
			clearcoatRoughness: .3,
			envMapIntensity: 1.35
		};
		case "ceramic": return {
			...base,
			roughness: .32,
			metalness: .02,
			clearcoat: .85,
			clearcoatRoughness: .18,
			ior: 1.6,
			envMapIntensity: .9
		};
		case "chrome": return {
			...base,
			roughness: .04,
			metalness: 1,
			clearcoat: .4,
			clearcoatRoughness: .08,
			envMapIntensity: 1.8,
			reflectivity: 1
		};
	}
}
function colorValue(id) {
	return COLORS.find((c) => c.id === id)?.value ?? COLORS[0].value;
}
var useStudio = create()(persist((set) => ({
	productId: "can",
	finish: "gloss",
	colorId: "cyan",
	autoRotate: true,
	lightPreset: "gallery",
	lightIntensity: 1,
	resetToken: 0,
	zoomToken: 0,
	zoomDir: 1,
	setProduct: (productId) => set((s) => {
		return {
			productId,
			colorId: PRODUCTS.find((p) => p.id === productId)?.defaultColor ?? s.colorId
		};
	}),
	setFinish: (finish) => set({ finish }),
	setColor: (colorId) => set({ colorId }),
	setAutoRotate: (autoRotate) => set({ autoRotate }),
	setLightPreset: (lightPreset) => set({ lightPreset }),
	setLightIntensity: (lightIntensity) => set({ lightIntensity }),
	resetCamera: () => set((s) => ({ resetToken: s.resetToken + 1 })),
	zoomBy: (zoomDir) => set((s) => ({
		zoomToken: s.zoomToken + 1,
		zoomDir
	}))
}), {
	name: "snbl-art-studio",
	partialize: (s) => ({
		productId: s.productId,
		finish: s.finish,
		colorId: s.colorId,
		autoRotate: s.autoRotate,
		lightPreset: s.lightPreset,
		lightIntensity: s.lightIntensity
	})
}));
function formatSar(n) {
	return new Intl.NumberFormat("ar-SA", {
		style: "currency",
		currency: "SAR",
		maximumFractionDigits: 0
	}).format(n);
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,background-color,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg hover:bg-primary/90",
			outline: "border border-border bg-transparent text-fg hover:bg-elevated",
			ghost: "text-fg hover:bg-elevated",
			subtle: "bg-elevated text-fg hover:bg-elevated/80"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-xs",
			lg: "h-12 px-5",
			icon: "size-11",
			"icon-sm": "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Slider = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
	ref,
	className: cn("relative flex w-full touch-none select-none items-center", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
		className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-elevated",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-primary" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block size-4 rounded-full border border-primary bg-fg shadow-sm transition-transform duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 disabled:pointer-events-none" })]
}));
Slider.displayName = Slider$1.displayName;
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
	dir: "ltr",
	ref,
	className: cn("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-border transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 disabled:cursor-not-allowed disabled:opacity-40 data-[state=checked]:bg-primary data-[state=unchecked]:bg-elevated", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: "pointer-events-none block size-5 rounded-full bg-fg shadow-sm ring-0 transition-transform duration-150 ease-out data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0.5" })
}));
Switch.displayName = Switch$1.displayName;
var ProductCanvas = (0, import_react.lazy)(() => import("./product-canvas-DgpXBKjn.mjs"));
function SprayMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 48 48",
		className,
		"aria-hidden": "true",
		fill: "none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "48",
				height: "48",
				rx: "12",
				className: "fill-primary"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M18 36c0 1.2.9 2 2.1 2h8.2c1.2 0 2.1-.8 2.1-2V16.5c0-1-.7-1.8-1.7-2.1l-1.4-.4V11c0-1.4-1.2-2.5-2.6-2.5h-.8C22.4 8.5 21 9.6 21 11v3l-1.5.4c-1 .3-1.5 1.1-1.5 2.1V36Z",
				className: "fill-primary-fg"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M26.2 10.2h3.4c.6 0 1 .5 1 1.1v1.4h-4.4v-2.5Z",
				className: "fill-ink"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "34",
				cy: "14",
				r: "4.2",
				className: "fill-fg"
			})
		]
	});
}
function Header() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "flex items-center justify-between gap-4 border-b border-border px-4 py-3 md:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			dir: "ltr",
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SprayMark, { className: "size-11 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "leading-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl text-fg md:text-[1.85rem]",
					children: "SNBL ART"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-sans text-[11px] tracking-wide text-muted",
					children: "سنبل · FROM WALLS TO WORLDS"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "hidden max-w-xs text-end text-xs leading-relaxed text-muted md:block",
			children: "عارض المجسمات الرسمي — حرّك، كبّر، وغيّر الخامة كما في المعرض."
		})]
	});
}
function ProductThumb({ id, active }) {
	const fill = active ? "var(--color-primary)" : "var(--color-muted)";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 64 64",
		className: "size-12",
		"aria-hidden": "true",
		children: [
			id === "can" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "22",
				y: "14",
				width: "20",
				height: "36",
				rx: "6",
				fill
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "26",
				y: "6",
				width: "12",
				height: "10",
				rx: "3",
				fill,
				opacity: "0.7"
			})] }),
			id === "figure" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "18",
				r: "9",
				fill
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "22",
				y: "28",
				width: "20",
				height: "24",
				rx: "8",
				fill
			})] }),
			id === "bust" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "20",
				r: "10",
				fill
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 52c2-14 12-18 16-18s14 4 16 18H16Z",
				fill
			})] }),
			id === "cheetah" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M8 40c8-2 14-16 28-14 6 1 10 4 14 2l2 4c-6 4-8 6-12 8-2 8-6 14-10 14-4 0-4-8-6-12-8 2-16 4-18-2 2-2 2-2 2 0Z",
				fill
			})
		]
	});
}
function ProductRail() {
	const productId = useStudio((s) => s.productId);
	const setProduct = useStudio((s) => s.setProduct);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "flex flex-col gap-3 overflow-y-auto p-4 md:p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium tracking-wide text-muted",
			children: "المجموعة"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex gap-2 overflow-x-auto md:flex-col md:overflow-visible",
			children: PRODUCTS.map((p) => {
				const active = p.id === productId;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "min-w-48 md:min-w-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setProduct(p.id),
						className: cn("flex w-full items-center gap-3 rounded-xl border p-3 text-start transition-[background-color,border-color] duration-150 ease-out", active ? "border-primary/50 bg-elevated" : "border-border bg-transparent hover:bg-elevated/60"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-12 place-items-center rounded-lg bg-bg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductThumb, {
								id: p.id,
								active
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate text-sm font-medium",
								children: p.nameAr
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								dir: "ltr",
								className: "block font-latin text-[11px] text-muted",
								children: p.nameEn
							})]
						})]
					})
				}, p.id);
			})
		})]
	});
}
function SwatchRow() {
	const colorId = useStudio((s) => s.colorId);
	const setColor = useStudio((s) => s.setColor);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap gap-2",
		children: COLORS.map((c) => {
			const active = c.id === colorId;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				title: c.label,
				"aria-label": c.label,
				"aria-pressed": active,
				onClick: () => setColor(c.id),
				className: cn("size-9 rounded-full border transition-transform duration-150 ease-out", active ? "scale-110 border-fg" : "border-border hover:scale-105"),
				style: { backgroundColor: c.value }
			}, c.id);
		})
	});
}
function StudioControls() {
	const finish = useStudio((s) => s.finish);
	const setFinish = useStudio((s) => s.setFinish);
	const lightPreset = useStudio((s) => s.lightPreset);
	const setLightPreset = useStudio((s) => s.setLightPreset);
	const lightIntensity = useStudio((s) => s.lightIntensity);
	const setLightIntensity = useStudio((s) => s.setLightIntensity);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6 p-4 md:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-2 text-xs font-medium tracking-wide text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { className: "size-3.5" }), "الخامة"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-2",
					children: FINISHES.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setFinish(f.id),
						className: cn("h-10 rounded-lg border text-sm transition-colors duration-150 ease-out", finish === f.id ? "border-primary bg-primary text-primary-fg" : "border-border bg-transparent text-fg hover:bg-elevated"),
						children: f.label
					}, f.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-wide text-muted",
					children: "اللون"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwatchRow, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2 text-xs font-medium tracking-wide text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SunMedium, { className: "size-3.5" }), "الإضاءة"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-2",
						children: LIGHT_PRESETS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setLightPreset(p.id),
							className: cn("h-10 rounded-lg border text-sm transition-colors duration-150 ease-out", lightPreset === p.id ? "border-primary bg-primary text-primary-fg" : "border-border bg-transparent hover:bg-elevated"),
							children: p.label
						}, p.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2 pt-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-xs text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "الشدة" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-latin tabular-nums",
								dir: "ltr",
								children: [lightIntensity.toFixed(1), "×"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
							min: .4,
							max: 1.8,
							step: .05,
							value: [lightIntensity],
							onValueChange: (v) => setLightIntensity(v[0] ?? 1)
						})]
					})
				]
			})
		]
	});
}
function ProductMeta() {
	const productId = useStudio((s) => s.productId);
	const product = PRODUCTS.find((p) => p.id === productId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-x-0 bottom-0 p-3 md:p-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-auto max-w-md rounded-2xl border border-border bg-surface/85 p-3 backdrop-blur-sm md:p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-medium tracking-wide text-primary",
							children: product.series
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-0.5 text-lg font-semibold leading-tight md:mt-1 md:text-2xl",
							children: product.nameAr
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							dir: "ltr",
							className: "font-latin text-xs text-muted",
							children: product.nameEn
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-latin text-base font-semibold tabular-nums text-fg md:text-lg",
						dir: "ltr",
						children: formatSar(product.price)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 hidden text-sm leading-relaxed text-muted md:mt-3 md:block",
					children: product.blurb
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex flex-wrap gap-2 text-[11px] text-muted md:mt-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-full border border-border px-2.5 py-1",
							children: ["إصدار ", product.edition]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "hidden rounded-full border border-border px-2.5 py-1 sm:inline",
							children: ["الارتفاع ", product.height]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-border px-2.5 py-1",
							children: "قطعة محدودة"
						})
					]
				})
			]
		})
	});
}
function CameraDock() {
	const autoRotate = useStudio((s) => s.autoRotate);
	const setAutoRotate = useStudio((s) => s.setAutoRotate);
	const resetCamera = useStudio((s) => s.resetCamera);
	const zoomBy = useStudio((s) => s.zoomBy);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "subtle",
				size: "icon",
				"aria-label": "تكبير",
				onClick: () => zoomBy(-1),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomIn, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "subtle",
				size: "icon",
				"aria-label": "تصغير",
				onClick: () => zoomBy(1),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomOut, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "subtle",
				size: "icon",
				"aria-label": "إعادة الكاميرا",
				onClick: resetCamera,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ms-1 flex h-11 items-center gap-2 rounded-md bg-elevated px-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "size-4 text-muted" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs",
						children: "دوران تلقائي"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						dir: "ltr",
						checked: autoRotate,
						onCheckedChange: setAutoRotate,
						"aria-label": "دوران تلقائي"
					})
				]
			})
		]
	});
}
function Stage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative min-h-0 min-w-0 flex-1",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "snbl-stage relative h-full overflow-hidden rounded-xl bg-ink md:rounded-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
					fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-full place-items-center text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							children: "تجهيز المعرض…"
						})
					}),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCanvas, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductMeta, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "pointer-events-none absolute start-4 top-4 hidden rounded-full border border-border bg-surface/70 px-3 py-1 text-[11px] text-muted backdrop-blur-sm md:block",
					children: "اسحب للدوران · اقرص أو استخدم الأزرار للتكبير · نقرتان لإعادة الكاميرا"
				})
			]
		})
	});
}
function MobileDrawer() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Drawer.Root, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer.Trigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "subtle",
				className: "lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "size-4" }), "تخصيص"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Drawer.Portal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer.Overlay, { className: "fixed inset-0 z-40 bg-ink/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Drawer.Content, {
			className: "fixed inset-x-0 bottom-0 z-50 flex max-h-[85dvh] flex-col rounded-t-2xl border border-border bg-surface",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-3 h-1.5 w-12 rounded-full bg-elevated" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer.Title, {
					className: "px-5 pt-4 text-sm font-medium",
					children: "الاستوديو"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-h-0 overflow-y-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductRail, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioControls, {})]
				})
			]
		})] })]
	});
}
function AppShell() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-dvh flex-col bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[17.5rem_minmax(0,1fr)_18.5rem]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden border-e border-border lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductRail, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-h-0 flex-col gap-3 p-3 md:p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stage, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CameraDock, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileDrawer, {})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden overflow-y-auto border-s border-border lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioControls, {})
				})
			]
		})]
	});
}
var routes_exports = /* @__PURE__ */ __exportAll({ component: () => Home });
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {});
}
//#endregion
export { useStudio as a, physicalFor as i, LIGHT_RIGS as n, colorValue as r, routes_exports as t };
