import Moviecard from "./Moviecard";
import Shimmer from "./Shimmer";

const MovieList = ({ title, movies }) => {
  return (
    <div className=" pl-2  ">
      <h2 className="font-bold text-3xl p-2 text-white">{title}</h2>
      {movies ? (
        <div className="overflow-x-scroll scrollbar-hide flex">
          <div className="flex  ">
            {movies.map((movie) => (
              <Moviecard key={movie.name} id={movie.id} poster={movie.poster_path} movie={movie} isWishList={false} />
            ))}
          </div>
        </div>
      ):<div className="overflow-x-scroll flex">
          {[...Array(5)].map((_, index) => (
    <Shimmer key={index} />
  ))}
        </div>}
    </div>
  );
};

export default MovieList;
