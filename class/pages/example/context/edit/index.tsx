import WriterPage from "../../../../src/components/units/example/writer";
import { createContext } from "react";

interface IContext {
  isEdit?: boolean;
}

export const Editcontext = createContext<IContext>({});

export default function EditPage() {
  const value = {
    isEdit: true,
  };
  return (
    <>
      <Editcontext.Provider value={value}>
        <WriterPage />
      </Editcontext.Provider>
    </>
  );
}
