import { RiCharacterRecognitionFill } from "react-icons/ri";
import CornerDecoration from "./CornerDecoration";

export default function LipsumCornerDecoration() {
    return <CornerDecoration style={{ width: "100%" }} uniqueId='text' icon={RiCharacterRecognitionFill} className="absolute top-6 right-6 w-[380px] md:block hidden">
        <text x="100%" y="10%" fontSize="16" textAnchor='end' fill="white">
            <tspan x="100%" dy="0">LOREM IPSUM DOLOR SIT AMET, CONSECTETUR</tspan>
            <tspan x="100%" dy="1.2em">ADIPISCING, SED DO EIUSMOD TEMPOR</tspan>
            <tspan x="100%" dy="1.2em">INCIDIDUNT UT LABORE ET MAGNA ALIQUA.</tspan>
            <tspan x="100%" dy="1.2em">UT AD MINIM VENIAM, QUIS NOSTRUD</tspan>
            <tspan x="100%" dy="1.2em">EXCEPTEUR SINT OCCAECAT CUPIDATAT</tspan>
            <tspan x="100%" dy="1.2em">EXERCITATION ULLAMCO LABORIS UT</tspan>
            <tspan x="100%" dy="1.2em">ALIQUIP EA COMMODO CONSEQUAT.</tspan>
            <tspan x="100%" dy="1.2em">IN VOLUPTATE VELIT ESSE CILLUM</tspan>
            <tspan x="100%" dy="1.2em">DOLORE EU FUGIAT NULLA PARIATUR.</tspan>
            <tspan x="100%" dy="1.2em">DUIS IN REPREHENDERIT</tspan>
        </text>
    </CornerDecoration>
}