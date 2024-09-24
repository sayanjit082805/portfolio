import Image from "next/legacy/image";

export default function Banner({ src, alt }) {
  return (
    <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
      <Image
        src={`/banners/${src}.png`}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="rounded-xl"
      />
    </div>
  );
}
