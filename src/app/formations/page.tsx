import { pageMetadata } from "@/data/metadata";
import FormationsHero from "@/components/formations/FormationsHero";
import FormationsAudience from "@/components/formations/FormationsAudience";
import FormationsROI from "@/components/formations/FormationsROI";
import FormationsCurriculum from "@/components/formations/FormationsCurriculum";
import FormationsBonus from "@/components/formations/FormationsBonus";
import FormationsReferral from "@/components/formations/FormationsReferral";
import FormationsSuccess from "@/components/formations/FormationsSuccess";
import FormationsFAQ from "@/components/formations/FormationsFAQ";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata = pageMetadata.formations;

export default function Formations() {
  return (
    <>
      <FormationsHero />
      <FormationsAudience />
      <FormationsROI />
      <FormationsCurriculum />
      <FormationsBonus />
      <FormationsSuccess />
      <FormationsReferral />
      <FormationsFAQ />
      <FinalCTA />
    </>
  );
}
