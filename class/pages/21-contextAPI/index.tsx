import ContextAPI from "../../src/components/units/21-contextAPI/ContextAPI.container";
import { createContext } from "react";

interface IContext {
  isEdit?: boolean;
}

export const AAAContext = createContext<IContext>({}); //글로벌스테이트

export default function ContextAPIPage() {
  const value = {
    isEdit: true,
  };

  return (
    <AAAContext.Provider value={value}>
      <ContextAPI />
    </AAAContext.Provider>
  );
}
