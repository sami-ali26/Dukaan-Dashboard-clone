export const RevenueCard = ({ title, orderCount, amount }) => {
  return (
    <div className="bg-white rounded shadow-md p-5">
      <div className="text-gray-700">{title}?</div>
      <div className="flex justify-between">
        <div className="text-2xl font-semibold"> ₹ {amount}</div>
        {orderCount ? (
          <div className="flex font-meduim">
            <div className="text-blue-700 underline">{orderCount} orders </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-blue-800"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
