import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export interface IContext {
  menuIsOpened: boolean;
  setMenuIsOpened: Dispatch<SetStateAction<boolean>>;
}

const MenuContext = createContext<IContext | null>(null);

const MenuContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [menuIsOpened, setMenuIsOpened] = useState<boolean>(false);

  return (
    <MenuContext.Provider value={{ menuIsOpened, setMenuIsOpened }}>
      {children}
    </MenuContext.Provider>
  );
};

export { MenuContextProvider, MenuContext };
