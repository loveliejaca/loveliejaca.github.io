
// import { dbAPI, baseID } from "@/helper/constant";
import Airtable from "airtable";

const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

// const base = new Airtable({
//   apiKey: dbAPI,
// }).base(baseID);

// const base = new Airtable({
//   apiKey: "patHiEnS7JS9vLoxo.ab40ba520cec5c3ce19b66f7f038dee76570428e4c740f21723e7420580fa41e",
// }).base("app8N3c1YciCZrGlJ");

const minifyRecord = (record:any) => {
  return {
      id: record.id,
      fields: record.fields,
  };
};

const getMinifiedRecords = (records:any) => {
  return records.map((record:any) => minifyRecord(record));
};

export {minifyRecord, getMinifiedRecords};

export default base