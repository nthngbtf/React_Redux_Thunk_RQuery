import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";

import Button from "./Button";
import { GoPlus } from "react-icons/go";
import AlbumListItem from "./AlbumListItem";

function AlbumList({ user }) {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();
  //addAlbum is a function on the mutation
  //results is object from mutation

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isFetching) {
    content = <Skeleton times={3} className="h-10 w-full" />;
  } else if (error) {
    content = <div>Error Loading albums</div>;
  } else {
    content = data.map((albums) => {
      return <AlbumListItem key={albums.id} album={albums} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-sm font-bold md:ltext-lg">
          Albums for {user.name}
        </h3>
        <Button inlineBtn loading={results.isLoading} onClick={handleAddAlbum}>
          <GoPlus className="invisible  translate-x-6 transition-[all 0.3s ease] group-hover:visible group-hover:translate-x-0 group-active:transform-[scale(0.9)]  " />{" "}
          Add Album
        </Button>
      </div>
      <div className=" flex flex-row flex-wrap justify-center md:mx-8">
        <div>{content}</div>
      </div>
    </div>
  );
}

export default AlbumList;
