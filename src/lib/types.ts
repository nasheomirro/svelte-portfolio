export type Weather = {
  description: string;
  icon: string;
  measurements: {
    temp: number;
    humidity: number;
    pressure: number;
  };
};