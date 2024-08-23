import React from "react";
import { useState } from "react";
import Button from "./Button";
import Friends from "./Friends";
function Addfriends({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  function HandleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = { name, id, pic: `${image}?u=${id}`, balance: 0 };
    console.log(newFriend);
    onAddFriend(newFriend);
  }
  return (
    <div>
      <form className="form-add-friend" onSubmit={HandleSubmit}>
        <label>Friend:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(() => e.target.value)}
        />
        <label>Image:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(() => e.target.value)}
        />
        <Button children={"Add"}></Button>
      </form>
    </div>
  );
}
export default Addfriends;
