import { RenderTeamSections, SectionType } from "@/app/team/page";

export default function TeamPage() {
    return RenderTeamSections([SectionType.ADVISORS, SectionType.SPEAKERS]);
}
