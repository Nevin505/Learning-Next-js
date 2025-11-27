import { Fragment } from "react";
import { useRouter } from "next/router";

import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import { getEventByID } from "../../utils/events";
import Head from "next/head";

function EventDetailPage(props) {
  const { event } = props;

  if (!event) {
    return (
      <div className="text-center">
        <p>No event found!</p>
      </div>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export const getServerSideProps = async (context) => {
  console.log("the ocnetx",context);
  
  const event = await getEventByID(context.query.eventId);
  console.log("event", event);

  return { props: { event } };
};
export default EventDetailPage;
