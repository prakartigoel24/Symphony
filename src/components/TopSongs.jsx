import React from "react";
import ErrorComponent from "./ErrorComponent";
import Loader from "./Loader";
import SongCard from "./SongCard";
import { useGetTopSongsQuery } from "../redux/APIs/ShazamApi1";

const TopSongs = () => {
  const { data: topSongs, isFetching, isError } = useGetTopSongsQuery();

  if (isFetching) return <Loader />;

  if (isError) return <ErrorComponent />;

  return (
    <div className="flex flex-col w-fit ">
      <div className="flex flex-col m-4">
        <h2 className="font-bold text-center text-3xl mx-4 text-white lg:text-left mt-4 mb-10">
          Top Songs
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {topSongs?.tracks?.map((song, i) => (
            <SongCard key={song.key} song={song} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSongs;
