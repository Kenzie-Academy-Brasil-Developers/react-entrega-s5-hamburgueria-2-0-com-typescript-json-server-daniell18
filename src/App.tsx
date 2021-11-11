import "./App.css";
import { CartProvider } from "./Provider/Cart";
import { LoginProvider } from "./Provider/LoginProvider";
import { Routes } from "./Routes";

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </LoginProvider>
    </div>
  );
}

export default App;
