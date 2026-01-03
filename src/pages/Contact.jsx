export default function Contact() {
  return (
    <div className="page">

      {/* Top Banner */}
      <img src="/images/contact.jpg" className="banner" alt="Contact" />

      <h1>Contact Us</h1>

      <h2>Our Office Address</h2>

      <div className="address-box">
        Flat no: 302, SS Trinity, Trinity Complex,<br />
        Sompura Gate, Dommasandra, Sarjapur,<br />
        Anekal Taluk, Bengaluru - 562125
      </div>

      <div className="address-box">
        📧 Email: admin@techmindz.co.in <br />
        📞 Phone: +91 78450 49711
      </div>

      <h2>Get In Touch</h2>

<div
  className="getintouch-wrapper"
  style={{
    backgroundImage: "url(/images/getintouch.jpg)"
  }}
>
  <div className="overlay">

    <div className="getintouch-box">
      <form className="form-inside-image">
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Phone" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" rows="5" />
        <button>Send Message</button>
      </form>
    </div>

  </div>
</div>


    </div>
  );
}
