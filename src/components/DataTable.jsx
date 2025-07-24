import { useEffect, useState } from "react";

export const DataTable = () => {
  const data = [
    {
      id: "1",
      oId: "#281209",
      status: "Successfull",
      tId: "TRX123456",
      rDate: "Today, 8:45 PM",
      amount: "₹1125.00",
    },
    {
      id: "2",
      oId: "#281209",
      status: "Processing",
      tId: "TRX123456",
      rDate: "Today, 8:45 PM",
      amount: "₹1125.00",
    },
    {
      id: "3",
      oId: "#281209",
      status: "Successfull",
      tId: "TRX123456",
      rDate: "Today, 8:45 PM",
      amount: "₹1125.00",
    },
    {
      id: "4",
      oId: "#281209",
      status: "Successfull",
      tId: "TRX123456",
      rDate: "Today, 8:45 PM",
      amount: "₹1125.00",
    },
    {
      id: "5",
      oId: "#281209",
      status: "Processing",
      tId: "TRX123456",
      rDate: "Today, 8:45 PM",
      amount: "₹1125.00",
    },
    {
      id: "6",
      oId: "#281209",
      status: "Processing",
      tId: "TRX123456",
      rDate: "Today, 8:45 PM",
      amount: "₹1125.00",
    },
    {
      id: "7",
      oId: "#281209",
      status: "Successfull",
      tId: "TRX123456",
      rDate: "Today, 8:45 PM",
      amount: "₹1125.00",
    },
    {
      id: "8",
      oId: "#281209",
      status: "Processing",
      tId: "TRX123456",
      rDate: "Today, 8:45 PM",
      amount: "₹1125.00",
    },
    {
      id: "9",
      oId: "#281209",
      status: "Processing",
      tId: "TRX123456",
      rDate: "Today, 8:45 PM",
      amount: "₹1125.00",
    },
    {
      id: "10",
      oId: "#281209",
      status: "Successfull",
      tId: "TRX123456",
      rDate: "Today, 8:45 PM",
      amount: "₹1125.00",
    },
  ];
  return (
    <>
      {data.map((x) => (
        <Table
          key={x.id}
          oId={x.oId}
          status={x.status}
          otID={x.tId}
          rDate={x.rDate}
          amount={x.amount}
        ></Table>
      ))}
    </>
  );
};
function Table({ oId, status, otID, rDate, amount }) {
  const [colour, setColour] = useState("green");

  useEffect(() => {
    if (status == "Processing") {
      setColour("gray");
    }
  }, [status]);
  return (
    <div className="flex justify-around p-4 rounded-sm m-2">
      <div className="text-primaryb">{oId}</div>
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full bg-${colour}-500`}></div>
        <div>{status}</div>
      </div>
      <div className="text-gray-600">{otID}</div>
      <div className="text-gray-600">{rDate}</div>
      <div>{amount}</div>
    </div>
  );
}
