import Card from "../../ui/Card"

function FukuokaCard() {
  return(
    <Card title="福岡支店 Fukuoka Branch">
      <div className="description mt-[15px]">
        <p>4-2-15 Sumiyon Bldg., Sumiyoshi, Hakata-ku, Fukuoka City 812-0018, Japan.</p>
        <div class="flex justify-between">
          <span>TEL(092)475-1810</span>
          <span>FAX(092)475-1817</span>
        </div>
        <span class="link">fukuoka@karategi-hirota.co.jp</span>
        <p>Business Hours:</p>
        <ul class="list-disc list-inside">
          <li>Monday–Friday: 9:00–18:00</li>
          <li>Saturday: 9:00–17:00</li>
          <li>Sunday, National Holidays, and 2nd Saturday of each month: Closed</li>
        </ul>
      </div>
    </Card> 
  )
}

export default FukuokaCard