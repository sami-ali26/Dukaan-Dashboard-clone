import { LeftBar } from "../components/LeftBar";
import { RightBar } from "../components/RightBar";

export const MainPage = () => {
  return (
    <div className="w-full grid grid-cols-2 lg:grid-cols-12 xl:grid-cols-14 2xl:grid-cols-16 overflow-x-hidden">
      <LeftBar />
      <RightBar />
    </div>
  );
};
