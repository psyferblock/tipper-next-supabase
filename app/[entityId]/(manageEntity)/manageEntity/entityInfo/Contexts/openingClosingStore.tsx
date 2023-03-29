"use client";
import { useReducer, useEffect, useCallback,useContext,createContext } from "react";

const createWorkingHoursTools = (hoursInput) => {
  const [
    {
      openingHoursMondayFriday,
      openingHoursSaturday,
      openingHoursSunday,
      closingHoursMondayFriday,
      closingHoursSaturday,
      closingHoursSunday,
    },
    dispatch,
  ] = useReducer(
    (state, action) => {
      const { type, payload } = action;

      switch (type) {
        case "ADD_OPENING_HOURS_MONDAY_FRIDAY":
          return { ...state, openingHoursMondayFriday: payload };

        case "ADD_OPENING_HOURS_SATURDAY":
          return { ...state, openingHoursSaturday: payload };

        case "ADD_OPENING_HOURS_SUNDAY":
          return { ...state, openingHoursSunday: payload };

        case "ADD_CLOSING_HOURS_MONDAY_FRIDAY":
          return { ...state, closingHoursMondayFriday: payload };

        case "ADD_CLOSING_HOURS_SATURDAY":
          return { ...state, closingHoursSaturday: payload };

        case "ADD_CLOSING_HOURS_SUNDAY":
          return { ...state, closingHoursSunday: payload };
      }
    },
    {
      openingHoursMondayFriday: "",
      openingHoursSaturday: "",
      openingHoursSunday: "",
      closingHoursMondayFriday: "",
      closingHoursSaturday: "",
      closingHoursSunday: "",
    }
  );

  useEffect(() => {
    addMonFridayOpening(hoursInput.monTime);
    addSaturdayOpening(hoursInput.satTime);
    addSundayOpening(hoursInput.sunTime);
    addMonFridayClosing(hoursInput.monTimeClosing);
    addSaturdayClosing(hoursInput.satTimeClosing);
    addSundayClosing(hoursInput.sunTimeClosing);
  }, []);

  const addMonFridayOpening = useCallback((input: string) => {
    dispatch({
      type: "ADD_OPENING_HOURS_MONDAY_FRIDAY",
      payload: input,
    });
  }, []);

  const addSaturdayOpening = useCallback((input: string) => {
    dispatch({
      type: "ADD_OPENING_HOURS_SATURDAY",
      payload: input,
    });
  }, []);
  const addSundayOpening = useCallback((input: string) => {
    dispatch({
      type: "ADD_OPENING_HOURS_SUNDAY",
      payload: input,
    });
  }, []);
  const addMonFridayClosing = useCallback((input: string) => {
    dispatch({
      type: "ADD_CLOSING_HOURS_MONDAY_FRIDAY",
      payload: input,
    });
  }, []);
  const addSaturdayClosing = useCallback((input: string) => {
    dispatch({
      type: "ADD_CLOSING_HOURS_SATURDAY",
      payload: input,
    });
  }, []);

  const addSundayClosing = useCallback((input: string) => {
    dispatch({
      type: "ADD_CLOSING_HOURS_SUNDAY",
      payload: input,
    });
  }, []);

  return {
    openingHoursMondayFriday,
    openingHoursSaturday,
    openingHoursSunday,
    closingHoursMondayFriday,
    closingHoursSaturday,
    closingHoursSunday,
    addMonFridayOpening,
    addSaturdayOpening,
    addSundayOpening,
    addMonFridayClosing,
    addSaturdayClosing,
    addSundayClosing,
  };
};

const ManageOpeningHoursContext = createContext<
  ReturnType<typeof createWorkingHoursTools>
>({} as unknown as ReturnType<typeof createWorkingHoursTools>);

export function useManageOpeningHoursContext() {
  return useContext(ManageOpeningHoursContext);
}

export function ManageOpeningHoursContextProvider({
  children,
  hoursInput,
}: {
  children: React.ReactNode;
  hoursInput: any;
}) {
  createWorkingHoursTools(hoursInput);
  return (
    <ManageOpeningHoursContext.Provider
      value={createWorkingHoursTools(hoursInput)}
    >
      {children}
    </ManageOpeningHoursContext.Provider>
  );
}
