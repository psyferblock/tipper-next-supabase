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
function createManageEntityInfosTools(entityInfos, coverPictures) {
  const [
    {
      arrayOfPictureObjects,
      tags,
      phoneNumber,
      emailAddress,
      instagramUrl,
      facebookUrl,
      whatsappNumber,
      aboutUsDescription,
      aboutUsPictureUrl,
      isContactUsSectionPublic,
      contactUsDescription,
      contactUsPictureUrl,
    },
    dispatch,
  ] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "setArrayOfPictureObjects":
          return { ...state, arrayOfPictureObjects: action.payload };
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
        case "setAboutUsDescription":
          return { ...state, aboutUsDescription: action.payload };
        case "setAboutUsPictureUrl":
          return { ...state, aboutUsPictureUrl: action.payload };
        case "setIsContactUsSectionPublic":
          return { ...state, isContactUsSectionPublic: action.payload };
        case "setContactUsDescription":
          return { ...state, contactUsDescription: action.payload };
        case "setContactUsPictureUrl":
          return { ...state, contactUsPictureUrl: action.payload };
      }
    },
    {
      arrayOfPictureObjects: [],
      tags: [],
      phoneNumber: "",
      emailAddress: "",
      instagramUrl: "",
      facebookUrl: "",
      whatsappNumber: "",
      aboutUsDescription: "",
      aboutUsPictureUrl: "",
      isContactUsSectionPublic: "",
      contactUsDescription: "",
      contactUsPictureUrl: "",
    }
  );

  useEffect(() => {
    setArrayOfPictureObjects(coverPictures);

    setTags(entityInfos.entity_tags);

    setPhoneNumber(entityInfos.entity_phone_number);
    setEmailAddress(entityInfos.entity_email);
    setInstagramUrl(entityInfos.instagram_link);
    setFacebookUrl(entityInfos.facebook_link);
    setWhatsappNumber(entityInfos.whatsapp_phone_number);

    setAboutUsDescription(entityInfos.about_us_description);
    setAboutUsPictureUrl(entityInfos.about_us_picture_url);

    setIsContactUsSectionPublic(entityInfos.is_contact_us_public);
    setContactUsDescription(entityInfos.contact_us_description);
    setContactUsPictureUrl(entityInfos.contact_us_picture_url);
  }, []);

  /**
   * Setter function for arrayOfObjectPictures state variable
   */
  const setArrayOfPictureObjects = useCallback((newArray: string[]) => {
    dispatch({
      type: "setArrayOfPictureObjects",
      payload: newArray,
    });
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
  const setAboutUsDescription = useCallback((description: string) => {
    dispatch({
      type: "setAboutUsDescription",
      payload: description,
    });
  }, []);

  /**
   * Setter function for tag state variable
   */
  const setAboutUsPictureUrl = useCallback((url: string) => {
    dispatch({
      type: "setAboutUsPictureUrl",
      payload: url,
    });
  }, []);

  /**
   * Setter function for tag state variable
   */
  const setIsContactUsSectionPublic = useCallback((isPublic: boolean) => {
    dispatch({
      type: "setIsContactUsSectionPublic",
      payload: isPublic,
    });
  }, []);

  /**
   * Setter function for tag state variable
   */
  const setContactUsDescription = useCallback((description: string) => {
    dispatch({
      type: "setContactUsDescription",
      payload: description,
    });
  }, []);

  /**
   * Setter function for tag state variable
   */
  const setContactUsPictureUrl = useCallback((url: string) => {
    dispatch({
      type: "setContactUsPictureUrl",
      payload: url,
    });
  }, []);

  return {
    arrayOfPictureObjects,
    tags,
    phoneNumber,
    emailAddress,
    instagramUrl,
    facebookUrl,
    whatsappNumber,
    aboutUsDescription,
    aboutUsPictureUrl,
    isContactUsSectionPublic,
    contactUsDescription,
    contactUsPictureUrl,
    setArrayOfPictureObjects,
    setTags,
    setPhoneNumber,
    setEmailAddress,
    setInstagramUrl,
    setFacebookUrl,
    setWhatsappNumber,
    setAboutUsDescription,
    setAboutUsPictureUrl,
    setIsContactUsSectionPublic,
    setContactUsDescription,
    setContactUsPictureUrl,
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
  coverPictures,
}: {
  children: React.ReactNode;
  entityInfos: any;
}) {
  createManageEntityInfosTools(entityInfos, coverPictures);
  return (
    <ManageEntityInfosContext.Provider
      value={createManageEntityInfosTools(entityInfos, coverPictures)}
    >
      {children}
    </ManageEntityInfosContext.Provider>
  );
}
