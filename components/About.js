import Image from 'next/image';

export default function About({ about }) {
  return (
    <section className="py-5 bg-dark text-light" id="about">
      <div className="container">
        <h1 className="text-center mb-5 display-4 text-gradient">{about.title}</h1>

        <div className="row align-items-center g-4">
          {/* Image Column */}
          <div className="col-md-6">
            <div className="position-relative rounded shadow overflow-hidden">
              <Image
                src={about.image}
                alt="About"
                width={600}
                height={400}
                className="img-fluid w-100"
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient opacity-25"></div>
            </div>
          </div>

          {/* Content Column */}
          <div className="col-md-6">
            <p className="lead bg-light text-dark p-3 rounded shadow-sm mb-4">
              {about.content}
            </p>

            {/* Timeline */}
            <div className="border-start border-3 ps-3">
              {about.highlights.map((item, index) => (
                <div key={index} className="mb-4 position-relative">
                  <span className="position-absolute top-0 start-0 translate-middle bg-primary rounded-circle p-2 border border-light"></span>
                  <div className="ms-4 bg-secondary p-3 rounded shadow">
                    <h5 className="mb-0 text-white">{item}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-gradient {
          background: linear-gradient(45deg, #6D28D9, #8B5CF6, #4F46E5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
}
