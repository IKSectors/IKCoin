import { Navbar, NavbarB, Welcome, Footer, Services, Transactions } from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <NavbarB />
      <Welcome />
      <Footer />
    </div>
    <div className="gradient-bg-welcome">
      </div>
    
    
  </div>
);
/*const View = () => {
  //const isGoal = props.isGoal;
  if (false) {
    return <Welcome />;
  }
  return <Services />;
}*/
//<Services /><Transactions />
export default App;
