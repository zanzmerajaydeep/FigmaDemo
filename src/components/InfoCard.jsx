import "./infoCard.css";
const InfoCard = ({ image, heading, description, id }) => {
  return (
    <div className="info_card">
      <img src={image} alt="" />
      <div className="shadow">
        <div className="heading">{heading}</div>
        <div className="description">{description}</div>
        <button className="btn-purple learn-more-card-button">Learn More</button>
      </div>
    </div>
  );
};

export default InfoCard;
