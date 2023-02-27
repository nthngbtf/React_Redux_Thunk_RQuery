import { GoAlert, GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk } from "../hooks/useThunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumList";

function UserListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };
  const header = (
    <>
      <Button inlineBtn loading={isLoading} onClick={handleClick}>
        <GoAlert className="hidden mr-1 translate-x-6 transition-[all 0.3s ease] group-hover:flex group-hover:translate-x-0 group-active:transform-[scale(0.9)]  " />
        <GoTrashcan />
      </Button>
      {error && <div>Error deleting user. </div>}
      {user.name}
    </>
  );
  return (
    <ExpandablePanel header={header}>
      <AlbumList user={user} />
    </ExpandablePanel>
  );
}

export default UserListItem;
