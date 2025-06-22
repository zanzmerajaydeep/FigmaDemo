import InfoCard from "./InfoCard";
import "./section1.css";
import designImage from "../assets/online-web-design.png";
const Section1 = () => {
  return (
    <div className="section section1">
      <div className="heading">
        <button className="services-btn btn-orange">Services</button>
        <h1>Solutions That Power Industry 4.0</h1>
        <div className="description">
          Driving digital transformation through smart, connected technologies.
        </div>
      </div>
      <div className="info_cards">
        <InfoCard
          heading="Web Application"
          description="We build powerful web applications that work across devices and industries. Whether you need IoT dashboards, control systems, or business platforms, we ensure speed, security, and scalability."
          image={designImage}
        />
        <InfoCard
          heading="Web Application"
          description="We build powerful web applications that work across devices and industries. Whether you need IoT dashboards, control systems, or business platforms, we ensure speed, security, and scalability."
          image={designImage}
        />
      </div>
    </div>
  );
};

export default Section1;
