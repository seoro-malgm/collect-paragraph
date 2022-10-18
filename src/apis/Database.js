const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: "secret_ssnU3ydQMk7wrbpq2sdhPsdg3aiN2DBsVgsTeo1DL42", // process.env.REACT_APP_API_KEY
});
const database_id = "5ad034e5ca89484da1e543e6c1ba0ccf"; // process.env.REACT_APP_DATABASE_ID;

export const DatabaseAPI = {
  async getItems() {
    const data = await notion.databases.query({
      database_id,
    });
    return data;
  },
};
