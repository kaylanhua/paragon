import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { Text } from "./Typography";

interface ExampleCardProps {
    image: string | StaticImport;
    href: string;
    children: ReactNode;
}

export default function ExampleCard({ image, href, children }: ExampleCardProps) {
    return (
        <Link className="flex items-center md:mr-4 mr-8 flex-shrink-0" href={href}>
            <Image src={image} width={600} height={400} alt="Logo" className="h-28 rounded-lg md:w-44 w-36 object-cover bg-muted" />
            <Text className="ml-4 md:max-w-56 max-w-32">{children}</Text>
        </Link>
    );
}