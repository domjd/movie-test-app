import "./App.css";

import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import FilterBar from "./components/FilterBar";

function App() {
  return (
    <>
      <NavBar />
      <main className=" flex flex-col max-w-[1280px] m-auto justify-center">
        <FilterBar />
        <MovieList />
      </main>
    </>
  );
}

export default App;
