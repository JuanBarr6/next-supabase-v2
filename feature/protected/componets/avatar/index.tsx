interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
}

export default function Avatar({ src, alt, className }: AvatarProps) {
  return (
    <>
      <img src={src} alt={alt} className={className} />
    </>
  );
}
