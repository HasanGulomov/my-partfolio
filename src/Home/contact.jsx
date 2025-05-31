import React, { useState } from 'react';


function Connect() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => {
    if (fullName && email && mobile && subject && message) {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 4000);
    } else {
      alert('Iltimos, barcha inputlarni to‘ldiring.');
    }
  };

  // Modalni yopish uchun funksiya
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container-connect">
      <div className="connect-header">
        <h1>Contact me</h1>
        <div className="connect-site">
          <div className="input1">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input2">
            <input
              type="text"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
        </div>
        <input
          className="your-message"
          type="text"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSubmit}>Send Message</button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            {/* Close button */}
            <button className="modal-close-btn" onClick={closeModal} aria-label="Close modal">
              &times;
            </button>
            <p>✅ Qabul qilindi! Bir necha soniyadan keyin operator siz bilan bog‘lanadi.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Connect;
