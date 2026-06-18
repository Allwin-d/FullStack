import type { ImageType } from "./image.types";

const Image = ({ width, height, object, rounded, source, alt }: ImageType) => {
  return (
    <img
      src={source}
      alt={alt}
      className={`${width} ${height} ${object} ${rounded}`}
    />
  );
};

export default Image;
