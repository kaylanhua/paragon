import { RenderTeamSections, SectionType } from "@/app/team/page";

export default function TeamPage() {
    return RenderTeamSections("Advisors & Speakers", [SectionType.ADVISORS, SectionType.SPEAKERS]);
}
