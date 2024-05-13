import ReviewImg from "../../assets/Group 314.png"

const Review = () => {
  return (
    <div className="flex flex-col py-3 px-7">
      <div className="flex items-center gap-3">
        <h2 className="text-3xl font-bold text-black"> Your reviews</h2>
        <p className="text-van-200 font-medium text-base">last <span className="underline font-bold">30days</span></p>
      </div>
      <img src={ReviewImg} alt="rating" className="py-7" />
      <div className="flex flex-col">
        <p className="text-lg text-black font-bold">Reviews (2)</p>
        <div className="flex flex-col gap-3 py-3">
          <div className="flex gap-1">
            <i className="fa-solid fa-star text-van-300"></i>
            <i className="fa-solid fa-star text-van-300"></i>
            <i className="fa-solid fa-star text-van-300"></i>
            <i className="fa-solid fa-star text-van-300"></i>
            <i className="fa-solid fa-star text-van-300"></i>
          </div>
          <div className="flex flex-col gap-3 border-b-2 border-host-300 border-b-host-300 pb-5">
            <p className="text-base font-semibold">Eden <span className="text-van-200">December 1, 2023</span></p>
            <p className="text-base font-medium text-van-400">
              The beach bum is such as awesome van! Such as comfortable trip. 
              We had it for 2 weeks and there was not a single issue. 
              Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-4">
          <div className="flex gap-1">
            <i className="fa-solid fa-star text-van-300"></i>
            <i className="fa-solid fa-star text-van-300"></i>
            <i className="fa-solid fa-star text-van-300"></i>
            <i className="fa-solid fa-star text-van-300"></i>
            <i className="fa-solid fa-star text-van-300"></i>
          </div>
          <div className="flex flex-col gap-3 border-b-2 border-host-300 border-b-host-300 pb-5">
            <p className="text-base font-semibold">Eleazar <span className="text-van-200">April 2, 2024</span></p>
            <p className="text-base font-medium text-van-400">
              This is our third time using the Modest Explorer for our travels and we love it! 
              No complaints, absolutely perfect!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review