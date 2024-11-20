import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Login from "./component/authentication/Login";
import { ProtectedRoute } from "./component/authentication/ProtectedRoute";
import Layout from "./component/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              // <ProtectedRoute>
              <Dashboard />
              // </ProtectedRoute>
            }
          />
          {/* <Route path="/login" element={<Login />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
