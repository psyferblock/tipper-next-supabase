"use client";

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
async function createManageEntityInfosTools() {
  /**
   * On every render of context, we check first if we have values for token and userId in local storage
   */
//   useEffect(() => {
    //In case we have user infos in local storage we store them in context
    // const userIdInLocalStorage = JSON.parse(localStorage.getItem("user"));
    // const entityIdInLocalStorage = JSON.parse(localStorage.getItem("entityId"));

    // if (userIdInLocalStorage) {
    //   setUserId(userIdInLocalStorage);
    // }
    // if (entityIdInLocalStorage) {
    //   setOwnedEntityId(entityIdInLocalStorage);
    }
//   }, []);


 

const entityId = "a7fb29ed-3b7a-452b-a284-ae2a2dff14bb"

const entityInfos = await getEntityInfos(entityId);

//Destructuring the entity tags to send them as props to ManageTags Component
const entityTags = entityInfos.entity_tags;

const aboutUsDescription = entityInfos.about_us_description;
const contactUsDescription = entityInfos.contact_us_description;

const socialMedia = {
  phone: entityInfos.entity_phone_number,
  email: entityInfos.entity_email,
  instagram: entityInfos.instagram_link,
  facebook: entityInfos.facebook_link,
  whatsapp: entityInfos.whatsapp_phone_number,
};
 /**
   * Format for how the state (which contains token and userId variables) should be
   */
 type entityInfosState = {
    tags: string[];
    tag: string;
    phoneNumber:number;
    emailAddress:string;
    instagramUrl:string;
    facebookUrl:string;
    whatsappNumber:number;
    aboutUs_description:string;
    contactUs_description:string;
  };

  /**
   * Format for which actions are allowed to modify our state variables ( token and userId ) should be
   */
  type entityInfosActions =
    | {
        type: "setTags";
        payload: string;
      }
    | {
        type: "setTag";
        payload: string;
      }
      | {
        type: "setPhoneNumber";
        payload: number;
      }
      | {
        type: "setEmailAddress";
        payload: string;
      }
      | {
        type: "setInstagramUrl";
        payload: string;
      }
      | {
        type: "setFacebookUrl";
        payload: string;
      }
      | {
        type: "setWhatsappNumber";
        payload: number;
      }
      | {
        type: "setAboutUs_description";
        payload: string;
      }
      | {
        type: "setContactUs_description";
        payload: string;
      }
  /**
   * use to store email when user inputs his email. useReducer uses dispatch instead of setState,
   * so if you want to change the info contained in email or password states,
   * you call dispatch (in setEmail or setPassword for example)
   */
  
  const [{ tags, tag , phoneNumber,emailAddress,instagramUrl,facebookUrl, whatsappNumber,aboutUs_description ,contactUs_description}, dispatch] = useReducer(
    (state: entityInfosState, action: entityInfosActions) => {
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
        tags:entityTags,
        tag:"",
        phoneNumber: socialMedia.phone,
        emailAddress: socialMedia.email,
        instagramUrl:socialMedia.instagram,
        facebookUrl:socialMedia.facebook,
        whatsappNumber:socialMedia.whatsapp,
        aboutUs_description:aboutUsDescription,
        contactUs_description:contactUsDescription,
    }
  );

   /**
   * Setter function for tag state variable
   */
   const setTags = useCallback((newTag: string) => {
    dispatch({
      type: "setTags",
      payload: [...tags, newTag]
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

 

  console.log("Manage entity infos Context state:", { tags, tag ,phoneNumber,emailAddress });

  return {
    tags,tag,
  };
}

/**
 * All Tools Context Creator (contains all tools and variables we will store, and that will be callable from children)
 * setting the context return type to the same type as the function we will call inside it, which is createAllTools()
 * if createAllTools() does not return something, we initialize the context to an unknown object as return type of createAllTools
 */

const ManageEntityInfosContext = createContext<ReturnType<typeof createManageEntityInfosTools>>(
  {} as unknown as ReturnType<typeof createManageEntityInfosTools>
);

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
