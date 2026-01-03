export default function Services() {

  const services = [
    "Online Training",
    "Virtual Job Support",
    "Corporate Training",
    "Web Technologies",
    "Networking Tools",
    "Mobile Technologies",
    "IBM Tools",
    "Microsoft Tools",
    "Middleware Tools",
    "IT Consulting",
    "IT Outsourcing",
    "Cyber Security"
  ];

  return (
    <div className="page">

      <img src="/images/services.jpg" className="banner" alt="Services" />

      <h1>Our Services</h1>

      <div className="service-list">
        {services.map(item => (
          <div className="service-box" key={item}>
            {item}
          </div>
        ))}
      </div>

    </div>
  );
}
