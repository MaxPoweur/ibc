import { createContext, useContext } from "react";
import { defaultData, useData, UseData } from "./useData";

interface Props {
   children: React.ReactNode;
}

export const DataContext = createContext<UseData>(undefined!);

const DataProvider = ({ children }: Props) => {
   const { data, setData } = useData(defaultData);
   return (
      <DataContext.Provider value={{ data, setData }}>
         {children}
      </DataContext.Provider>
   );
};

const useDataContext = () => {
   return useContext(DataContext);
};

export { DataProvider, useDataContext };
