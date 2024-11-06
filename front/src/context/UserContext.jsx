import { createContext } from "react";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";

const Context = createContext();

function UserProvider({ children }) {
  const { register } = useAuth();
  return <Context.Provider value={{ register }}>{children}</Context.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Context, UserProvider };
