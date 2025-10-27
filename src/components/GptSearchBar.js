
import openai from "../hooks/useOpenai";
import { useRef, useState } from "react";
import { useDispatch,  } from "react-redux";
import {  options } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";


const GptSearchBar = () => {
  const [isLoading,setIsLoading] = useState(false)
  const dispatch = useDispatch();

  const searchText = useRef(null);


  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    setIsLoading(true)

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ".give only names of movies for movie recommendation system.give output like [pushpa,RRR,kalki,sanju,PK] nothing extra and remove array braces.give output as a string seperated by commas";

    const gptResults = await openai.chat.completions.create({
    model: "deepseek/deepseek-chat-v3-0324:free",
    messages: [
      {
        "role": "user",
        "content": gptQuery
      }
    ],
    
  });


  if (!gptResults.choices) {
    setIsLoading(false)
      return Error("api error")
    }




    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));


    const tmdbResults = await Promise.all(promiseArray);



    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
    setIsLoading(false)
}

  if(isLoading) return <h1 className="text-white">Loading...</h1>
    
  

  return (
    <div className=" pt-[13%] md:pt-[12%] flex justify-center">
      <form
        className="w-[80%] md:w-1/2  grid grid-cols-12 shadow-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" p-2 m-4 text-xs md:p-4 md:text-xl mr-0 col-span-9 outline-none rounded-l-md"
          placeholder={"Search Movie Recommendations"}
        />
        <button
          className="text-xs col-span-3 md:text-xl m-4 ml-0 py-2  bg-red-700  text-white rounded-r-xl "
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
