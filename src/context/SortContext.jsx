import React, {useState, createContext} from "react"

export const SortContext = createContext({
    sorted: "most-upvotes",
    setSorted: () => {}
  });
