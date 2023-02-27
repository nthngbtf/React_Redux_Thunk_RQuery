import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "../components/Button";
import { GoPlus } from "react-icons/go";
import { useThunk } from "../hooks/useThunk";
import UserListItem from "./UserListItem";
import { useSort } from "../hooks/useSort";

function UsersList() {
  const [doFetchUser, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const { data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    doFetchUser();
  }, [doFetchUser]);

  const handleUserAdd = () => {
    doCreateUser();
  };
  //use for sorting the data
  const config = [
    {
      label: "data",
      sortValue: (data) => data.id,
      orderSort: "asc",
    },
  ];
  const value = [...data];
  const labelToSort = "data";

  const { sortedData } = useSort(value, config, labelToSort);

  let content;
  if (isLoadingUsers) {
    content = <Skeleton times={6} className="h-10 w-full" type={false} />;
  } else if (data.length === 0) {
    content = (
      <div className="flex items-center justify-center">
        <h3 className="text-xl">Please add user</h3>
      </div>
    );
  } else if (loadingUsersError) {
    content = <div>Error fecthing data...</div>;
  } else {
    content = sortedData.map((user) => {
      return <UserListItem key={user.id} user={user} />;
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button inlineBtn loading={isCreatingUser} onClick={handleUserAdd}>
          <GoPlus className="invisible  translate-x-6 transition-[all 0.3s ease] group-hover:visible group-hover:translate-x-0 group-active:transform-[scale(0.9)]  " />
          Add User
        </Button>
        {creatingUserError && "Error Creating user..."}
      </div>
      {content}
    </div>
  );
}

export default UsersList;
