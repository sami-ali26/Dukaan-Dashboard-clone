import { Buttons } from "./Buttons";
import { DataTable } from "./DataTable";
import { Header } from "./Header";
import { Middlebar } from "./Middlebar";
import { NextPayout } from "./NextPayout";
import { Orders } from "./Orders";
import { PendingProcess } from "./Pending&Processed";
import { RevenueCard } from "./RevenueCard";
import { ShortBar } from "./ShortBar";
export const RightBar = () => {
  return (
    <div className="col-span-10">
      <Header />
      <Middlebar />
      <NextPayout />
      <PendingProcess title={"Amount Pending"} amount={"93,312.20"} />
      <PendingProcess title={"Amount Processing"} amount={"23,92,312.19"} />
      <Buttons />
      <ShortBar />
      <Orders />
      <DataTable />
    </div>
  );
};
