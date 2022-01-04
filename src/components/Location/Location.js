import './Location.css';

function Location(props) {
  return (
    <div className="Location">
      <div>
          <img src={props.imageUrl} alt={props.title} />
          <div><a href={props.attribution} rel="noopener noreferrer" target="_blank">Image Source</a></div>
      </div>
      <div className="location--text-div">
          <div><i class="fas fa-map-marker-alt"></i><span className="location">{props.location}</span><span><a href={props.googleMapsUrl} rel="noopener noreferrer" target="_blank">View on Google Maps</a></span></div>
          <h2>{props.title}</h2>
          <h3 className="dates--div">{props.startDate} - {props.endDate}</h3>
          <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Location;