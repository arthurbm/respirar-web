/* eslint-disable @typescript-eslint/no-empty-function */
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { type InterestsGeneralValues, type InterestsSeriesValues } from '~/validators/interests-validator';

// Define the state interface
interface MultipartFormState {
  formData: InterestsGeneralValues & InterestsSeriesValues;
  interestsGeneral: InterestsGeneralValues;
  interestsSeries: InterestsSeriesValues;
  setInterestsGeneral: (values: InterestsGeneralValues) => void;
  setInterestsSeries: (values: InterestsSeriesValues) => void;
}

// Create the initial state
const initialState: MultipartFormState = {
  interestsGeneral: {
    activities: [''],
    genders: [''],
  },
  interestsSeries: {
    serie: '',
  },
  formData: {} as InterestsGeneralValues & InterestsSeriesValues,
  setInterestsGeneral: () => {},
  setInterestsSeries: () => {},
};

// Create the Zustand store
export const useMultipartFormStore = create(
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
