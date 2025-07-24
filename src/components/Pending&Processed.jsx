export const PendingProcess = ({ title, amount, order }) => {
  return (
    <div className="p-2">
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
