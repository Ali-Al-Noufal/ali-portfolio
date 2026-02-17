
const Home = ({image,name,position,description,cv}) => {
  return (
    <div className="w-full h-[130vh] md:h-screen lg:h-screen flex flex-wrap justify-between items-center lg:items-end relative">
      <svg className="hidden md:block absolute w-full h-full top-35"  fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-30 295.176C-11.901 295.176 125.651 458.5 307.676 458.5C560.544 458.5 696.694 -136.474 1052.84 29.8421C1335.18 161.695 1459.29 175.803 1511 84.1028" stroke="#D3D5D6"/>
</svg>
      <svg className="hidden md:block absolute w-full h-full top-50"  fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-30 91.9557C-13.9695 104.436 125.651 396.357 307.676 396.357C560.544 396.357 738.063 -133.505 1094.21 32.8118C1376.55 164.665 1421.02 143.503 1511 76.2203" stroke="#D3D5D6"/>
</svg>
<div className="w-full md:w-[40%] lg:w-[40%] h-[50%] md:h-[80%] pt-[20%] lg:pt-0 lg:h-[60%]  z-50 flex flex-col flex-wrap justify-center items-start relative mx-[5%]">
<h1 className="font-bold text-[30px] lg:text-[55px] w-full text-[#1D2130] dark:text-[#FFFFFF]"><span className="font-normal text-[30px] lg:text-[55px] px-1">HEY!</span>I'm {name},</h1>
<h1 className="font-bold text-[30px] lg:text-[55px] w-full text-[#1D2130] dark:text-[#FFFFFF]">{position}</h1>
<p className="text-[#43495B] w-[80%] md:w-[60%] text-[18px] dark:text-[#FFFFFF] my-4">{description}</p>
<button className="hover:bg-[#1D2130] dark:hover:border-[#FFFFFF] hover:text-[#FFFFFF] dark:bg-[#0C96E299] dark:text-[#FFFFFF] w-38.75 h-12.5 text-[15px] font-semibold border border-[#FFFFFF] dark:border-[#0C96E299] rounded-md my-2"><a href={cv} download>Download Cv</a></button>


</div>
<div className="w-full md:w-[50%] h-[50%] pb-[10%] md:pb-0 lg:h-[60%] z-50 flex justify-center items-center relative">
{image?<><div className="bg-[#DFE1FA] absolute top-[15%] w-80 h-80 border border-[#DFE1FA] rounded-[50%]">
</div>
  <img src={image} className="absolute h-[82%] md:h-full w-[70%] md:w-[50%] top-10 z-999" />
<svg className="absolute top-3 lg:top-10 left-4 md:left-15" width="62" height="68" viewBox="0 0 62 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="54.6842" height="57.0191" rx="16" transform="matrix(0.846931 -0.531703 0.468952 0.883224 -5.57068 22.9312)" fill="#583FBC"/>
</svg>
<svg className="absolute right-5 top-[23%] md:right-[10%] lg:right-[21%]" width="43" height="46" viewBox="0 0 43 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="37.7442" height="38.9178" rx="12" transform="matrix(0.803615 0.59515 -0.530819 0.847485 16.2023 -4.88452)" fill="#0C96E2"/>
</svg>
<svg className="absolute right-0 top-[50%] md:right-[5%] lg:right-[20%]" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="9.65583" cy="10.4996" rx="9.65583" ry="10.4996" fill="#0C96E2"/>
</svg>
<svg className="absolute right-20 top-[15%] md:right-[25%] lg:right-[35%]" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="5.94205" cy="6.46128" rx="5.94205" ry="6.46128" fill="#7B55EC"/>
</svg></>:<img src="/images/background.png" className="w-[90%] md:w-[70%] h-full"/>}
</div>
<svg className="absolute bottom-0 left-[-150%] md:left-[-40%] lg:left-0 md:my-0 " width="1366"  height="22" viewBox="0 0 1366 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="-221.75"  y="11.3906" width="0.5" height="1810.45" transform="rotate(-90 -221.75 11.3906)" stroke="#D3D5D6" stroke-width="0.5" stroke-dasharray="5 10"/>
<circle cx="685.969" cy="11" r="10.5" fill="#EFF2F7" stroke="#1D2130"/>
<circle cx="685.969" cy="10.9998" r="7.44897" stroke="#1D2130"/>
<circle cx="685.969" cy="10.9998" r="7.44897" stroke="#1D2130"/>
<circle cx="685.969" cy="11" r="2" fill="#1D2130"/>
</svg>

    
    </div>
  )
}

export default Home
