import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
const Home = () => {

  return (
    <div>
      <Navbar />
      <Landing
        first="Hi Everyone, I am"
        second="Rizfan Herlaya"
        third="Lorem ipsum dolor sit amet consectetur. Vitae maecenas pellentesque tellus tempus purus integer nisi cras fermentum."
        buttons={true}
        image="first.png"
        imgClasses="max-w-[26rem] md:max-w-[32rem] justify-self-center sm:justify-self-start md:justify-self-end"
        bg_col="bg-[#ebfeff]"
        direction=""
        img_pb="md:pb-56 xl:pb-32"
        height="md:h-[85vh] h-[52rem]"
      />

      <Landing
        first="About"
        second="About Me?"
        third="
        Lorem ipsum dolor sit amet consectetur. Iaculis diam augue a adipiscing non aliquet. Leo semper lacus fringilla consectetur cras ac ullamcorper ut. Risus nunc diam accumsan feugiat. Tristique diam consectetur aliquam vitae suspendisse vel leo. Nec quisque senectus laoreet id pulvinar id vulputate. Montes consectetur diam non aliquam nunc maecenas non. Molestie pretium amet id dictum vitae nam vel sit. Rhoncus massa velit ut amet massa morbi eget.
        "
        buttons={false}
        image="second.png"
        imgClasses="max-w-[26rem] md:max-w-[32rem] justify-self-center sm:justify-self-start md:justify-self-end"
        bg_col="bg-[white]"
        direction="rtl"
        img_pb="md:py-32 py-12 sm:py-0"
        height="md:h-[85vh] gap-12"
      />
      <Section />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home