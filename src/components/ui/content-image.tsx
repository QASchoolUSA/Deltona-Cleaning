import Image from "next/image";
import { cn } from "@/lib/utils";

type PageHeroImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  /** Overlay for text readability when used as full-bleed background */
  overlay?: boolean;
};

export function PageHeroImage({
  src,
  alt,
  priority = false,
  className,
  overlay = false,
}: PageHeroImageProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
      />
      {overlay && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-background/40"
          aria-hidden="true"
        />
      )}
    </div>
  );
}

type ContentImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  aspect?: "video" | "photo" | "wide";
};

const aspectClass = {
  video: "aspect-video",
  photo: "aspect-[4/3]",
  wide: "aspect-[16/9]",
} as const;

export function ContentImage({
  src,
  alt,
  priority = false,
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
  aspect = "photo",
}: ContentImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border bg-muted",
        aspectClass[aspect],
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}

type CardThumbProps = {
  src: string;
  alt: string;
  className?: string;
};

export function CardThumb({ src, alt, className }: CardThumbProps) {
  return (
    <div className={cn("relative aspect-[16/10] overflow-hidden bg-muted", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
      />
    </div>
  );
}
