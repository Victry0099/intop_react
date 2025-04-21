import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto">
        <Skeleton height={200} className="mb-4" />
        <Skeleton count={3} className="mb-2" />
      </div>
    </div>
  );
};
export default Loading;
