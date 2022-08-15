import React, { createContext, useReducer, useState } from "react";
import { BudgetKind, FormActionKind } from "./enums";

interface FormState {
  buyerExperience: string;
  buyerPurpose: string;
  numBedrooms: any[];
  numBathrooms: any[];
  premiums: any[];
  budget: any[];
}

export const initialForm: any = {
  buyerExperience: "",
  buyerPurpose: "",
  numBedrooms: [],
  numBathrooms: [],
  premiums: [],
  budget: [BudgetKind.ONE_MILLION, BudgetKind.THREE_MILLION],
};

interface FormAction {
  type: FormActionKind;
  payload: string | any[];
}

const formReducer = (state: FormState, action: FormAction) => {
  const { type, payload } = action;

  switch (type) {
    case FormActionKind.ADD_BUYER_EXPERIENCE:
      return typeof payload === "string"
        ? { ...state, buyerExperience: payload }
        : state;
    case FormActionKind.ADD_BUYER_PURPOSE:
      return typeof payload === "string"
        ? { ...state, buyerPurpose: payload }
        : state;
    case FormActionKind.ADD_NUM_BEDROOMS:
      return Array.isArray(payload)
        ? { ...state, numBedrooms: payload }
        : state;
    case FormActionKind.ADD_NUM_BATHROOMS:
      return Array.isArray(payload)
        ? { ...state, numBathrooms: payload }
        : state;
    case FormActionKind.ADD_PREMIUMS:
      return Array.isArray(payload) ? { ...state, premiums: payload } : state;
    case FormActionKind.ADD_BUDGET:
      return Array.isArray(payload) ? { ...state, budget: payload } : state;
    default:
      return state;
  }
};

export const FormContext = createContext(initialForm);

export const FormProvider: React.FC = ({ children }) => {
  const [formState, formDispatch] = useReducer(formReducer, initialForm);

  return (
    <FormContext.Provider value={{ formState, formDispatch }}>
      {children}
    </FormContext.Provider>
  );
};

interface FormStatusState {
  currentStep: number;
  setCurrentStep?: any;
}

const initialFormStatus: FormStatusState = {
  currentStep: 0,
};

export const FormStatusContext = createContext(initialFormStatus);

export const FormStatusProvider: React.FC = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  return (
    <FormStatusContext.Provider value={{ currentStep, setCurrentStep }}>
      {children}
    </FormStatusContext.Provider>
  );
};
