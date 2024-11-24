
import Card from "./Card"

const Cards = () => {
    return (
        <div className="flex bg-[white] justify-center text-black text-center p-12">
            <div className="xl:w-[80vw] w-full flex flex-col items-center justify-center gap-12">
                <h1 className="text-4xl text-[#467ca0] font-bold">Projects</h1>
                <h2 className="text-5xl md:text-6xl font-bold">What I have made?</h2>
                <div className="flex gap-12 flex-wrap justify-center">
                    <Card links={['Figma']} image="image.png" />
                    <Card links={['Live View', 'Github', 'Figma']} image="image2.png" />
                    <Card links={['Live View', 'Github']} image="image3.png" />
                    <Card links={['Live View']} image="image4.png" />
                    <Card links={['Live View']} image="image4.png" />
                    <Card links={['Live View']} image="image4.png" />
                </div>
            </div>
        </div>
    )
}

export default Cards