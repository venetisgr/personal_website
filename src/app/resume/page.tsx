import ResumeSection from "@/components/home/ResumeSection";

export const metadata = {
  title: "Resume | Venetis-Paraskevas Pallikaras",
  description: "Resume, education, publications, and skills.",
};

export default function ResumePage() {
  return (
    <div className="pt-16">
      <ResumeSection />
    </div>
  );
}
