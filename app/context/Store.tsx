"use client";

import React, {
  useEffect,
  createContext,
  useContext,
  useReducer,
  useCallback,
} from "react";

/**
 * Function returning all the tools that children component will inherit when using the context.
 */
function createAuthTools(): {
  //function to set token state variable, exported to child components so that they can call it when the token is fetched back from GraphQL
  //   setToken: (token: string) => void;
  //function to set userId state variable, exported to child components so that they can call it when the userId is fetched back from GraphQL
  setUserId: (userId: string) => void;
  //function to set entityId state variable, exported to child components so that they can call it when the entityId is fetched back from GraphQL
  setOwnedEntityId: (entityId: string) => void;
  //function to set userId state variable, exported to child components so that they can call it when the userId is fetched back from GraphQL
  //   contextSignOut: () => void;
  //userId state variable, exported to child components so that they can call it when the userId is fetched back from GraphQL
  userId: string;
  //   token: string;
  ownedEntityId: string;
} {
  /**
   * On every render of context, we check first if we have values for token and userId in local storage
   */
  useEffect(() => {
    //In case we have user infos in local storage we store them in context
    const userIdInLocalStorage = JSON.parse(localStorage.getItem("user"));
    const entityIdInLocalStorage = JSON.parse(localStorage.getItem("entityId"));

    if (userIdInLocalStorage) {
      setUserId(userIdInLocalStorage);
    }
    if (entityIdInLocalStorage) {
      setOwnedEntityId(entityIdInLocalStorage);
    }
  }, []);

  /**
   * Format for how the state (which contains token and userId variables) should be
   */
  type logInState = {
    // token: string;
    userId: string;
    ownedEntityId: string;
  };

  /**
   * Format for which actions are allowed to modify our state variables ( token and userId ) should be
   */
  type logInActions =
    | {
        type: "setUserId";
        payload: string;
      }
    | {
        type: "setOwnedEntityId";
        payload: string;
      };
  // | {
  //     type: "setToken";
  //     payload: string;
  //   }
  // | {
  //     type: "signOut";
  //   };

  /**
   * use to store email when user inputs his email. useReducer uses dispatch instead of setState,
   * so if you want to change the info contained in email or password states,
   * you call dispatch (in setEmail or setPassword for example)
   */
  const [{ userId, ownedEntityId }, dispatch] = useReducer(
    (state: logInState, action: logInActions) => {
      switch (action.type) {
        // case "setToken":
        //   return { ...state, token: action.payload };
        case "setUserId":
          return { ...state, userId: action.payload };
        case "setOwnedEntityId":
          return { ...state, ownedEntityId: action.payload };
        // case "signOut":
        //   return { ...state, userId: "", token: "", ownedEntityId: "" };
      }
    },
    {
      //   token: "",
      userId: "", // initial state is an observer
      ownedEntityId: "",
    }
  );

  /**
   * Setter function for userId state variable
   */
  //   const setToken = useCallback((token: string) => {
  //     dispatch({
  //       type: "setToken",
  //       payload: token,
  //     });
  //   }, []);

  /**
   * Setter function for userId state variable
   */
  const setUserId = useCallback((userId: string) => {
    dispatch({
      type: "setUserId",
      payload: userId,
    });
  }, []);

  /**
   * Setter function for entityId state variable
   */
  const setOwnedEntityId = useCallback((ownedEntityId: string) => {
    dispatch({
      type: "setOwnedEntityId",
      payload: ownedEntityId,
    });
  }, []);

  /**
   * Setter function for signing out, named it context sign out to not make mistakes in children components
   */
  //   const contextSignOut = useCallback(() => {
  //     dispatch({
  //       type: "signOut",
  //     });
  //   }, []);

  // console.log("AuthContext state:", { userId, ownedEntityId });

  return {
    // setToken,
    setUserId,
    setOwnedEntityId,
    // contextSignOut,
    userId,
    // token,
    ownedEntityId,
  };
}

/**
 * All Tools Context Creator (contains all tools and variables we will store, and that will be callable from children)
 * setting the context return type to the same type as the function we will call inside it, which is createAllTools()
 * if createAllTools() does not return something, we initialize the context to an unknown object as return type of createAllTools
 */

const AuthContext = createContext<ReturnType<typeof createAuthTools>>(
  {} as unknown as ReturnType<typeof createAuthTools>
);

/**
 * useContext hook renamed in a more logical way
 */
export function useAuthContext() {
  return useContext(AuthContext);
}

/**
 * Component that provides context for the children
 */
export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthContext.Provider value={createAuthTools()}>
      {children}
    </AuthContext.Provider>
  );
}
