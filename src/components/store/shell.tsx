import { lazy, Suspense, useState } from "react";
import {
  RotateCcw,
  ZoomIn,
  ZoomOut,
  SunMedium,
  Palette,
  RotateCw,
  SlidersHorizontal,
} from "lucide-react";
import { Drawer } from "vaul";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import {
  COLORS,
  FINISHES,
  LIGHT_PRESETS,
  PRODUCTS,
  formatSar,
  useStudio,
  type ProductId,
} from "@/lib/studio";

const ProductCanvas = lazy(() => import("@/components/viewer/product-canvas"));

function SprayMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <rect width="48" height="48" rx="12" className="fill-primary" />
      <path
        d="M18 36c0 1.2.9 2 2.1 2h8.2c1.2 0 2.1-.8 2.1-2V16.5c0-1-.7-1.8-1.7-2.1l-1.4-.4V11c0-1.4-1.2-2.5-2.6-2.5h-.8C22.4 8.5 21 9.6 21 11v3l-1.5.4c-1 .3-1.5 1.1-1.5 2.1V36Z"
        className="fill-primary-fg"
      />
      <path
        d="M26.2 10.2h3.4c.6 0 1 .5 1 1.1v1.4h-4.4v-2.5Z"
        className="fill-ink"
      />
      <circle cx="34" cy="14" r="4.2" className="fill-fg" />
    </svg>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-border px-4 py-3 md:px-6">
      <div dir="ltr" className="flex items-center gap-3">
        <SprayMark className="size-11 shrink-0" />
        <div className="leading-none">
          <p className="font-display text-2xl text-fg md:text-[1.85rem]">
            SNBL ART
          </p>
          <p className="mt-1 font-sans text-[11px] tracking-wide text-muted">
            سنبل · FROM WALLS TO WORLDS
          </p>
        </div>
      </div>
      <p className="hidden max-w-xs text-end text-xs leading-relaxed text-muted md:block">
        عارض المجسمات الرسمي — حرّك، كبّر، وغيّر الخامة كما في المعرض.
      </p>
    </header>
  );
}

function ProductThumb({ id, active }: { id: ProductId; active: boolean }) {
  const fill = active ? "var(--color-primary)" : "var(--color-muted)";
  return (
    <svg viewBox="0 0 64 64" className="size-12" aria-hidden="true">
      {id === "can" && (
        <>
          <rect x="22" y="14" width="20" height="36" rx="6" fill={fill} />
          <rect x="26" y="6" width="12" height="10" rx="3" fill={fill} opacity="0.7" />
        </>
      )}
      {id === "figure" && (
        <>
          <circle cx="32" cy="18" r="9" fill={fill} />
          <rect x="22" y="28" width="20" height="24" rx="8" fill={fill} />
        </>
      )}
      {id === "bust" && (
        <>
          <circle cx="32" cy="20" r="10" fill={fill} />
          <path d="M16 52c2-14 12-18 16-18s14 4 16 18H16Z" fill={fill} />
        </>
      )}
      {id === "cheetah" && (
        <path
          d="M8 40c8-2 14-16 28-14 6 1 10 4 14 2l2 4c-6 4-8 6-12 8-2 8-6 14-10 14-4 0-4-8-6-12-8 2-16 4-18-2 2-2 2-2 2 0Z"
          fill={fill}
        />
      )}
    </svg>
  );
}

function ProductRail() {
  const productId = useStudio((s) => s.productId);
  const setProduct = useStudio((s) => s.setProduct);

  return (
    <aside className="flex flex-col gap-3 overflow-y-auto p-4 md:p-5">
      <p className="text-xs font-medium tracking-wide text-muted">المجموعة</p>
      <ul className="flex gap-2 overflow-x-auto md:flex-col md:overflow-visible">
        {PRODUCTS.map((p) => {
          const active = p.id === productId;
          return (
            <li key={p.id} className="min-w-48 md:min-w-0">
              <button
                type="button"
                onClick={() => setProduct(p.id)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl border p-3 text-start transition-[background-color,border-color] duration-150 ease-out",
                  active
                    ? "border-primary/50 bg-elevated"
                    : "border-border bg-transparent hover:bg-elevated/60",
                )}
              >
                <span className="grid size-12 place-items-center rounded-lg bg-bg">
                  <ProductThumb id={p.id} active={active} />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-medium">{p.nameAr}</span>
                  <span dir="ltr" className="block font-latin text-[11px] text-muted">
                    {p.nameEn}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

function SwatchRow() {
  const colorId = useStudio((s) => s.colorId);
  const setColor = useStudio((s) => s.setColor);

  return (
    <div className="flex flex-wrap gap-2">
      {COLORS.map((c) => {
        const active = c.id === colorId;
        return (
          <button
            key={c.id}
            type="button"
            title={c.label}
            aria-label={c.label}
            aria-pressed={active}
            onClick={() => setColor(c.id)}
            className={cn(
              "size-9 rounded-full border transition-transform duration-150 ease-out",
              active
                ? "scale-110 border-fg"
                : "border-border hover:scale-105",
            )}
            style={{ backgroundColor: c.value }}
          />
        );
      })}
    </div>
  );
}

function StudioControls() {
  const finish = useStudio((s) => s.finish);
  const setFinish = useStudio((s) => s.setFinish);
  const lightPreset = useStudio((s) => s.lightPreset);
  const setLightPreset = useStudio((s) => s.setLightPreset);
  const lightIntensity = useStudio((s) => s.lightIntensity);
  const setLightIntensity = useStudio((s) => s.setLightIntensity);

  return (
    <div className="flex flex-col gap-6 p-4 md:p-5">
      <section className="space-y-3">
        <p className="flex items-center gap-2 text-xs font-medium tracking-wide text-muted">
          <Palette className="size-3.5" />
          الخامة
        </p>
        <div className="grid grid-cols-2 gap-2">
          {FINISHES.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFinish(f.id)}
              className={cn(
                "h-10 rounded-lg border text-sm transition-colors duration-150 ease-out",
                finish === f.id
                  ? "border-primary bg-primary text-primary-fg"
                  : "border-border bg-transparent text-fg hover:bg-elevated",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <p className="text-xs font-medium tracking-wide text-muted">اللون</p>
        <SwatchRow />
      </section>

      <section className="space-y-3">
        <p className="flex items-center gap-2 text-xs font-medium tracking-wide text-muted">
          <SunMedium className="size-3.5" />
          الإضاءة
        </p>
        <div className="grid grid-cols-2 gap-2">
          {LIGHT_PRESETS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setLightPreset(p.id)}
              className={cn(
                "h-10 rounded-lg border text-sm transition-colors duration-150 ease-out",
                lightPreset === p.id
                  ? "border-primary bg-primary text-primary-fg"
                  : "border-border bg-transparent hover:bg-elevated",
              )}
            >
              {p.label}
            </button>
          ))}
        </div>
        <div className="space-y-2 pt-1">
          <div className="flex items-center justify-between text-xs text-muted">
            <span>الشدة</span>
            <span className="font-latin tabular-nums" dir="ltr">
              {lightIntensity.toFixed(1)}×
            </span>
          </div>
          <Slider
            min={0.4}
            max={1.8}
            step={0.05}
            value={[lightIntensity]}
            onValueChange={(v) => setLightIntensity(v[0] ?? 1)}
          />
        </div>
      </section>
    </div>
  );
}

function ProductMeta() {
  const productId = useStudio((s) => s.productId);
  const product = PRODUCTS.find((p) => p.id === productId)!;

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 md:p-5">
      <div className="pointer-events-auto max-w-md rounded-2xl border border-border bg-surface/85 p-3 backdrop-blur-sm md:p-4">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-[11px] font-medium tracking-wide text-primary">
              {product.series}
            </p>
            <h1 className="mt-0.5 text-lg font-semibold leading-tight md:mt-1 md:text-2xl">
              {product.nameAr}
            </h1>
            <p dir="ltr" className="font-latin text-xs text-muted">
              {product.nameEn}
            </p>
          </div>
          <p className="font-latin text-base font-semibold tabular-nums text-fg md:text-lg" dir="ltr">
            {formatSar(product.price)}
          </p>
        </div>
        <p className="mt-2 hidden text-sm leading-relaxed text-muted md:mt-3 md:block">
          {product.blurb}
        </p>
        <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-muted md:mt-3">
          <span className="rounded-full border border-border px-2.5 py-1">
            إصدار {product.edition}
          </span>
          <span className="hidden rounded-full border border-border px-2.5 py-1 sm:inline">
            الارتفاع {product.height}
          </span>
          <span className="rounded-full border border-border px-2.5 py-1">
            قطعة محدودة
          </span>
        </div>
      </div>
    </div>
  );
}

function CameraDock() {
  const autoRotate = useStudio((s) => s.autoRotate);
  const setAutoRotate = useStudio((s) => s.setAutoRotate);
  const resetCamera = useStudio((s) => s.resetCamera);
  const zoomBy = useStudio((s) => s.zoomBy);

  return (
    <div className="flex items-center gap-2">
      <Button
        type="button"
        variant="subtle"
        size="icon"
        aria-label="تكبير"
        onClick={() => zoomBy(-1)}
      >
        <ZoomIn />
      </Button>
      <Button
        type="button"
        variant="subtle"
        size="icon"
        aria-label="تصغير"
        onClick={() => zoomBy(1)}
      >
        <ZoomOut />
      </Button>
      <Button
        type="button"
        variant="subtle"
        size="icon"
        aria-label="إعادة الكاميرا"
        onClick={resetCamera}
      >
        <RotateCcw />
      </Button>
      <div className="ms-1 flex h-11 items-center gap-2 rounded-md bg-elevated px-3">
        <RotateCw className="size-4 text-muted" />
        <span className="text-xs">دوران تلقائي</span>
        <Switch
          dir="ltr"
          checked={autoRotate}
          onCheckedChange={setAutoRotate}
          aria-label="دوران تلقائي"
        />
      </div>
    </div>
  );
}

function Stage() {
  return (
    <div className="relative min-h-0 min-w-0 flex-1">
      <div className="snbl-stage relative h-full overflow-hidden rounded-xl bg-ink md:rounded-2xl">
        <Suspense
          fallback={
            <div className="grid h-full place-items-center text-muted">
              <p className="text-sm">تجهيز المعرض…</p>
            </div>
          }
        >
          <ProductCanvas />
        </Suspense>
        <ProductMeta />
        <p className="pointer-events-none absolute start-4 top-4 hidden rounded-full border border-border bg-surface/70 px-3 py-1 text-[11px] text-muted backdrop-blur-sm md:block">
          اسحب للدوران · اقرص أو استخدم الأزرار للتكبير · نقرتان لإعادة الكاميرا
        </p>
      </div>
    </div>
  );
}

function MobileDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <Drawer.Root open={open} onOpenChange={setOpen}>
      <Drawer.Trigger asChild>
        <Button variant="subtle" className="lg:hidden">
          <SlidersHorizontal className="size-4" />
          تخصيص
        </Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-40 bg-ink/60" />
        <Drawer.Content className="fixed inset-x-0 bottom-0 z-50 flex max-h-[85dvh] flex-col rounded-t-2xl border border-border bg-surface">
          <div className="mx-auto mt-3 h-1.5 w-12 rounded-full bg-elevated" />
          <Drawer.Title className="px-5 pt-4 text-sm font-medium">
            الاستوديو
          </Drawer.Title>
          <div className="min-h-0 overflow-y-auto">
            <ProductRail />
            <StudioControls />
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

export function AppShell() {
  return (
    <div className="flex h-dvh flex-col bg-bg text-fg">
      <Header />
      <div className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[17.5rem_minmax(0,1fr)_18.5rem]">
        <div className="hidden border-e border-border lg:block">
          <ProductRail />
        </div>
        <div className="flex min-h-0 flex-col gap-3 p-3 md:p-4">
          <Stage />
          <div className="flex flex-wrap items-center justify-between gap-2">
            <CameraDock />
            <MobileDrawer />
          </div>
        </div>
        <div className="hidden overflow-y-auto border-s border-border lg:block">
          <StudioControls />
        </div>
      </div>
    </div>
  );
}
