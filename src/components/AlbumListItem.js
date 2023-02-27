import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoAlert, GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

function AlbumListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemove = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <Button
        className="mr-3"
        inlineBtn
        onClick={handleRemove}
        loading={results.isLoading}
      >
        <GoAlert className="invisible mr-1 translate-x-6 transition-[all 0.3s ease] group-hover:visible group-hover:translate-x-0 group-active:transform-[scale(0.9)]  " />
        <GoTrashcan className="mr-1" />
      </Button>
      {album.title}
    </>
  );
  return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotosList album={album} />
    </ExpandablePanel>
  );
}

export default AlbumListItem;
