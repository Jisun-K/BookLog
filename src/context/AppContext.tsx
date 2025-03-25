import { createContext, ReactNode, useContext, useState } from "react";
import { searchBooks } from "../api/bookApi";

interface AppContextType {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    searchKeyword: string;
    handleKeywordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (query: string) => void;
    searchResults: { id: number; title: string }[];
}

const defaultContextValue: AppContextType = {
    isOpen: true,
    setIsOpen: () => { },
    searchKeyword: '',
    handleKeywordChange: () => { },
    handleSubmit: () => { },
    searchResults: [],
}

const AppContext = createContext<AppContextType>(defaultContextValue);
export const useAppContext = () => useContext(AppContext);

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
    const [isOpen, setIsOpen] = useState(true);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleKeywordChange = (event: any) => {
        setSearchKeyword(event.target.value);
    };

    const handleSubmit = async (query: string) => {
        const results = await searchBooks(query);
        console.log("handleSubmit =========== >", results);
        // console.log("handleSubmit =========== >", query);
        setSearchResults(results);
    };

    return (
        <AppContext.Provider
            value={{
                isOpen,
                setIsOpen,
                searchKeyword,
                handleKeywordChange,
                handleSubmit,
                searchResults,
            }}>
            {children}
        </AppContext.Provider>
    );

}