import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Existing Suppliers / Contractors / Logistics sections here */}

      {/* Automotive Members Section */}
      <section className="automotive-section">
        <h2>Automotive Members</h2>
        <div className="automotive-cards">
          <div className="auto-card">
            <Image src="/assets/auto-dealer.png" alt="Dealership" width={80} height={80} />
            <h3>Dealerships</h3>
            <p>Real-time inventory and sales integration.</p>
          </div>
          <div className="auto-card">
            <Image src="/assets/auto-spares.png" alt="Motor Spares" width={80} height={80} />
            <h3>Motor Spares Shops</h3>
            <p>Parts catalog sync and supplier connections.</p>
          </div>
          <div className="auto-card">
            <Image src="/assets/auto-workshop.png" alt="Workshop" width={80} height={80} />
            <h3>Mechanical Workshops</h3>
            <p>Job scheduling and mobile dashboards.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
