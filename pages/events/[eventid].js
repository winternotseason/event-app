import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from "../../dummy-data";

import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import ErrorAlert from "../../components/ui/error-alert";

export default function DetailEventsPage() {
  const router = useRouter();
  const eventid = router.query.eventid;
  const event = getEventById(eventid);

  if (!event) {
    return (
      <ErrorAlert>
        <h3>No event found!</h3>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
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
