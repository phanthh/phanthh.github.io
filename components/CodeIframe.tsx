export default function CodeIframe({
  src,
  width,
  height,
  scalew,
  scaleh
}: {
  src: string;
  width: number;
  height: number;
  scalew: number;
  scaleh: number;
}) {
  return (
    <div
      className="w-full hidden md:block rounded-lg overflow-hidden"
      style={{ height: height * scaleh }}
    >
      <iframe
        src={src}
        frameBorder="no"
        loading="lazy"
        scrolling="no"
        allowFullScreen={true}
        style={{
          transform: `scale(${scalew},${scaleh})`,
          transformOrigin: '0 0',
          width,
          height
        }}
      />
    </div>
  );
}
