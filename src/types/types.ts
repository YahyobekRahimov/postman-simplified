export type themeType = "light" | "dark";

export type paramsType = {
   key: string;
   value: string;
   description: string;
};

export type requestType = {
   id: string | number;
   name: string;
   requestType: string;
   url: string;
   params: paramsType[];
};
