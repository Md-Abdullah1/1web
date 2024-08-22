import { apiSlice } from "../../ApiSlice";

interface Country {
  data: any;
  message: string;
  success: boolean;
}

export const countryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCountryData: builder.query<Country, void>({
      query: () => ({
        url: "countries",
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetCountryDataQuery, usePrefetch } = countryApiSlice;
