"use client";

import { useAuthContext } from "@/app/Store";
import getEntityInfos from "@/lib/get/getEntityInfos";
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
function createManageEntityInfosTools() {
  //Destructuring the entity tags to send them as props to ManageTags Component
  // const entityTags = entityInfos.entity_tags;

  // const aboutUsDescription = entityInfos.about_us_description;
  // const contactUsDescription = entityInfos.contact_us_description;

  // const socialMedia = {
  //   phone: entityInfos.entity_phone_number,
  //   email: entityInfos.entity_email,
  //   instagram: entityInfos.instagram_link,
  //   facebook: entityInfos.facebook_link,
  //   whatsapp: entityInfos.whatsapp_phone_number,
  // };

  const [
    {
      tags,
      tag,
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
        case "setTag":
          return { ...state, tag: action.payload };
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
      tags: "",
      tag: "",
      phoneNumber: 0,
      emailAddress: "",
      instagramUrl: "",
      facebookUrl: "",
      whatsappNumber: 0,
      aboutUs_description: "",
      contactUs_description: "",
    }
  );

  /**
   * Setter function for tag state variable
   */
  const setTags = useCallback((newTag: string) => {
    dispatch({
      type: "setTags",
      payload: [...tags, newTag],
    });
  }, []);

  /**
   * Setter function for tag state variable
   */
  const setTag = useCallback((tag: string) => {
    dispatch({
      type: "setTag",
      payload: tag,
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
    tag,
    phoneNumber,
    emailAddress,
    instagramUrl,
    facebookUrl,
    whatsappNumber,
    aboutUs_description,
    contactUs_description,
    setTags,
    setTag,
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
}: {
  children: React.ReactNode;
}) {
  return (
    <ManageEntityInfosContext.Provider value={createManageEntityInfosTools()}>
      {children}
    </ManageEntityInfosContext.Provider>
  );
}
