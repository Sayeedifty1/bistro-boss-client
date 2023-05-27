import FoodCard from "../../../components/SectionTitle/FoodCard/FoodCard";

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination';

// TODO: add pagination
const OrderTab = ({ items }) => {
    const pagination = {
        "clickable": true,
        "renderBullet": function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
    }
    return (

        <div >

            <Swiper
                pagination={pagination}
                className="mySwiper"
                modules={pagination}  //unwanted [] was here before and that was giving error mod is not defined
            >
                <SwiperSlide>
                    <div className='grid md:grid-cols-3 gap-3 mb-16'>
                    {
                        items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)

                    }
                    </div>
                    
                </SwiperSlide>


            </Swiper>
        </div>

    );
};

export default OrderTab;