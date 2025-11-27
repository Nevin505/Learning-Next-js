import { Fragment } from "react";
import { useRouter } from "next/router";

import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getFeaturedEvents } from "../../utils/events";

function AllEventsPage(props) {
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={props.result} />
    </Fragment>
  );
}
export const getStaticProps = async (context) => {
  console.log("the context", context);

  try {
    const result = await fetch(
      "https://nextjs-2df82-default-rtdb.firebaseio.com/evnets.json"
    );
    const data = await result.json();
    console.log("the datass", data);
    const keys = Object.keys(data);
    let transformedData = [];
    for (let index = 0; index < keys.length; index++) {
      const element = data[keys[index]];
      transformedData.push({ ...element, id: keys[index] });
    }
    console.log("transformedData inn", transformedData);
    return {
      props: { result: transformedData },
      revalidate: 600,
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
export default AllEventsPage;
