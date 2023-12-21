export interface Duration {
  time: number;
  unit: TimeUnit;
}

export enum TimeUnit {
  SECONDS = 1000,
  MINUTES = 60 * 1000,
  HOURS = 60 * 60 * 1000,
}
