import { SmallText } from "./Typography";

export default function ExampleSection({ children }: { children: React.ReactNode }) {
    return <div>
        <SmallText>Some examples include</SmallText>
        <div className='flex w-full h-32 items-center mt-4 overflow-x-scroll overflow-y-hidden pb-2'>
            {children}
        </div>
    </div>
}