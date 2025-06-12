export default function ImageCustom({
  src = "",
  alt = "",
  className = "",
  ...props
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={"transition-all" + className ? " " + className : ""}
      style={{ filter: "blur(10px)" }}
      onLoad={(e) => {
        const img = e.target as HTMLImageElement;
        img.style.filter = "none";
      }}
      {...props}
    />
  );
}
