import Image from "next/legacy/image";
export default function Icon({ src }) {
  return (
    <div className="flex space-x-4">
      {src.map((src) => (
        <Image
          key={src}
          src={`/skills/${src}.svg`}
          alt={`${src}`}
          width={32}
          height={32}
        />
      ))}
    </div>
  );
}
