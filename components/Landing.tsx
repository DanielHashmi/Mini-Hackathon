import Image from 'next/image'

const Landing = (props: { image: string; imgClasses: string; first: string; height: string; img_pb: string; second: string; third: string; buttons: boolean; bg_col: string; direction: string }) => {
    return (
        <div className={`${props.bg_col} text-black flex justify-center items-center`}>
            <div dir={props.direction} className={`${props.height} lg:w-[80vw] md:p-12 p-6 w-full grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 grid-rows-2 items-center md:gap-6`}>

                <div dir='ltr' className='flex flex-col gap-8 md:gap-6'>
                    <h1 className='md:text-3xl text-xl text-[#467ca0]'>{props.first}</h1>
                    <h2 className='md:text-6xl text-5xl font-bold'>{props.second}</h2>
                    <p className='md:text-2xl text-xl'>{props.third}</p>
                    {props.buttons && <div className='flex gap-6'>
                        <button className='min-w-fit flex gap-3 bg-[#467ca0] items-center text-white px-4 sm:px-12 md:px-14 md:py-4 py-3 rounded-sm text-nowrap'>
                            Download CV
                            <Image className='' src={'/cloud down.png'} width={30} height={30} alt='cloud-down-icon' />
                        </button>
                        <button className='min-w-fit bg-[#daf1f5] text-[#457b9d] border border-[#457b9d] px-4 sm:px-12 md:px-14 md:py-4 py-3 rounded-sm text-nowrap'>Explore More</button>
                    </div>}
                </div>

                <div className={`${props.imgClasses} relative w-full h-[90%] lg:h-full`}>
                    <Image className={props.img_pb} src={`/${props.image}`} fill alt='person-image' />
                </div>

            </div>
        </div>
    )
}

export default Landing