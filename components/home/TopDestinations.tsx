export default function TopDestinations() {
  return (
    <section className="py-5">
      <div className="container-fluid px-4 px-md-5">
        <h2 className="text-stars fw-bold fs-3 mb-4">Top Destinos</h2>

        <div className="row g-3 g-lg-4 text-center">
          <div className="col-12 col-lg">
            <div className="card card-topdes border-0 h-100">
              <div className="ratio ratio-1x1 rounded-5 overflow-hidden">
                <img src="/images/Picchu.jpg" alt="Machu Picchu" className="object-fit-cover" />

              <div className="card-overlay d-flex flex-column justify-content-end text-white p-3">
                <h5 className="fw-bold mb-1">Machu Picchu</h5>
                <p className="small mb-0">Wonder of the World</p>
              </div>
            </div>
            </div>
          </div>

          <div className="col-12 col-lg">
            <div className="card card-topdes border-0 h-100">
              <div className="ratio ratio-1x1 rounded-4 overflow-hidden">
                <img src="/images/vallesagrado.jpg" alt="Sacred Valley" className="object-fit-cover" />
              
              <div className="card-overlay d-flex flex-column justify-content-end text-white p-3">
                <h5 className="fw-bold mb-1">Sacred Valley</h5>
                <p className="small mb-0">History and Culture</p>
              </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg">
            <div className="card card-topdes border-0 h-100">
              <div className="ratio ratio-1x1 rounded-5 overflow-hidden">
                <img src="/images/montaña.webp" alt="Rainbow Mountain" className="object-fit-cover" />
              
              <div className="card-overlay d-flex flex-column justify-content-end text-white p-3">
                <h5 className="fw-bold mb-1">Rainbow Mountain</h5>
                <p className="small mb-0">A Unique Natural Wonder</p>
              </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg">
            <div className="card card-topdes border-0 h-100">
              <div className="ratio ratio-1x1 rounded-5 overflow-hidden">
                <img src="/images/Lago.jpg" alt="Lake Titicaca" className="object-fit-cover" />
              
              <div className="card-overlay d-flex flex-column justify-content-end text-white p-3">
                <h5 className="fw-bold mb-1">Lake Titicaca</h5>
                <p className="small mb-0">Mystical and Amazing</p>
              </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg">
            <div className="card card-topdes border-0 h-100">
              <div className="ratio ratio-1x1 rounded-5 overflow-hidden">
                <img src="/images/amazonas.jpg" alt="Amazon Rainforest" className="object-fit-cover" />
             
              <div className="card-overlay d-flex flex-column justify-content-end text-white p-3">
                <h5 className="fw-bold mb-1">Amazon Rainforest</h5>
                <p className="small mb-0">Adventure and Biodiversity</p>
              </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
