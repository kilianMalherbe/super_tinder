import TinderCard from "../components/TinderCard";
import SwipeButton from "../components/SwipeButton";

export default function Home() {
  return (
    <div className="h-full overflow-hidden">
      <div>
        <TinderCard />
        <SwipeButton />
      </div>
    </div>
  );
}
