import GraphImg from "../../assets/Group 312.png"

const Income = () => {
  return (
    <div className="flex flex-col gap-4 px-7 py-3">
      <h2 className="text-4xl font-bold text-black">Income</h2>
      <p className="text-van-200 font-medium text-base">last <span className="underline font-bold">30days</span></p>
      <h2 className="text-5xl font-bold text-black">$2,260</h2>
      <img src={GraphImg} alt="bar chart" />
      <div className="flex gap-5 flex-col py-7">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Your Transactions (3)</h2>
          <p className="text-van-200 font-medium text-base">last <span className="underline font-bold">30days</span></p>
        </div>
        <div className="flex justify-between bg-white py-5 px-4">
          <h2 className="font-semibold text-4xl">$720</h2>
          <p className="text-van-200 font-medium text-base">12/4/24</p>
        </div>

        <div className="flex justify-between bg-white py-5 px-4">
          <h2 className="font-semibold text-4xl">$560</h2>
          <p className="text-van-200 font-medium text-base">20/4/24</p>
        </div>

        <div className="flex justify-between bg-white py-5 px-4">
          <h2 className="font-semibold text-4xl">$980</h2>
          <p className="text-van-200 font-medium text-base">1/5/24</p>
        </div>
      </div>
    </div>
  )
}

export default Income