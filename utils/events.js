export function getFeaturedEvents(events) {
  return events.filter((event) => event.isFeatured);
}
export async function getEventByID(evnetID) {
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
  const evnet = transformedData.find((event) => event.id === evnetID);
  console.log("the evnet", evnet);

  return evnet;
}

export function getFilteredEvents(events,dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;getFilteredEvents
}
