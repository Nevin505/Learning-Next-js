import EventList from '../components/events/eventList';
import { getFeaturedEvents } from '../data/dummy-data';

const index = () => {
  const featuredEvents = getFeaturedEvents();
  console.log("featuredEvents",featuredEvents);
  
  return (
    <div>
      <EventList items={featuredEvents}/>
    </div>
  )
}

export default index