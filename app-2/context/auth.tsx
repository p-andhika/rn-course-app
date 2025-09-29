import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export enum UserRole {
  Admin = "admin",
  User = "user",
  Guest = "guest",
}

type User = {
  name: string;
  email: string;
  role: UserRole;
};

type AuthContextType = {
  user: User | undefined;
  setUser: Dispatch<React.SetStateAction<User | undefined>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    setUser({ name: "Dhika", email: "dhika@gmail.com", role: UserRole.Guest });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("Please wrap the component with Auth Provider");
  }

  return context;
};
