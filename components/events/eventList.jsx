import EventItem from "./eventItem";
import eventList from "./event-list.module.css";
const EventList = ({ items }) => {
  return (
    <ul className={eventList.item}>
      {items.map((item) => {
        return (
          <EventItem
            key={item.id}
            title={item.title}
            description={item.description}
            date={item.date}
            image={item.image}
            isFeatured={item.isFeatured}
            id={item.id}
            location={item.location}
          />
        );
      })}
    </ul>
  );
};
//  title: 'Programming for everyone',
//     description:
//       'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
//     location: 'Somestreet 25, 12345 San Somewhereo',
//     date: '2021-05-12',
//     image: 'images/coding-event.jpg',
//     isFeatured: false,
export default EventList;
