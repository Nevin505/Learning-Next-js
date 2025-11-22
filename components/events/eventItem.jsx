import Link from "next/link";
import eventItemStyles from "./event-item.module.css";
import Button from "../ui/button";
const EventItem = ({ date, title, image, id, location,key }) => {
  let formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = () => {
    return location?.replace(", ", "\n");
  };
  const exploreEVENTS = `/events/${id}`;
  return (
    <li className={eventItemStyles.item}>
      <img src={"/" + image} alt={title} />
      <div className={eventItemStyles.content}>
        <div>
          <h2>{title}</h2>
        </div>
        <div className={eventItemStyles.date}>
          <time>{formattedDate}</time>
        </div>
        <div className={eventItemStyles.address}>
          <address>{formattedAddress()}</address>
        </div>
        <div className={eventItemStyles.actions}>
          <Button href={exploreEVENTS}>Explore Events</Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
