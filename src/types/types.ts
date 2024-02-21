export type themeType = "light" | "dark";

export type paramsType = {
   key: string;
   value: string;
   description: string;
};

export type requestMethods =
   | "GET"
   | "POST"
   | "PUT"
   | "PATCH"
   | "DELETE"
   | "HEAD"
   | "OPTIONS";

export type requestType = {
   id: string;
   name: string;
   requestMethod: requestMethods;
   url: string;
   params: paramsType[];
};
