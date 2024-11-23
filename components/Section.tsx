import Image from "next/image"

const Section = () => {
    return (
        <div className="flex bg-[#ebfeff] justify-center text-black text-center md:p-20 p-12">
            <div className="lg:w-[80vw] w-full flex flex-col items-center justify-center gap-12">
                <h1 className="text-4xl text-[#467ca0] font-bold">Skills</h1>
                <h2 className="text-5xl md:text-6xl font-bold">What I am capable of?</h2>
                <div className="flex gap-12 flex-wrap md:flex-nowrap justify-center">
                    <Image className='w-20 xl:w-full' src={'/html.png'} width={100} height={100} alt='html-icon' />
                    <Image className='w-20 xl:w-full' src={'/css.png'} width={100} height={100} alt='css-icon' />
                    <Image className='w-20 xl:w-full' src={'/b.png'} width={100} height={100} alt='bootstrap-icon' />
                    <Image className='w-20 xl:w-full' src={'/tailwind.png'} width={100} height={100} alt='tailwind-icon' />
                    <Image className='w-20 xl:w-full' src={'/php.png'} width={100} height={100} alt='php-icon' />
                    <Image className='w-20 xl:w-full' src={'/block.png'} width={100} height={100} alt='block-icon' />
                </div>
            </div>
        </div>
    )
}

export default Section