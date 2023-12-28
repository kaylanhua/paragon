export function H1({ children, className, ...props }: { children: React.ReactNode, className?: string }) {
    return <h1 className={`font-sans md:text-7xl text-5xl font-bold ${className}`} {...props}>
        {children}
    </h1>
}

export function H2({ children, className, ...props }: { children: React.ReactNode, className?: string }) {
    return <h2 className={`font-sans md:text-5xl text-3xl font-bold ${className}`} {...props}>
        {children}
    </h2>
}

export function H3({ children, className, ...props }: { children: React.ReactNode, className?: string }) {
    return <h3 className={`font-sans md:text-3xl text-2xl font-bold ${className}`} {...props}>
        {children}
    </h3>
}

export function H4({ children, className, ...props }: { children: React.ReactNode, className?: string }) {
    return <h4 className={`font-sans md:text-lg ${className}`} {...props}>
        {children}
    </h4>
}

export function Text({ children, className, ...props }: { children: React.ReactNode, className?: string }) {
    return <div className={`font-sans ${className}`} {...props}>
        {children}
    </div>
}