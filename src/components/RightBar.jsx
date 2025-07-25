import { Buttons } from "./Buttons";
import { DataTable } from "./DataTable";
import { Header } from "./Header";
import { Middlebar } from "./Middlebar";
import { Middletext } from "./Middletext";
import { NextPayout } from "./NextPayout";
import { Orders } from "./Orders";
import { PendingProcess } from "./Pending&Processed";

import { ShortBar } from "./ShortBar";
export const RightBar = () => {
  return (
    <div className="col-span-2 md:col-span-10">
      <Header />
      <Middlebar />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <NextPayout />
        <PendingProcess
          title={"Amount Pending"}
          amount={"93,312.20"}
          order={"13 Orders"}
        />
        <PendingProcess title={"Amount Processing"} amount={"23,92,312.19"} />
      </div>
      <Middletext />
      <Buttons />
      <ShortBar />
      <Orders />
      <DataTable />
    </div>
  );
};
