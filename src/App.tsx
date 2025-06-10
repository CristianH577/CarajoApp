import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./views/Home";
import Programacion from "./views/Programacion";
import Apoyo from "./views/Apoyo";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[url('./assets/imgs/background.png')] bg-fixed bg-cover text-white max-[200px]:break-all">
      <Navbar />

      <main className="gap-6 max-w-5xl lg:self-center">
        <Home />

        <h1 className="font-bold text-3xl text-center font-['titulo']">
          El único medio NO ZURDO de Argentina
        </h1>

        <Programacion />

        <Apoyo />
      </main>

      <Footer />
    </div>
  );
}

export default App;
