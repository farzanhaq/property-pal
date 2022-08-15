import React, { createContext, useState } from "react";

interface BookingStatusState {
  currentStep: number;
  setCurrentStep?: any;
}

const initialBookingStatus: BookingStatusState = {
  currentStep: 0,
};

export const BookingStatusContext = createContext(initialBookingStatus);

export const BookingStatusProvider: React.FC = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  return (
    <BookingStatusContext.Provider value={{ currentStep, setCurrentStep }}>
      {children}
    </BookingStatusContext.Provider>
  );
};
