export type ChosenActivities = {
  activities: {
    id: number;
    completed: number;
    day: string;
    options: string[];
  }
  availableTimes: {
    end: string;
    start: string;
  }[];

}

export type UserActivitiesParam = {
  email: string,
  humour: number,
}