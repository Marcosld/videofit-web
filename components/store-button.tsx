import Image from "next/image";

type Props = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  width: number;
  height: number;
};

export const StoreButton = ({
  href,
  imageSrc,
  imageAlt,
  width,
  height,
}: Props) => (
  <a
    className="rounded-lg hover:scale-105 transition-transform hover:shadow-lg shadow-gray-800/60"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      className="rounded-lg hover:scale-105 transition-transform"
      src={imageSrc}
      alt={imageAlt}
      width={width}
      height={height}
      priority
    />
  </a>
);
