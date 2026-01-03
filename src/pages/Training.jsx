export default function Training() {
  return (
    <div className="page">

      {/* Training Banner Image */}
      <img src="/images/training.jpg" className="banner" alt="Training" />

      <h1>Our Training Programs</h1>

      <p>
        Techmindz provides structured, industry-oriented training programs designed
        for students, freshers and working professionals to upgrade their technical
        skills and build successful IT careers.
      </p>

      <div className="grid">

        <div className="card">
          <h3>Online Training</h3>
          <p>
            Learn from expert trainers through interactive virtual classrooms from anywhere in the world.
          </p>
        </div>

        <div className="card">
          <h3>Virtual Job Support</h3>
          <p>
            Real-time project assistance for professionals working on demanding technologies.
          </p>
        </div>

        <div className="card">
          <h3>Corporate Training</h3>
          <p>
            Customized skill-development programs designed for corporate teams and organizations.
          </p>
        </div>

      </div>

    </div>
  );
}
