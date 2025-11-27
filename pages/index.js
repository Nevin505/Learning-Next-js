import { getFeaturedEvents } from "../utils/events";
import EventList from "../components/events/event-list";
import Head from "next/head";
function HomePage(props) {
  if (!props.result) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <div>
        <Head>
          <title>the Events Page</title>
            <meta property="og:description" content="My page title" key="description" />
        </Head>
      </div>
      <EventList items={props.result} />
    </div>
  );
}

export const getStaticProps = async () => {
  try {
    const result = await fetch(
      "https://nextjs-2df82-default-rtdb.firebaseio.com/evnets.json",
      {
        cache: 'no-store' // Force fresh data on each revalidation
      }
    );
    const data = await result.json();
    console.log("the datass", data);
    const keys = Object.keys(data);
    let transformedData = [];
    for (let index = 0; index < keys.length; index++) {
      const element = data[keys[index]];
      transformedData.push({ ...element, id: keys[index] });
    }
    console.log("transformedDatasss", transformedData);
    transformedData = getFeaturedEvents(transformedData);
    return {
      props: { result: transformedData },
      revalidate: 10
    };
  } catch (error) {
    console.error("Error fetching events:", error);
    return {
      props: {
        result: [],
      },
      revalidate: 60,
    };
  }
};

export default HomePage;
