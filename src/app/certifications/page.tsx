import SkillBadges from "@/components/experience/SkillBadges";
import { certifications } from "@/data/experience";

export const metadata = {
  title: "Certifications | Venetis-Paraskevas Pallikaras",
  description: "Professional certifications and qualifications.",
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

      <SkillBadges certifications={certifications} />
    </div>
  );
}
