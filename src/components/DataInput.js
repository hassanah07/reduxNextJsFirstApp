"use client";
import { useAppDispatch } from "@/redux/libs/hooks";
import { addUser } from "@/redux/slices/newSlice";
import React, { useState } from "react";

const DataInput = () => {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    }
  };
  const dispatch = useAppDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    console.log(name);
    dispatch(addUser(name));
  };
  return (
    <div className="p-4">
      <form action="" method="post">
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className="input h-10 bg-slate-600"
        />
        <br />
        <button
          onClick={handleClick}
          className="btn px-4 py-2 bg-red-700 mx-auto my-4"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default DataInput;
