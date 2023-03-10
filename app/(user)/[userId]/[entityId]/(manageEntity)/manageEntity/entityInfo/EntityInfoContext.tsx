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
function createManageEntityInfosTools(entityInfos) {
  const [
    {
      tags,
      phoneNumber,
      emailAddress,
      instagramUrl,
      facebookUrl,
      whatsappNumber,
      aboutUs_description,
      contactUs_description,
    },
    dispatch,
  ] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "setTags":
          return { ...state, tags: action.payload };
        case "setPhoneNumber":
          return { ...state, phoneNumber: action.payload };
        case "setEmailAddress":
          return { ...state, emailAddress: action.payload };
        case "setInstagramUrl":
          return { ...state, instagramUrl: action.payload };
        case "setFacebookUrl":
          return { ...state, facebookUrl: action.payload };
        case "setWhatsappNumber":
          return { ...state, whatsappNumber: action.payload };
        case "setAboutUs_description":
          return { ...state, aboutUs_description: action.payload };
        case "setContactUs_description":
          return { ...state, contactUs_description: action.payload };
      }
    },
    {
      tags: [],
      phoneNumber: "",
      emailAddress: "",
      instagramUrl: "",
      facebookUrl: "",
      whatsappNumber: "",
      aboutUs_description: "",
      contactUs_description: "",
    }
  );

  useEffect(() => {
    setTags(entityInfos.entity_tags);

    setPhoneNumber(entityInfos.entity_phone_number);
    setEmailAddress(entityInfos.entity_email);
    setInstagramUrl(entityInfos.instagram_link);
    setFacebookUrl(entityInfos.facebook_link);
    setWhatsappNumber(entityInfos.whatsapp_phone_number);

    setAboutUs_description(entityInfos.about_us_description);
    setContactUs_description(entityInfos.contact_us_description);
  }, []);

  /**
   * Setter function for tag state variable
   */
  const setTags = useCallback((currentTags: string[]) => {
    dispatch({
      type: "setTags",
      payload: currentTags,
    });
  }, []);

  /**
   * Setter function for tag state variable
   */
  const setPhoneNumber = useCallback((number: string) => {
    dispatch({
      type: "setPhoneNumber",
      payload: number,
    });
  }, []);
  /**
   * Setter function for tag state variable
   */
  const setEmailAddress = useCallback((email: string) => {
    dispatch({
      type: "setEmailAddress",
      payload: email,
    });
  }, []);

  /**
   * Setter function for tag state variable
   */
  const setInstagramUrl = useCallback((url: string) => {
    dispatch({
      type: "setInstagramUrl",
      payload: url,
    });
  }, []);
  /**
   * Setter function for tag state variable
   */
  const setFacebookUrl = useCallback((url: string) => {
    dispatch({
      type: "setFacebookUrl",
      payload: url,
    });
  }, []);

  /**
   * Setter function for tag state variable
   */
  const setWhatsappNumber = useCallback((number: string) => {
    dispatch({
      type: "setWhatsappNumber",
      payload: number,
    });
  }, []);

  /**
   * Setter function for tag state variable
   */
  const setAboutUs_description = useCallback((description: string) => {
    dispatch({
      type: "setAboutUs_description",
      payload: description,
    });
  }, []);

  /**
   * Setter function for tag state variable
   */
  const setContactUs_description = useCallback((description: string) => {
    dispatch({
      type: "setContactUs_description",
      payload: description,
    });
  }, []);

  return {
    tags,
    phoneNumber,
    emailAddress,
    instagramUrl,
    facebookUrl,
    whatsappNumber,
    aboutUs_description,
    contactUs_description,
    setTags,
    setPhoneNumber,
    setEmailAddress,
    setInstagramUrl,
    setFacebookUrl,
    setWhatsappNumber,
    setAboutUs_description,
    setContactUs_description,
  };
}

/**
 * All Tools Context Creator (contains all tools and variables we will store, and that will be callable from children)
 * setting the context return type to the same type as the function we will call inside it, which is createAllTools()
 * if createAllTools() does not return something, we initialize the context to an unknown object as return type of createAllTools
 */

const ManageEntityInfosContext = createContext<
  ReturnType<typeof createManageEntityInfosTools>
>({} as unknown as ReturnType<typeof createManageEntityInfosTools>);

/**
 * useContext hook renamed in a more logical way
 */
export function useManageEntityInfosContext() {
  return useContext(ManageEntityInfosContext);
}

/**
 * Component that provides context for the children
 */
export function ManageEntityInfosContextProvider({
  children,
  entityInfos,
}: {
  children: React.ReactNode;
  entityInfos: any;
}) {
  createManageEntityInfosTools(entityInfos);
  return (
    <ManageEntityInfosContext.Provider
      value={createManageEntityInfosTools(entityInfos)}
    >
      {children}
    </ManageEntityInfosContext.Provider>
  );
}
