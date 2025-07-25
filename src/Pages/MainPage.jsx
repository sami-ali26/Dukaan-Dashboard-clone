import { LeftBar } from "../components/LeftBar";
import { RightBar } from "../components/RightBar";

export const MainPage = () => {
  return (
    <div className="w-full  overflow-x-hidden grid grid-cols-2 md:grid-cols-12">
      <LeftBar />
      <RightBar />
    </div>
  );
};
