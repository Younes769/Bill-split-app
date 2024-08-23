import React from "react";
import Button from "./Button";

function Friends({ friends, onSelectFriend, selecFriend }) {
  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => {
          const isSelected = friend.id === selecFriend?.id;
          return (
            <li key={friend.id}>
              <img src={friend.pic} alt={friend.name} />
              <h3>{friend.name}</h3>
              <p
                style={{
                  color:
                    friend.balance < 0
                      ? "red"
                      : friend.balance > 0
                      ? "green"
                      : "black",
                }}
              >
                {friend.balance < 0
                  ? `You owe ${friend.name} ${Math.abs(friend.balance)}`
                  : friend.balance > 0
                  ? `${friend.name} owes you ${friend.balance}`
                  : `You and ${friend.name} are even`}
              </p>
              <Button onClick={() => onSelectFriend(friend)}>
                {isSelected ? "Close" : "Select"}
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Friends;
