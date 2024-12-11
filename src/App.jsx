import UpperCard from "./components/upper-card";
import LowerCard from "./components/lower-card";

function App() {
  return (
    <>
      <div className="flex h-full min-h-screen flex-col justify-center bg-backgroundGreen p-6">
        <main>
          <UpperCard />
          <LowerCard />
        </main>
      </div>
    </>
  );
}

export default App;
