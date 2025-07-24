export const NextPayout = () => {
  return (
    <div className="bg-primaryb text-white flex flex-col gap-2 px-4 hover:bg-hoverbt">
      <div className="text-sm px-4">Next Payout</div>
      <div className="flex justify-between px-4">
        <div className="text-xl font-semibold">₹2,312.23</div>
        <div className="underline text-md">23 Orders</div>
      </div>
      <div className="flex justify-between bg-hoverbt opacity-90 px-4 rounded-t-sm">
        <div>Next Payment Date:</div>
        <div>Today, 4:00PM</div>
      </div>
    </div>
  );
};
