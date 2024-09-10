"use client";
import { createContext, useState } from "react";

type TSearchContextProvider = {
	children: React.ReactNode;
};

type TSearchContext = {
   searchQuery: string;
   // setSearchQuery: (value: string) => void;
	handleChangeSearchQuery: (newValue: string) => void;
};

export const SearchContext = createContext<TSearchContext | null>(
	null
);

export default function SearchContextProvider({
	children,
}: TSearchContextProvider) {
	//state
   const [searchQuery, setSearchQuery] = useState("");
   // console.log(searchQuery)

	//events
	const handleChangeSearchQuery = (newValue: string) => {
		setSearchQuery(newValue);
	};

	return (
		<SearchContext.Provider
			value={{
            searchQuery,
            // setSearchQuery,
				handleChangeSearchQuery,
			}}
		>
			{children}
		</SearchContext.Provider>
	);
}
