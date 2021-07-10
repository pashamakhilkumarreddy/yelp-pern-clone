import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./routes";

const App = () => {
  return (
    <>
      <Header />
      <main className="container mt-5">
        <Routes />
      </main>
      <Footer />
    </>
  );
};

export default App;
