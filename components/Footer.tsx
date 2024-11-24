import Image from "next/image"

const Footer = () => {
    return (
        <div className="flex justify-center text-black bg-[#ebfeff] p-6 sm:p-12">
            <div className="lg:w-[80vw] w-full flex flex-col gap-6">
                <h3 className="text-[#457b9d] text-2xl sm:text-4xl font-bold">Contacts</h3>
                <h3 className="font-bold sm:text-6xl text-4xl">Get in touch</h3>
                <h3 className="text-3xl">rizfanher@gmail.com</h3>
                <div className="flex gap-3">
                    <Image src={'/in.png'} width={50} height={50} alt='linkedin-icon' />
                    <Image src={'/github.png'} width={50} height={50} alt='github-icon' />
                    <Image src={'/insta.png'} width={50} height={50} alt='instagram-icon' />
                </div>
                <h3 className="mt-12 text-xl sm:text-3xl">Copyright © 2023. Develop & Designed by Rizfan Herlaya</h3>
            </div>
        </div>
    )
}

export default Footer