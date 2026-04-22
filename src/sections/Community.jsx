import React from 'react'
import skincare from '../util/skincare'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './styles/SkinCare.scss'

const Community = () => {
  // 1. 각 슬라이드의 id와 이미지 경로를 연결하는 객체를 만듭니다.
  // (슬라이드 id가 1, 2, 3...이라면 아래처럼 작성하세요)
  const imageMap = {
    1: '/img/000.png',
    2: '/img/style1.png',
    3: '/img/style2.png',
    // 필요한 만큼 계속 추가하세요
  };

  return (
    <div className='inner skincare-inner'>
      <div className="t-wrap">
        <h2 className="tit">
          Step into style
        </h2>
        <p className="txt">
          컨버즈(Conbuzz)는 기존의 제지 제조 중심 사업 구조에서 벗어나 <br />
          ICT(정보통신기술) 및 통신장비 사업으로 주력 사업을 전환하고 있는 코스피 상장 기업입니다
        </p>
        <a href="#" className="btn">
          meet converse
        </a>
      </div>
      <div className="slider-wrap">
        <div className="in">
          <Swiper 
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            className="skincare-slider"
          >
            {skincare.map((sl) => (
              <SwiperSlide 
                key={sl.id} 
                // 2. 여기서 imageMap[sl.id]를 통해 해당 id에 맞는 이미지를 가져옵니다.
                style={{ 
                  backgroundImage: `url('${imageMap[sl.id]}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <a href={sl.link}>
                  {sl.id}
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Community