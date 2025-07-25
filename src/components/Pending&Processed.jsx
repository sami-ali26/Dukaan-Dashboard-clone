export const PendingProcess = ({ title, amount, order }) => {
  return (
    <div className="p-2 shadow-sm m-5 col-span-1 sm:col-span-1 h-[100px] rounded-sm p-4 lg:col-span-1">
      <div>
        <div className="text-gray-700 text-lg">{title}</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="color-black text-2xl font-semibold">₹ {amount}</div>
        {order ? <div className="text-blue-800 underline">{order}</div> : null}
      </div>
    </div>
  );
};
