import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as useTexture, c as useThree, i as OrbitControls, n as ContactShadows, o as Canvas, r as Environment, s as useFrame, t as Lightformer } from "../_libs/@react-three/drei+[...].mjs";
import { a as useStudio, i as physicalFor, n as LIGHT_RIGS, r as colorValue } from "./routes-CRy7LHKj.mjs";
import { H as Vector2, N as RepeatWrapping, P as SRGBColorSpace, U as Vector3, g as LatheGeometry, o as ClampToEdgeWrapping, x as MathUtils } from "../_libs/monogrid__gainmap-js+three.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-canvas-DgpXBKjn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BodyMaterial({ finish, color }) {
	const p = physicalFor(finish, color);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
		color: p.color,
		roughness: p.roughness,
		metalness: p.metalness,
		clearcoat: p.clearcoat,
		clearcoatRoughness: p.clearcoatRoughness,
		envMapIntensity: p.envMapIntensity,
		ior: p.ior,
		reflectivity: p.reflectivity
	});
}
function Drip({ position, rotation, color, finish, scale = 1 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position,
		rotation,
		scale,
		castShadow: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
			.035,
			.18,
			4,
			10
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BodyMaterial, {
			finish,
			color
		})]
	});
}
function CanLabel() {
	const label = useTexture("/textures/can-label.jpg");
	(0, import_react.useLayoutEffect)(() => {
		label.colorSpace = SRGBColorSpace;
		label.anisotropy = 8;
		label.wrapS = ClampToEdgeWrapping;
		label.wrapT = ClampToEdgeWrapping;
		label.needsUpdate = true;
	}, [label]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			0,
			.86,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
			.383,
			.403,
			.92,
			64,
			1,
			true
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
			map: label,
			color: "#ffffff",
			roughness: .4,
			metalness: .05,
			clearcoat: .35,
			side: 0
		})]
	});
}
function SprayCan({ finish, color }) {
	const capColor = finish === "chrome" ? color : "#141414";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.04,
				0
			],
			castShadow: true,
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.4,
				.38,
				.08,
				48
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BodyMaterial, {
				finish,
				color
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.86,
				0
			],
			castShadow: true,
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.38,
				.4,
				1.56,
				64
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BodyMaterial, {
				finish,
				color
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
			fallback: null,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CanLabel, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				1.66,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.38,
				48,
				24,
				0,
				Math.PI * 2,
				0,
				Math.PI / 2
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BodyMaterial, {
				finish,
				color
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				1.72,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.2,
				.22,
				.1,
				32
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BodyMaterial, {
				finish,
				color: "#1a1a1a"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				2.02,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.215,
				.225,
				.48,
				40
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BodyMaterial, {
				finish,
				color: capColor
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				2.26,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.215,
				32,
				16,
				0,
				Math.PI * 2,
				0,
				Math.PI / 2
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BodyMaterial, {
				finish,
				color: capColor
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				2.42,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.045,
				.055,
				.12,
				16
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
				color: "#2a2a2a",
				roughness: .3,
				metalness: .7
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				.09,
				2.46,
				0
			],
			rotation: [
				0,
				0,
				Math.PI / 2
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.03,
				.03,
				.1,
				12
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
				color: "#111",
				roughness: .25,
				metalness: .8
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				.12,
				2.18,
				.12
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.09,
				16,
				12
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
				color: "#00B4FF",
				roughness: .2,
				metalness: .1,
				clearcoat: 1
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drip, {
			position: [
				.39,
				1.15,
				.08
			],
			rotation: [
				0,
				0,
				.15
			],
			finish,
			color: "#00B4FF"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drip, {
			position: [
				-.12,
				1.28,
				.38
			],
			rotation: [
				.2,
				0,
				0
			],
			finish,
			color: "#00B4FF",
			scale: .75
		})
	] });
}
function Eye({ position }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
			.055,
			16,
			12
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
			color: "#111",
			roughness: .2
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				.018,
				.018,
				.04
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.016,
				8,
				8
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
				color: "#f5f5f5",
				roughness: .2
			})]
		})]
	});
}
function VinylFigure({ finish, color }) {
	const cloth = physicalFor(finish, color);
	const ghutra = physicalFor(finish, "#F4F6F8");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				-.12,
				.07,
				.04
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
				.07,
				.12,
				4,
				10
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
				color: "#111",
				roughness: .5
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				.12,
				.07,
				.04
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
				.07,
				.12,
				4,
				10
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
				color: "#111",
				roughness: .5
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				-.12,
				.28,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
				.09,
				.22,
				4,
				12
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", { ...cloth })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				.12,
				.28,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
				.09,
				.22,
				4,
				12
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", { ...cloth })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.72,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
				.28,
				.42,
				6,
				20
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", { ...cloth })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				-.36,
				.78,
				0
			],
			rotation: [
				0,
				0,
				.35
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
				.075,
				.32,
				4,
				12
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", { ...cloth })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				.36,
				.78,
				0
			],
			rotation: [
				0,
				0,
				-.35
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
				.075,
				.32,
				4,
				12
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", { ...cloth })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				.16,
				.82,
				.26
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circleGeometry", { args: [.07, 24] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
				color: "#00B4FF",
				roughness: .25,
				metalness: .2,
				clearcoat: 1
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				1.08,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.1,
				.12,
				.12,
				16
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
				color: "#d8b494",
				roughness: .55
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				1.38,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.32,
				40,
				32
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
				color: "#e0b894",
				roughness: .5,
				clearcoat: .15
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { position: [
			-.1,
			1.4,
			.26
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { position: [
			.1,
			1.4,
			.26
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				1.28,
				.29
			],
			rotation: [
				.4,
				0,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
				.07,
				.012,
				8,
				12,
				Math.PI
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", { color: "#5a3a32" })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				1.58,
				-.02
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.34,
				32,
				20,
				0,
				Math.PI * 2,
				0,
				Math.PI / 2
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", { ...ghutra })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				1.42,
				-.18
			],
			rotation: [
				.35,
				0,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.62,
				.42,
				.08
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", { ...ghutra })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				1.66,
				0
			],
			rotation: [
				Math.PI / 2,
				0,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
				.24,
				.035,
				10,
				28
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
				color: "#111",
				roughness: .4,
				metalness: .2
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				1.6,
				0
			],
			rotation: [
				Math.PI / 2,
				0,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
				.24,
				.03,
				10,
				28
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
				color: "#111",
				roughness: .4,
				metalness: .2
			})]
		})
	] });
}
function GalleryBust({ finish, color }) {
	const points = (0, import_react.useMemo)(() => [
		new Vector2(.02, 0),
		new Vector2(.32, .02),
		new Vector2(.3, .18),
		new Vector2(.42, .38),
		new Vector2(.5, .52),
		new Vector2(.22, .72),
		new Vector2(.14, .92),
		new Vector2(.13, 1.02)
	], []);
	const lathe = (0, import_react.useMemo)(() => new LatheGeometry(points, 48), [points]);
	const p = physicalFor(finish, color);
	const skin = finish === "chrome" || finish === "metal" ? color : "#d9b496";
	(0, import_react.useLayoutEffect)(() => () => lathe.dispose(), [lathe]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
			geometry: lathe,
			castShadow: true,
			receiveShadow: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", { ...p })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				1.32,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.28,
				40,
				32
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
				color: finish === "matte" || finish === "ceramic" ? color : skin,
				roughness: p.roughness,
				metalness: p.metalness,
				clearcoat: p.clearcoat,
				clearcoatRoughness: p.clearcoatRoughness
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				1.3,
				.22
			],
			rotation: [
				Math.PI / 2,
				0,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
				.055,
				.14,
				10
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
				...p,
				color: skin
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				1.5,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.3,
				32,
				18,
				0,
				Math.PI * 2,
				0,
				Math.PI / 1.7
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", { ...physicalFor(finish, "#F2F4F7") })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				1.56,
				0
			],
			rotation: [
				Math.PI / 2,
				0,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
				.22,
				.032,
				10,
				28
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
				color: "#111",
				roughness: .4,
				metalness: .25
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.01,
				0
			],
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ringGeometry", { args: [
				.34,
				.4,
				40
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
				color: "#00B4FF",
				roughness: .3,
				metalness: .4,
				emissive: "#00B4FF",
				emissiveIntensity: .25
			})]
		})
	] });
}
function CheetahLeg({ position, rotation, finish, color }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position,
		rotation,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				-.18,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
				.055,
				.28,
				4,
				10
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BodyMaterial, {
				finish,
				color
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				-.38,
				.04
			],
			rotation: [
				.6,
				0,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
				.04,
				.16,
				4,
				8
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BodyMaterial, {
				finish,
				color
			})]
		})]
	});
}
function Cheetah({ finish, color }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		rotation: [
			0,
			.4,
			0
		],
		position: [
			0,
			.52,
			0
		],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				rotation: [
					0,
					0,
					-.18
				],
				position: [
					0,
					.08,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
					.18,
					.85,
					8,
					20
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BodyMaterial, {
					finish,
					color
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					.38,
					.12,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.2,
					24,
					18
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BodyMaterial, {
					finish,
					color
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					.55,
					.22,
					0
				],
				rotation: [
					0,
					0,
					-.7
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
					.09,
					.22,
					6,
					12
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BodyMaterial, {
					finish,
					color
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					.72,
					.34,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.13,
					20,
					16
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BodyMaterial, {
					finish,
					color
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					.84,
					.3,
					0
				],
				rotation: [
					0,
					0,
					-Math.PI / 2
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
					.07,
					.16,
					10
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BodyMaterial, {
					finish,
					color
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					.68,
					.46,
					-.07
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
					.035,
					.08,
					8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BodyMaterial, {
					finish,
					color
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					.68,
					.46,
					.07
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
					.035,
					.08,
					8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BodyMaterial, {
					finish,
					color
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					-.55,
					.18,
					0
				],
				rotation: [
					0,
					0,
					.8
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
					.04,
					.55,
					4,
					10
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BodyMaterial, {
					finish,
					color
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					-.78,
					.48,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.055,
					12,
					10
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BodyMaterial, {
					finish,
					color
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheetahLeg, {
				position: [
					.32,
					-.02,
					.12
				],
				rotation: [
					.15,
					0,
					.4
				],
				finish,
				color
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheetahLeg, {
				position: [
					.32,
					-.02,
					-.12
				],
				rotation: [
					-.35,
					0,
					.15
				],
				finish,
				color
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheetahLeg, {
				position: [
					-.28,
					.02,
					.12
				],
				rotation: [
					-.5,
					0,
					-.2
				],
				finish,
				color
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheetahLeg, {
				position: [
					-.28,
					.02,
					-.12
				],
				rotation: [
					.25,
					0,
					-.45
				],
				finish,
				color
			})
		]
	});
}
function Pedestal() {
	const floor = useTexture("/textures/gallery-floor.jpg");
	(0, import_react.useLayoutEffect)(() => {
		floor.colorSpace = SRGBColorSpace;
		floor.wrapS = floor.wrapT = RepeatWrapping;
		floor.repeat.set(2, 2);
		floor.anisotropy = 8;
	}, [floor]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.05,
				0
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				1.28,
				1.34,
				.1,
				64
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
				map: floor,
				color: "#ffffff",
				roughness: .35,
				metalness: .25
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.11,
				0
			],
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ringGeometry", { args: [
				1.18,
				1.26,
				64
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
				color: "#00B4FF",
				roughness: .25,
				metalness: .5,
				emissive: "#00B4FF",
				emissiveIntensity: .35
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.005,
				0
			],
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circleGeometry", { args: [1.18, 64] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
				map: floor,
				color: "#ffffff",
				roughness: .28,
				metalness: .3
			})]
		})
	] });
}
function GalleryRoom({ bg }) {
	const wall = useTexture("/textures/graffiti-wall.jpg");
	const floor = useTexture("/textures/gallery-floor.jpg");
	const poster = useTexture("/brand/poster.jpg");
	const atelier = useTexture("/brand/atelier.png");
	(0, import_react.useLayoutEffect)(() => {
		wall.colorSpace = SRGBColorSpace;
		wall.wrapS = wall.wrapT = RepeatWrapping;
		wall.repeat.set(2.2, 1.4);
		wall.anisotropy = 8;
		floor.colorSpace = SRGBColorSpace;
		floor.wrapS = floor.wrapT = RepeatWrapping;
		floor.repeat.set(6, 6);
		floor.anisotropy = 8;
		poster.colorSpace = SRGBColorSpace;
		atelier.colorSpace = SRGBColorSpace;
	}, [
		wall,
		floor,
		poster,
		atelier
	]);
	const frame = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			position: [
				0,
				-.02,
				0
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [22, 22] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				map: floor,
				color: "#ffffff",
				roughness: .7
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				2.6,
				-4.6
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [16, 7.2] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				map: wall,
				color: "#ffffff",
				roughness: .85
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				-6.4,
				2.6,
				-1
			],
			rotation: [
				0,
				Math.PI / 2,
				0
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [10, 7.2] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: bg,
				roughness: .9
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				6.4,
				2.6,
				-1
			],
			rotation: [
				0,
				-Math.PI / 2,
				0
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [10, 7.2] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: bg,
				roughness: .9
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				0,
				2.35,
				-4.52
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [1.7, 2.55] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				map: poster,
				roughness: .45
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					0,
					-.03
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					1.86,
					2.72,
					.06
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					ref: frame,
					color: "#0d0f13",
					roughness: .4,
					metalness: .3
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				-6.32,
				2.1,
				-1.4
			],
			rotation: [
				0,
				Math.PI / 2,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [1.55, 2.2] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				map: atelier,
				roughness: .5
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					0,
					-.03
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					1.7,
					2.36,
					.06
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#0d0f13",
					roughness: .4,
					metalness: .3
				})]
			})]
		})
	] });
}
function ActiveProduct({ id, finish, color }) {
	switch (id) {
		case "can": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
			position: [
				0,
				.12,
				0
			],
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SprayCan, {
				finish,
				color
			})
		});
		case "figure": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
			position: [
				0,
				.12,
				0
			],
			scale: 1.08,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VinylFigure, {
				finish,
				color
			})
		});
		case "bust": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
			position: [
				0,
				.12,
				0
			],
			scale: 1.12,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryBust, {
				finish,
				color
			})
		});
		case "cheetah": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
			position: [
				0,
				.18,
				0
			],
			scale: 1.42,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cheetah, {
				finish,
				color
			})
		});
	}
}
var DEFAULT_CAM = new Vector3(1.85, 1.42, 3.15);
var DEFAULT_TARGET = new Vector3(0, 1.12, 0);
function CameraRig() {
	const controls = (0, import_react.useRef)(null);
	const autoRotate = useStudio((s) => s.autoRotate);
	const resetToken = useStudio((s) => s.resetToken);
	const zoomToken = useStudio((s) => s.zoomToken);
	const zoomDir = useStudio((s) => s.zoomDir);
	const { camera, gl } = useThree();
	(0, import_react.useEffect)(() => {
		const c = controls.current;
		if (!c) return;
		camera.position.copy(DEFAULT_CAM);
		c.target.copy(DEFAULT_TARGET);
		c.saveState();
		c.update();
	}, [camera]);
	(0, import_react.useEffect)(() => {
		if (resetToken === 0) return;
		controls.current?.reset();
	}, [resetToken]);
	(0, import_react.useEffect)(() => {
		if (zoomToken === 0) return;
		const c = controls.current;
		if (!c) return;
		const offset = camera.position.clone().sub(c.target);
		const dist = offset.length();
		const next = MathUtils.clamp(dist * (zoomDir < 0 ? .78 : 1.28), c.minDistance, c.maxDistance);
		offset.setLength(next);
		camera.position.copy(c.target).add(offset);
		c.update();
	}, [
		zoomToken,
		zoomDir,
		camera
	]);
	(0, import_react.useEffect)(() => {
		gl.domElement.style.touchAction = "none";
	}, [gl]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitControls, {
		ref: controls,
		makeDefault: true,
		enableDamping: true,
		dampingFactor: .08,
		autoRotate,
		autoRotateSpeed: .85,
		minDistance: 1.7,
		maxDistance: 7.2,
		minPolarAngle: .32,
		maxPolarAngle: Math.PI / 2.08,
		enablePan: false
	});
}
function CamFill({ intensity, color }) {
	const light = (0, import_react.useRef)(null);
	const { camera } = useThree();
	useFrame(() => {
		light.current?.position.copy(camera.position);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
		ref: light,
		intensity,
		color
	});
}
function Ibl() {
	const preset = useStudio((s) => s.lightPreset);
	const intensity = useStudio((s) => s.lightIntensity);
	const rig = LIGHT_RIGS[preset];
	const k = intensity;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Environment, {
		resolution: 256,
		environmentIntensity: .85 * k,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("color", {
				attach: "background",
				args: ["#d5dde6"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightformer, {
				intensity: 18 * k,
				position: [
					0,
					5,
					1
				],
				scale: [
					12,
					2,
					1
				],
				color: rig.keyColor
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightformer, {
				intensity: 8 * k,
				position: [
					-5,
					1.4,
					0
				],
				scale: 5,
				color: rig.rimColor
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightformer, {
				intensity: 7 * k,
				position: [
					5,
					2,
					3
				],
				scale: 4,
				color: rig.fillColor
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightformer, {
				intensity: 6 * k,
				position: [
					0,
					1.5,
					6
				],
				scale: [
					10,
					6,
					1
				],
				color: "#f2f5f8"
			})
		]
	});
}
function StudioLights() {
	const preset = useStudio((s) => s.lightPreset);
	const intensity = useStudio((s) => s.lightIntensity);
	const rig = LIGHT_RIGS[preset];
	const k = intensity;
	const { gl } = useThree();
	(0, import_react.useEffect)(() => {
		gl.toneMappingExposure = rig.exposure;
	}, [gl, rig.exposure]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", {
			intensity: rig.ambient * k,
			color: rig.fillColor
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hemisphereLight", { args: [
			rig.rimColor,
			"#2a241c",
			rig.fill * k
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				3.2,
				5.4,
				3.6
			],
			intensity: rig.key * k,
			color: rig.keyColor,
			castShadow: true,
			"shadow-mapSize": [1024, 1024],
			"shadow-bias": -25e-5,
			"shadow-camera-near": 1,
			"shadow-camera-far": 18,
			"shadow-camera-left": -4,
			"shadow-camera-right": 4,
			"shadow-camera-top": 4,
			"shadow-camera-bottom": -4
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				-3.4,
				2.4,
				-2.2
			],
			intensity: rig.rim * k,
			color: rig.rimColor
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("spotLight", {
			position: [
				.2,
				5.6,
				1.6
			],
			angle: .42,
			penumbra: .8,
			intensity: 40 * k,
			color: rig.keyColor,
			castShadow: true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CamFill, {
			intensity: 3.5 * k,
			color: rig.fillColor
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
			fallback: null,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ibl, {})
		})
	] });
}
function TexturedSet({ bg }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryRoom, { bg }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pedestal, {})] });
}
function Scene() {
	const productId = useStudio((s) => s.productId);
	const finish = useStudio((s) => s.finish);
	const colorId = useStudio((s) => s.colorId);
	const preset = useStudio((s) => s.lightPreset);
	const color = colorValue(colorId);
	const bg = LIGHT_RIGS[preset].bg;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("color", {
			attach: "background",
			args: [bg]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("fog", {
			attach: "fog",
			args: [
				bg,
				10,
				22
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioLights, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			position: [
				0,
				-.02,
				0
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [22, 22] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#1a1e26",
				roughness: .85
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.05,
				0
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				1.28,
				1.34,
				.1,
				48
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#2a303a",
				roughness: .4,
				metalness: .25
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
			fallback: null,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TexturedSet, { bg })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActiveProduct, {
			id: productId,
			finish,
			color
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactShadows, {
			position: [
				0,
				.12,
				0
			],
			opacity: .5,
			scale: 8,
			blur: 2.2,
			far: 3.5,
			color: "#000000"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CameraRig, {})
	] });
}
function ProductCanvas() {
	const [ready, setReady] = (0, import_react.useState)(false);
	const bg = useStudio((s) => LIGHT_RIGS[s.lightPreset].bg);
	(0, import_react.useEffect)(() => {
		setReady(true);
	}, []);
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Canvas, {
		className: "absolute inset-0 h-full w-full touch-none",
		camera: {
			position: DEFAULT_CAM.toArray(),
			fov: 34,
			near: .1,
			far: 40
		},
		dpr: [1, 1.75],
		shadows: true,
		gl: {
			antialias: true,
			toneMapping: 4,
			powerPreference: "high-performance"
		},
		style: { background: bg },
		onDoubleClick: () => useStudio.getState().resetCamera(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
			fallback: null,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scene, {})
		})
	});
}
//#endregion
export { ProductCanvas as default };
