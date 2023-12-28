export default function Section({ children, className, ...props }: { children: React.ReactNode, className?: string }) {
    return <section className={`flex flex-col w-screen max-w-[1200px] px-10 box-border mx-auto overflow-x-hidden ${className}`} {...props}>
        {children}
    </section>
}