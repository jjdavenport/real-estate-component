import UpperCard from "./components/upper-card";
import LowerCard from "./components/lower-card";

function App() {
  return (
    <>
      <div className="from-backgroundTop to-backgroundBottom flex h-full min-h-screen flex-col items-center justify-center bg-gradient-to-b p-6">
        <main className="md:max-w-screen-md">
          <UpperCard />
          <LowerCard />
        </main>
      </div>
    </>
  );
}

export default App;
