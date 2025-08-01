export const OrderSearchBar = () => {
  return (
    <div>
      <form class="max-w-md ">
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            size="25"
            className="block px-4 py-2 ps-10 text-sm text-gray-900  bg-white border border-gray-300"
            placeholder="Order ID or Transaction Id"
            required
          />
        </div>
      </form>
    </div>
  );
};
