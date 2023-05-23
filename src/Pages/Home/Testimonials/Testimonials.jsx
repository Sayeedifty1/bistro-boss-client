import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Navigation } from "swiper";
import {FaQuoteLeft} from 'react-icons/fa'
import { Swiper, SwiperSlide } from "swiper/react";
// Import swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

import { useEffect, useState } from "react";


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("reviews.json")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    return (
        <section className="my-20">
            <SectionTitle
                subHeading="What our client say"
                heading="Testimonials"
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map((review) => <SwiperSlide
                        key={review._id}>
                        <div className="flex flex-col items-center my-16">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            
                            <FaQuoteLeft className="text-8xl mt-20" />
                            <div className="mb-24">
                           
                                <p className="py-8">{review.details}</p>
                                <h3 className="text-2xl text-orange-400">{review.name}</h3>
                            </div>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </section>
    );
};

export default Testimonials;