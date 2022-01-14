import React, {useState, createContext} from "react"

export const CategoryContext = createContext({
    category: "all",
    setCategory: () => {}
  });
