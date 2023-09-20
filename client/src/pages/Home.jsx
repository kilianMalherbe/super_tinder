import TinderCard from "../components/TinderCard";
import SwipeButton from "../components/SwipeButton";

export default function Home() {
  return (
    <div className="h-full overflow-hidden">
      <div className="app_body">
        <TinderCard />
        <SwipeButton />
      </div>
    </div>
  );
}
