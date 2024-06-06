require('dotenv').config()

import Airtable from "airtable";

const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

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