import { ArrowRight } from "lucide-react";
import TourCard from "./CardTours";
import TourSidebar from "./Toursidebar ";
import type { Tour } from "@/lib/types";

export default function PopularPackagesSection({
  categoryTours,
}: {
  categoryTours: Tour[];
}) {
  if (categoryTours.length === 0) return null;

  return (
    <section className="py-5 mt-5">
      <div className="container-fluid px-5">
        <h2 className="fw-bold section-title mb-4">Popular Packages</h2>

        <div className="row g-4">
          <div className="col-lg-9">
            <div className="d-flex flex-column gap-3 shadow-lg ms-5">
              {categoryTours.map((t) => (
                <TourCard tour={t} key={t.id} />
              ))}
            </div>

            <div className="d-flex justify-content-center mt-4">
              <a
                href="#"
                className="btn btn-outline-success fw-bold d-inline-flex align-items-center gap-2 px-4"
              >
                VIEW ALL PACKAGES <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="shadow-lg">
              <TourSidebar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}