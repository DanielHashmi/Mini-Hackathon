import Image from "next/image"
import Link from "next/link"

const Card = (props: { image: string; links: string[] }) => {
    return (
        <div className="l_shadow rounded-xl max-w-[25rem]">
            <Image className='w-full' src={`/${props.image}`} width={500} height={500} alt='image' />
            <div className="p-6 text-start">
                <h3 className="text-xl font-bold">Portfolio Website Design</h3>
                <p className="text-lg font-semibold">Lorem ipsum dolor sit amet consectetur.</p>
                <div className="flex gap-6 text-lg font-semibold">
                    {props.links.map((link: string, index: number) => {
                        return (
                            <Link key={index} href={'/'} className="text-cyan-600">{link}</Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Card