function FollowUsCard() {
  return (
    <div className="flex justify-between items-start p-[15px] backdrop-blur-md bg-black/7 rounded-[8px]">

      <div>
        <div className="description mb-2">
          <p>Instagram</p>
          <a href="https://www.instagram.com/hirota.koichi/" target="_blank" rel="noopener noreferrer" className="link">@hirota.koichi</a>
        </div>
        <div className="description mb-2">
          <p>Facebook</p>
          <a href="https://www.facebook.com/people/%E7%A9%BA%E6%89%8B%E8%A1%A3%E3%81%AE%E3%83%92%E3%83%AD%E3%82%BF/100038066419309/#" target="_blank" rel="noopener noreferrer" className="link">@空手衣のヒロタ</a>
        </div>
        <div className="description">
          <p>Youtube</p>
          <a href="https://www.youtube.com/channel/UCYUnSvA__mm7xgxBltJv0ew" target="_blank" rel="noopener noreferrer" className="link">@karategi-hirota5044</a>
        </div>
      </div>

      <div>
        <h2 className="text-neutral-400 leading-tight">follow us</h2>
      </div>

    </div>
  );
}

export default FollowUsCard;