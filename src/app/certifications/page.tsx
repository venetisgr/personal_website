import CertificationGroups from "@/components/certifications/CertificationGroups";
import ConferenceList from "@/components/certifications/ConferenceList";
import { certificationGroups, conferences } from "@/data/experience";

export const metadata = {
  title: "Certifications | Venetis-Paraskevas Pallikaras",
  description: "Professional certifications, qualifications, and conferences.",
};

export default function CertificationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      {/* Page header */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Certifications
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Professional certifications and qualifications.
        </p>
      </div>

      <CertificationGroups groups={certificationGroups} />

      {/* Conferences section */}
      <div className="mt-16">
        <h2 className="mb-6 text-2xl font-bold text-foreground">
          Conferences
        </h2>
        <ConferenceList conferences={conferences} />
      </div>
    </div>
  );
}
