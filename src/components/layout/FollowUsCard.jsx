function FollowUsCard() {
  return (
    <div className="flex justify-between items-start p-[15px] pt-2 backdrop-blur-md bg-black/7 rounded-[10px]">

      <div>
        <div className="text-[13px] text-neutral-500 leading-tight mb-2">
          <p>Instagram</p>
          <a href="https://www.instagram.com/hirota.koichi/" target="_blank" rel="noopener noreferrer" className="text-[13px] text-neutral-500 hover:underline hover:underline-offset-2 hover:opacity-70 transition-opacity">@hirota.koichi</a>
        </div>
        <div className="text-[13px] text-neutral-500 leading-tight mb-2">
          <p>Facebook</p>
          <a href="https://www.facebook.com/people/%E7%A9%BA%E6%89%8B%E8%A1%A3%E3%81%AE%E3%83%92%E3%83%AD%E3%82%BF/100038066419309/#" target="_blank" rel="noopener noreferrer" className="text-[13px] text-neutral-500 hover:underline hover:underline-offset-2 hover:opacity-70 transition-opacity">@空手衣のヒロタ</a>
        </div>
        <div className="text-[13px] text-neutral-500 leading-tight">
          <p>Youtube</p>
          <a href="https://www.youtube.com/channel/UCYUnSvA__mm7xgxBltJv0ew" target="_blank" rel="noopener noreferrer" className="text-[13px] text-neutral-500 hover:underline hover:underline-offset-2 hover:opacity-70 transition-opacity">@karategi-hirota5044</a>
        </div>
      </div>

      <div>
        <h2 className="text-[13px] text-neutral-400 leading-tight">follow us</h2>
      </div>

    </div>
  );
}

export default FollowUsCard;