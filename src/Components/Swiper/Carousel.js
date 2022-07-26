import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import './carousel.css';
import { Keyboard, EffectCards } from "swiper";

const Carousel = (props) => {
  const defaultBackground = `linear-gradient(to bottom right, #FD4556, #BD3944, #53212B, #FFFBF5`;

  const card = props.agentList['data']?.map(agent => {
    const backgroundStyle = {
      background: agent.backgroundGradientColors ? 
      `linear-gradient(to bottom right, #${agent.backgroundGradientColors[0]}, #${agent.backgroundGradientColors[1]}, #${agent.backgroundGradientColors[2]}, #${agent.backgroundGradientColors[3]})` : defaultBackground
    }

    return (
      <SwiperSlide
        className="agent-card"
        key={agent.uuid}
        style={backgroundStyle}
      >
        <img className="agent-background" src={agent.background} />
        <img src={agent.fullPortraitV2} />
      </SwiperSlide>
    )
  });

  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Keyboard]}
        keyboard={{
            enabled: true,
        }}
        className="mySwiper"
      >
        {card}
      </Swiper>
    </div>
  );
}

export default Carousel;