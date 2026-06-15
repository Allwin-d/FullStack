import type { GenreType } from "./genre.types";

const Genre = ({ genre }: GenreType) => {
  return (
    <div className="flex flex-row space-x-4 text-xl">
      {genre.map((genre: string, id: number) => (
        <p
          className={`${
            id === 1
              ? "bg-red-300 text-red-700"
              : id === 2
                ? "bg-blue-300 text-blue-700"
                : "bg-green-300 text-green-700"
          } rounded-3xl px-3 font-medium`}
        >
          {genre}
        </p>
      ))}
    </div>
  );
};

export default Genre;
