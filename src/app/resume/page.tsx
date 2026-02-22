import ResumeDocument from "@/components/resume/ResumeDocument";

export const metadata = {
  title: "Resume | Venetis-Paraskevas Pallikaras",
  description: "Resume, education, publications, and skills.",
};

export default function ResumePage() {
  return (
    <div className="pt-16">
      <ResumeDocument />
    </div>
  );
}
