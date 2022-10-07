import "./Card.css"

const Card = ({ image, name, status, location, species }) => {
  const statusColor = (status) =>
    status === "Alive" ? "green" : status === "unknown" ? "blue" : "red"

  return (
    <div className="card-container">
      <img src={image} alt={name} />

      <div className="card-content">
        <h2>{name}</h2>
        <div className="status">
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: statusColor(status),
              borderRadius: "50%",
              marginRight: "10px",
            }}
          ></div>{" "}
          {status} - {species}
        </div>

        <small>Last known location:</small>
        <p>{location}</p>
      </div>
    </div>
  )
}

export default Card
