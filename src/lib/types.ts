// openweathermap types
// https://openweathermap.org/current#current_JSON
export type Weather = {
  description: string;
  icon: string;
  measurements: {
    temp: number;
    humidity: number;
    pressure: number;
  };
};

// Look at the response schema on the API documentation
// https://developers.forem.com/api/v1#tag/articles/operation/getArticles
export type Post = {
  url: string;
  description: string;
  title: string;
  published_at: string;
  tag_list: string[];
  id: string;
};
