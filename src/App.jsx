import TopBar from "./components/layout/TopBar";
import HirotaBanner from "./components/layout/HirotaBanner";
import About from "./components/about/About";
import Shop from "./components/shop/Shop";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <div className="px-2">
      <header>
        <TopBar />
      </header>

      <main className="h-screen md:overflow-hidden">
        <div
          className="
            grid 
            grid-cols-1 
            md:grid-cols-[1fr_2fr_1fr] 
            2xl:grid-cols-[0.7fr_2fr_5fr_2.7fr] 
            md:h-full 
            gap-2 
            min-h-0
          "
        >
          {/* Banner solo en 2xl */}
          <div className="hidden 2xl:block min-h-0">
            <HirotaBanner />
          </div>

          <About />

          <div className="hidden md:block min-h-0">
            <Shop />
          </div>

          <div className="hidden md:block min-h-0">
            <Cart />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
