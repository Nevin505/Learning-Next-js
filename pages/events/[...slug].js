import { Fragment } from "react";
import { useRouter } from "next/router";

import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
import LogisticsItem from "../../components/event-detail/logistics-item";
import { notFound } from "next/navigation";
import { getFilteredEvents } from "../../utils/events";

function FilteredEventsPage(props) {
  const router = useRouter();

  const filterData = router.query.slug;

  // if (!filterData) {
  //   return <p className="center">Loading...</p>;
  // }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  // if (
  //   isNaN(numYear) ||
  //   isNaN(numMonth) ||
  //   numYear > 2030 ||
  //   numYear < 2021 ||
  //   numMonth < 1 ||
  //   numMonth > 12
  // ) {
  //   return (
  //     <Fragment>
  //       <ErrorAlert>
  //         <p>Invalid filter. Please adjust your values!</p>
  //       </ErrorAlert>
  //       <div className="center">
  //         <Button link="/events">Show All Events</Button>
  //       </div>
  //     </Fragment>
  //   );
  // }

  // const filteredEvents = getFilteredEvents({
  //   year: numYear,
  //   month: numMonth,
  // });

  // if (!filteredEvents || filteredEvents.length === 0) {
  //   return (
  //     <Fragment>
  //       <ErrorAlert>
  //         <p>No events found for the chosen filter!</p>
  //       </ErrorAlert>
  //       <div className="center">
  //         <Button link="/events">Show All Events</Button>
  //       </div>
  //     </Fragment>
  //   );
  // }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={props.value} />
    </Fragment>
  );
}

export const getServerSideProps = async(content) => {
  const { slug } = content.query;
  console.log("the conetx", content);
  const filteredYear = slug[0];
  const filteredMonth = slug[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return { props: { value: null }, notFound: true };
  }

  console.log("the slug", slug);
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
    const filteredEvents = getFilteredEvents(transformedData,{
    year: numYear,
    month: numMonth,
  });
  return { props: { value: filteredEvents } };
};
export default FilteredEventsPage;
