import Header from "./Components/header";
import Entry from "./Components/Entry";
import data from "./data";

function App() {
  return (
    <>
      <Header />

      <main className="container">
        {data.map((entry) => (
          <Entry key={entry.title} {...entry} />
        ))}
      </main>
    </>
  );
}

export default App;