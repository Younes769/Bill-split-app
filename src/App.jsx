import React from "react";
import { useState } from "react";
import Friends from "./Friends";
import Addfriends from "./Addfriends";
import Button from "./Button";
import Splitform from "./Splitform";

const initfriends = [
  {
    name: "younes",
    id: 17,
    pic: "https://i.pravatar.cc/150?img=17",
    balance: -10,
  },
  {
    name: "anfal",
    id: 16,
    pic: "https://i.pravatar.cc/150?img=16",
    balance: 10,
  },
  {
    name: "sarah",
    id: 10,
    pic: "https://i.pravatar.cc/150?img=10",
    balance: -12334,
  },
  {
    name: "mohamed",
    id: 9,
    pic: "https://i.pravatar.cc/150?img=9",
    balance: 0,
  },
  {
    name: "najib",
    id: 8,
    pic: "https://i.pravatar.cc/150?img=8",
    balance: 100,
  },
];

function App() {
  const [friends, setFriends] = useState(initfriends);
  const [showAddFriends, setShowAddFriends] = useState(false);
  const [selecFriend, setSelecFriend] = useState(null);

  const HandleAddFriendsClick = () => {
    setShowAddFriends((show) => !show);
  };

  function handleNewFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
    setShowAddFriends(false);
  }

  function handleSelectFriend(friend) {
    setSelecFriend((currentFriend) =>
      currentFriend?.id === friend.id ? null : friend
    );
  }

  function HandleSplit(value) {
    if (selecFriend) {
      setFriends((prevFriends) =>
        prevFriends.map((friend) =>
          friend.id === selecFriend.id
            ? { ...friend, balance: friend.balance + value }
            : friend
        )
      );
    }
  }

  return (
    <div className="app">
      <Friends
        friends={friends}
        onSelectFriend={handleSelectFriend}
        selecFriend={selecFriend}
      />

      <Button onClick={HandleAddFriendsClick}>
        {showAddFriends ? "Close" : "Add friends"}
      </Button>

      {showAddFriends && <Addfriends onAddFriend={handleNewFriend} />}
      {selecFriend && (
        <Splitform friend={selecFriend} onSplitBill={HandleSplit} />
      )}
    </div>
  );
}

export default App;
