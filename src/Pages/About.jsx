
const About = () => {
  return (
    <div className="w-full flex flex-col">
        <div className="hero"></div>
        <div className="container p-6 flex flex-col gap-7">
            <h1 className="text-about-600 text-3xl font-bold pt-3">
                Don’t squeeze in a sedan when you could relax in a van.
            </h1>
            <p className="font-medium text-about-600 text-base">
            Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
            (Hitch costs extra 😉) <br /> <br />

            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
            </p>
            <div className="bg-about-200 w-full h-52 my-9 flex flex-col p-7 gap-7 rounded">
                <h1 className="text-about-600 text-2xl font-bold">
                    Your destination is waiting. <br />
                    Your van is ready.
                </h1>
                <button className="bg-about-600 text-white text-base w-44 h-12 rounded-xl">
                    Explore our vans
                </button>
            </div>
        </div>
    </div>
  )
}

export default About