import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeList from "./Components/EmployeeList";
import EmployeeContextProvider from "./Context/EmployeeContext";

function App() {
  return (
    <>
      <EmployeeContextProvider>
        <EmployeeList />
      </EmployeeContextProvider>
    </>
  );
}

export default App;
