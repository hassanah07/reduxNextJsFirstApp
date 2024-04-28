import { useAppDispatch } from "@/redux/libs/hooks";
import { removeUser } from "@/redux/slices/newSlice";
import React from "react";

const DataContainer = ({ elem, index }) => {
  const dispatch = useAppDispatch();
  return (
    <tr key={index}>
      <td className="px-4 py-3">{elem.id}</td>
      <td className="px-4 py-3">{elem.name}</td>
      <td className="px-4 py-3">Demo Data</td>
      <td className="px-4 py-3 text-lg">Free</td>
      <td className="px-4 py-3 text-lg">
        <button
          className="btn bg-sky-500 py-1 px-2 font-semibold text-sm text-black"
          onClick={() => dispatch(removeUser(elem.id))}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default DataContainer;
