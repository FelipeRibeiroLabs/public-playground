import "./App.css";
import { Navbar } from "./components/Navbar";
import { mockCollections } from "./data/mockNftCollections";

function App() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl text-center mt-20 font-bold">
          Top Collections
        </h1>
        <div className="flex gap-8">
          {mockCollections.data.map((collection) => {
            return (
              <div className="border border-white rounded p-8">
                <h2>{collection.name}</h2>
                <img src={collection.imageUrl} alt={collection.name} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
