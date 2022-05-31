import { createContext, useState } from "react";
import { TableData } from "../data";

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props)=>{
    const [employeeData] = useState([TableData]);

    return(
        <EmployeeContext.Provider value={employeeData}>
            {props.employeeData}
        </EmployeeContext.Provider>
    )
};

export default EmployeeContextProvider;