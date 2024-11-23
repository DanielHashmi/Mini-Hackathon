import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='bg-[#ebfeff] text-black flex justify-center items-center border-b-2 border-black'>
            <div className='lg:w-[80vw] w-full p-4 md:p-12 flex justify-between items-center '>

                <div className='text-4xl font-semibold'>Rizfan</div>

                <div className='md:flex hidden gap-6 xl:gap-12 text-2xl xl:text-4xl'>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/'}>About</Link>
                    <Link href={'/'}>Skill</Link>
                    <Link href={'/'}>Project</Link>
                    <Link href={'/'}>Contact</Link>
                </div>
                <Image className='block md:hidden' src={'/menu.svg'} width={50} height={50} alt='menu-icon' />
            </div>
        </div>
    )
}

export default Navbar