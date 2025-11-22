import { useReducer } from "react";
import EventList from "../../components/events/eventList";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../data/dummy-data";
import { useRouter } from "next/router";

const EventsPage = () => {
  const allEvents = getAllEvents();
  const router = useRouter();
  console.log("allEvents", allEvents);
  const onSearch = (year, month) => {
    console.log(year, month);
    router.push(`/events/${year}/${month}`);
  };
  return (
    <>
      <EventsSearch onSearch={onSearch} />
      <EventList items={allEvents} />
    </>
  );
};

export default EventsPage;
