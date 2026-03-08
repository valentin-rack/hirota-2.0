import Card from "../../ui/Card"

function ReservationsCard() {
  return(
    <Card title="※ Reservations" subtitle="visit us">
      <div className="flex flex-col gap-2 mt-[15px]">
        <div>
          <p className="description">To ensure proper attention and accurate measurement, please make a reservation before visiting any HIROTA location. Please call the branch you plan to visit and make a reservation in advance.</p>
        </div>
        <div>
          <p className="description">If you would like to have your karate-gi measurements taken, please inform us of your height, weight, and preferred fabric type when booking. For measurement sessions, please wear or bring a T-shirt and tight-fitting bottoms (such as spats) to ensure accurate fitting.</p>
        </div>
        <div>
          <p className="description">If you visit without a reservation or during busy periods with many appointments, we may not be able to assist you. Please make sure to book your visit in advance.</p>
        </div>
      </div>
    </Card> 
  )
}

export default ReservationsCard