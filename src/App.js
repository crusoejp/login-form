import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import Nav from "./components/Nav";

// we're providing chakra ui to the entire app
// we're also rendering the nav and login form components
// Nav is a simple component that displays a navigation bar
// LoginForm is a simple component that displays a login form
function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Nav />
        <LoginForm />
      </div>
    </ChakraProvider>
  );
}

export default App;
