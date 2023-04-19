import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { type InterestsGeneralValues, type InterestsSeriesValues } from '~/validators/interests-validator';

// Define the state interface
interface MultipartFormState {
  interestsGeneral: InterestsGeneralValues;
  interestsSeries: InterestsSeriesValues;
  setInterestsGeneral: (values: InterestsGeneralValues) => void;
  setInterestsSeries: (values: InterestsSeriesValues) => void;
  getFormData: () => InterestsGeneralValues & InterestsSeriesValues;
}

// Create the initial state
const initialState = {
  interestsGeneral: {} as InterestsGeneralValues,
  interestsSeries: {} as InterestsSeriesValues,
};

// Create the Zustand store
export const useFormStore = create(
  immer<MultipartFormState>((set, get) => ({
    ...initialState,
    setInterestsGeneral: (values) =>
      set((state) => {
        state.interestsGeneral = values;
      }),
    setInterestsSeries: (values) =>
      set((state) => {
        state.interestsSeries = values;
      }),
    getFormData: () => {
      const { interestsGeneral, interestsSeries } = get();
      return {
        ...interestsGeneral,
        ...interestsSeries,
      };
    }
  }))
);
