import { OrderSearchBar } from "./OrderSearchBar";

export const ShortBar = () => {
  return (
    <div className="flex justify-between items-center px-4 m-4">
      <div>
        <OrderSearchBar />
      </div>
      <div className="flex gap-2">
        <button class="flex items-center gap-3 border rounded-xs px-[14px] py-[6px] bg-white text-[#4D4D4D]">
          Short
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
              d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
            />
          </svg>
        </button>
        <button class="flex items-center gap-3 border rounded-xs px-[14px] py-[6px] bg-white text-[#4D4D4D]">
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
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
