"use client";

import { cn } from "@/lib/utils";
import {
  DEFAULT_PRICING_CONFIG,
  type PricingConfig,
  type ServiceType,
  type SqftBand,
} from "@/lib/pricing";

function bedroomChoices(max: number) {
  return [
    { value: 0, label: "Studio" },
    ...Array.from({ length: max }, (_, i) => ({
      value: i + 1,
      label: i + 1 === max ? `${max}+` : String(i + 1),
    })),
  ];
}

function bathroomChoices(max: number) {
  return Array.from({ length: max }, (_, i) => ({
    value: i + 1,
    label: i + 1 === max ? `${max}+` : String(i + 1),
  }));
}

function Pill({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "min-w-[3rem] rounded-full px-3.5 py-2 text-xs font-medium transition-all sm:text-sm",
        selected
          ? "bg-primary text-primary-foreground shadow-sm"
          : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
      )}
    >
      {children}
    </button>
  );
}

export default function PropertyDetailsStep({
  serviceType,
  bedrooms,
  bathrooms,
  sqftBand,
  onBedroomsChange,
  onBathroomsChange,
  onSqftBandChange,
  config = DEFAULT_PRICING_CONFIG,
}: {
  serviceType: ServiceType;
  bedrooms: number;
  bathrooms: number;
  sqftBand: SqftBand | null;
  onBedroomsChange: (value: number) => void;
  onBathroomsChange: (value: number) => void;
  onSqftBandChange: (value: SqftBand | null) => void;
  config?: PricingConfig;
}) {
  const isResidential = serviceType === "residential";
  const BEDROOM_CHOICES = bedroomChoices(config.maxBedrooms);
  const BATHROOM_CHOICES = bathroomChoices(config.maxBathrooms);

  return (
    <div className="space-y-5">
      {isResidential && (
        <div>
          <p className="mb-3 text-sm font-medium text-foreground">How many bedrooms?</p>
          <div className="flex flex-wrap gap-2">
            {BEDROOM_CHOICES.map((choice) => (
              <Pill
                key={choice.value}
                selected={bedrooms === choice.value}
                onClick={() => onBedroomsChange(choice.value)}
              >
                {choice.label}
              </Pill>
            ))}
          </div>
        </div>
      )}

      <div>
        <p className="mb-3 text-sm font-medium text-foreground">
          {isResidential ? "How many bathrooms?" : "How many restrooms?"}
        </p>
        <div className="flex flex-wrap gap-2">
          {BATHROOM_CHOICES.map((choice) => (
            <Pill
              key={choice.value}
              selected={bathrooms === choice.value}
              onClick={() => onBathroomsChange(choice.value)}
            >
              {choice.label}
            </Pill>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-foreground">
          Approximate square footage{" "}
          <span className="font-normal text-muted-foreground">(optional)</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {config.sqftBands.map((band) => (
            <Pill
              key={band.key}
              selected={sqftBand === band.key}
              onClick={() => onSqftBandChange(band.key)}
            >
              {band.label}
            </Pill>
          ))}
          <Pill selected={sqftBand === null} onClick={() => onSqftBandChange(null)}>
            Not sure
          </Pill>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Not sure? Skip it — we&apos;ll confirm the size when we call.
        </p>
      </div>
    </div>
  );
}
