import type { ImageType } from "./image.types";

const Image = ({
  width,
  height,
  object,
  rounded,
  source,
  alt,
  shadow,
}: ImageType) => {
  return (
    <img
      src={source}
      alt={alt}
      className={`${width} ${height} ${object} ${rounded} ${shadow}`}
    />
  );
};

export default Image;
