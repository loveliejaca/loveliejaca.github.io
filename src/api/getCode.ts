import base, { getMinifiedRecords } from "./utils/airtable";

export default async function getCode() {
  try {
    const table = base('Code');
    const records = await table.select({}).all();
    // const minifiedRecords = await getMinifiedRecords(records);
		const minifiedRecords  = await getMinifiedRecords(records)

    return minifiedRecords;
  } catch(error:any) {
    console.error(`Error fetching skills: ${error.message}`);
    // return { error: 'Failed to fetch skills' };
  }
}