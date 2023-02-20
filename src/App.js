import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="h-screen w-full relative">
        <div
          className="absolute top-[50%] left-[50%]
            translate-y-[-50%] translate-x-[-50%] "
        >
          <Card />
        </div>
      </main>
    </>
  );
}

export default App;
