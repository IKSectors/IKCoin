import { Navbar, NavbarB, Welcome, Footer, Services, Transactions } from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Services />
      <Footer />
    </div>
    <div className="gradient-bg-welcome">
    <Welcome /></div>
    <Transactions />
    
  </div>
);

export default App;