import marker from "../assets/marker.png";

function Entry(props) {
  return (
   <article className="entry">

    <img
        className="entry-img"
        src={props.imageUrl}
        alt={props.title}
    />

    <div className="entry-content">
        <span>{props.location}</span>

        <h2>{props.title}</h2>

        <p className="date">
            {props.startDate} - {props.endDate}
        </p>

        <p>{props.description}</p>

        <a
            href={props.googleMapsLink}
            target="_blank"
            rel="noreferrer"
        >
            View on Google Maps
        </a>
    </div>

</article>
  );
}

export default Entry;