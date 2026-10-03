import { useState } from "react";
import UserListItem from "./UserListItem";

import kazumaImg from "./usersImages/kazuma.jpg";
import aquaImg from "./usersImages/aqua.jpg";
import meguminImg from "./usersImages/megumin.jpg";
import darknessImg from "./usersImages/darkness.jpg";
import wizImg from "./usersImages/wiz.jpg";

const UsersList = () => {
  const [list, setList] = useState([
    {
      id: 1,
      firstName: "Kazuma",
      username: "isekaihero",
      age: 18,
      imgSrc: kazumaImg,
      isSelected: false,
    },
    {
      id: 2,
      firstName: "Aqua",
      username: "blessinggoddess",
      age: 634,
      imgSrc: aquaImg,
      isSelected: false,
    },
    {
      id: 3,
      firstName: "Megumin",
      username: "explosion_wizard",
      age: 18,
      imgSrc: meguminImg,
      isSelected: false,
    },
    {
      id: 4,
      firstName: "Darkness",
      username: "shieldhero",
      age: 25,
      imgSrc: darknessImg,
      isSelected: false,
    },
    {
      id: 5,
      firstName: "Wiz",
      username: "wizarddd",
      age: 555,
      imgSrc: wizImg,
      isSelected: false,
    },
  ]);

  const toggleSelect = (id) => {
    const newUsersList = list.map((u) => {
      if (u.id === id) {
        return { ...u, isSelected: !u.isSelected };
      }
      return u;
    });
    setList(newUsersList);
  };

  const removeUser = (id) => {
    const usersWitoutDeleted = list.filter((u) => id !== u.id);
    setList(usersWitoutDeleted);
  };

  return (
    <div>
      {list.map((user) => (
        <UserListItem
          key={user.id}
          user={user}
          onSelect={toggleSelect}
          onDelete={removeUser}
        />
      ))}
    </div>
  );
};

export default UsersList;
