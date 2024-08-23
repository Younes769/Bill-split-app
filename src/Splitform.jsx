import Button from "./Button";
import { useState } from "react";
export default function Splitform({ friend, onSplitBill }) {
  const [billValue, setBillValue] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const friendExpense = billValue ? billValue - yourExpense : "";
  const [payer, setPayer] = useState("You");
  function HandleSubmit(e) {
    e.preventDefault();
    if (!billValue || !yourExpense) return;
    onSplitBill(payer === "You" ? friendExpense : -yourExpense);
  }
  return (
    <div>
      <form className="form-split-bill" onSubmit={HandleSubmit}>
        <h2>Split bill with {friend.name}</h2>
        <label>Bill value</label>
        <input
          type="text"
          value={billValue}
          onChange={(e) => setBillValue(Number(e.target.value))}
        />
        <label>Your expense</label>
        <input
          type="text"
          value={yourExpense}
          onChange={(e) =>
            setYourExpense(
              Number(e.target.value) > billValue
                ? yourExpense
                : Number(e.target.value)
            )
          }
        />
        <label>{friend.name} expense</label>
        <input type="text" disabled value={friendExpense} />

        <label>Who is paying the bill</label>
        <select name="" id="" value={payer} onChange={(e)=>setPayer(e.target.value)}>
          <option value="you">You</option>
          <option value="friend">{friend.name}</option>
        </select>
        <Button children={"Split bill"}></Button>
      </form>
    </div>
  );
}
