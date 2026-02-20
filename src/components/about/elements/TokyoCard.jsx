import Card from "../../ui/Card"

function TokyoCard() {
  return(
    <Card title="東京本社 Tokyo Head Office" subtitle="contact us">
      <div className="description mt-[15px]">
        <p>NS Bldg. 1F, 5-33-6 Kamata, Ohta-ku, Tokyo 144-0052, Japan.</p>
        <div class="flex justify-between">
          <span>TEL(03)3730-5366</span>
          <span>FAX(03)3730-5336</span>
        </div>
        <span class="link">tokyo@karategi-hirota.co.jp</span>
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

export default TokyoCard