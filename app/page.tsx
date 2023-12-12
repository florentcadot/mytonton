import { Login } from "@/app/components/login";
import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { extractValueFromPageProperty, Nibling } from "@/util";
import { cache } from 'react'


const getNiblings =  cache(async () => {
  const notionClient = new Client({
    auth: process.env.NOTION_TOKEN,
  });
  const pages = await notionClient.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string,
    sorts: [],
  });

  const niblings = (await Promise.all(
    // @ts-ignore
    pages.results.map(async (page: PageObjectResponse) => {
      const properties = {};
      for (const propertyName of Object.keys(page.properties)) {
        // https://developers.notion.com/reference/retrieve-a-page-property
        const propertyData = await notionClient.pages.properties.retrieve({
          page_id: page.id,
          property_id: page.properties[propertyName].id,
        });
        // @ts-ignore
        properties[propertyName] = extractValueFromPageProperty(propertyData);
      }
      return properties;
    }),
  )) as unknown as Nibling[];
  console.log(niblings);
  return niblings;
});


export const dynamic = 'force-dynamic'
export const revalidate = 3600

export default async function Home() {
  const niblings = await getNiblings();
  return (
    <main>
      <Login niblings={niblings} />
    </main>
  );
}
