export default function BarDecoration() {
    return <div className='absolute top-0 left-[65%] h-full md:w-[35%] w-[55%] flex flex-col justify-center md:opacity-100 opacity-20'>
        <div className='from-secondary to-95% to-transparent bg-gradient-to-l h-24 w-[80%] mb-10 mt-10 ml-auto'></div>
        <div className='from-secondary to-95% to-transparent bg-gradient-to-l h-24 w-full mb-10'></div>
        <div className='from-secondary to-95% to-transparent bg-gradient-to-l h-24 w-[80%] ml-auto'></div>
    </div>
}