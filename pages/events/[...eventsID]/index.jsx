import { useRouter } from "next/router";
import { getFilteredEvents } from "../../../data/dummy-data";
import EventList from "../../../components/events/eventList";
import EventItem from "../../../components/events/eventItem";
import Link from "next/link";

const filteredEventsDynamicPage = () => {
  const router = useRouter();
  if (!router.query?.eventsID) {
    return <p>loading ......</p>;
  }
  const year = +router.query?.eventsID[0];
  const month = +router.query?.eventsID[1];
  if (isNaN(+month) || isNaN(+year)) {
    return <p>INvalid Year....</p>;
  }
  const eventResult = getFilteredEvents({
    year: +router.query?.eventsID[0],
    month: +router.query?.eventsID[1]-1,
  });
  console.log("eventResult", eventResult);
  if (eventResult.length == 0) {
    return <> <p>NO Data Found....</p>
    <Link href='/events'>GO BACK</Link></>;
  }

  return (
    <div>
      <EventList items={eventResult} />
    </div>
  );
};

export default filteredEventsDynamicPage;
