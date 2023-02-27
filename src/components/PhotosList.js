import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";
import Button from "./Button";
import { GoPlus } from "react-icons/go";
import Skeleton from "./Skeleton";
import PhotosListitem from "./PhotosListitem";

function PhotosList({ album }) {
  const { data, isFetching, error } = useFetchPhotosQuery(album);
  const [addPhoto, resultsAddPhoto] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = <Skeleton times={3} className="h-10 w-10 mr-4" />;
  } else if (error) {
    content = <div>Error Loading albums</div>;
  } else {
    content = data.map((photo) => {
      return <PhotosListitem key={photo.id} photo={photo} />;
    });
  }
  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-sm font-bold md:text-lg ">
          Photos In {album.title}
        </h3>
        <Button
          inlineBtn
          loading={resultsAddPhoto.isLoading}
          onClick={handleAddPhoto}
        >
          <GoPlus className="invisible  translate-x-6 transition-[all 0.3s ease] group-hover:visible group-hover:translate-x-0 group-active:transform-[scale(0.9)]  " />{" "}
          Add Photo
        </Button>
      </div>
      <div className=" flex flex-row flex-wrap justify-center md:mx-8 md:max-w-xl md:min-w-[36rem]">
        {content}
      </div>
    </div>
  );
}

export default PhotosList;
