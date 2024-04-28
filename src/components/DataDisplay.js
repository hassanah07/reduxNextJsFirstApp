"use client";
import { removeUser } from "@/redux/slices/newSlice";
// import { useAppSelector } from "@/redux/libs/hooks";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DataContainer from "./DataContainer";
import TableHeader from "./TableHeader";

const DataDisplay = () => {
  const userData = useSelector((data) => data.users);
  const dispatch = useDispatch();
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <TableHeader />
            </thead>
            <tbody>
              {userData.map((elem, index) => {
                return <DataContainer elem={elem} index={index} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DataDisplay;
