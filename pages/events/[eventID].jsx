import { useRouter } from "next/router";
import { getEventById } from "../../data/dummy-data";
import EventList from "../../components/events/eventList";
import { useEffect, useState } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
const EvnetID = () => {
  const router = useRouter();
  const eventID = router.query.eventID;
  console.log("eventID", eventID);

  // const [events, setEvents] = useState(null);
  const eventById = getEventById(eventID);
  // useEffect(() => {
  //   console.log("eventID", eventById);
  //   setEvents(eventById);
  // }, [eventID]);
  if (!eventById) {
    return <p>NO Event Was Found</p>;
  }
  return (
    <><EventSummary title={eventById.title} />
    <EventLogistics  {...eventById} /></>
    // <div>dd</div>
  );
};

export default EvnetID;
