import { useContext } from "react";
import ScrollContext from "../context/scroll-context";

export function useScrollContext() {
  return useContext(ScrollContext);
}
