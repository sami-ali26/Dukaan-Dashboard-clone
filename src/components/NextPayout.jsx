export const NextPayout = () => {
  return (
    <div className="bg-primaryb text-white flex flex-col col-span-1 rounded-md gap-2 hover:bg-hoverbt m-5 sm:col-span-2 lg:col-span-1 ">
      <div className="text-md p-2">Next Payout</div>
      <div className="flex justify-between px-4">
        <div className="text-3xl font-semibold">₹2,312.23</div>
        <div className="underline text-md">23 Orders</div>
      </div>
      <div className="flex justify-between bg-hoverbt w-full opacity-90 p-2 rounded-sm">
        <div>Next Payment Date:</div>
        <div>Today, 4:00PM</div>
      </div>
    </div>
  );
};
