import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Authentication";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProtectedRoute from "./components/personal/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Home />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <MainLayout>
                <About />
              </MainLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <MainLayout>
                <Contact />
              </MainLayout>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

