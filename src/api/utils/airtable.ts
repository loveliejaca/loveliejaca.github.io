
import { baseID, dbAPI } from "@/helper/constant";
import Airtable from "airtable";

// const base = new Airtable({
//   apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
// }).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

const base = new Airtable({
  apiKey: dbAPI,
}).base(baseID);

const minifyRecord = (record:any) => {
  return {
      id: record.id,
      fields: record.fields,
  };
};

const getMinifiedRecords = (records:any) => {
  console.log('process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID', process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID)
  return records.map((record:any) => minifyRecord(record));
};

export {minifyRecord, getMinifiedRecords};

export default base

// export async function getUser() {
//   try {
//     const table = base('User');
//     const records = await table.select({}).all();
//     const minifiedRecords = await getMinifiedRecords(records);
    
//     return minifiedRecords;
//   } catch(error:any) {
//     console.error(`Error fetching skills: ${error.message}`);
//     return { error: 'Failed to fetch skills' };
//   }
// }