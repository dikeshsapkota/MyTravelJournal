import marker from "../assets/marker.png";

function Entry(props) {
  return (
   <article className="entry">
    <img className="entry-img" src={props.imageUrl} />

    <div className="entry-info">
        <div className="entry-location">
            <img className="marker" src={marker} />
            <span className="country">{props.location}</span>

            <a
                href={props.googleMapsLink}
                target="_blank"
                rel="noreferrer"
            >
                View on Google Maps
            </a>
        </div>

        <h2>{props.title}</h2>

        <p className="date">
            {props.startDate} - {props.endDate}
        </p>

        <p className="description">
            {props.description}
        </p>
    </div>
</article>
  );
}

export default Entry;