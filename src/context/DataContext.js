import { createContext, useState, useEffect } from "react";
import { questions } from "../data";
import { quesAndAns } from "../constants";


const DataContext = createContext({});



export const DataProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [qAa, setqAa] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
/*   const { data, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:3500/questions"
  ); */
  const [data, setData] = useState(quesAndAns || questions);

  useEffect(() => {
    console.log(data);
    setqAa(data);
  }, [data]);
   useEffect(() => {
    console.log("from here ");
    console.log(search);
        const searchqAa = qAa.filter(
          (qAa) =>
            qAa.question.toLowerCase().includes(search.toLowerCase()) ||
            qAa.askedBy.toLowerCase().includes(search.toLowerCase()) 

        );
        console.log(searchqAa);
        setSearchResults(searchqAa.reverse());
      }, [search, qAa]); 




  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        searchResults,
        qAa,
        setqAa,isOpen,setIsOpen
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
