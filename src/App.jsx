import TopBar from "./components/layout/TopBar"
import About from "./components/sections/About"
import Shop from "./components/sections/Shop"
import Cart from "./components/sections/Cart"

function App() {
  return (
    <div className="px-2">
      <header>
        <TopBar />
      </header>

      <main className="h-screen md:overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] md:h-full gap-2">
          <About />
          <Shop />
          <Cart />
        </div>
      </main>
    </div>
  );
}

export default App