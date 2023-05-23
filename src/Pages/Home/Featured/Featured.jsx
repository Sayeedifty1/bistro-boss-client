import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg"
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading='Check it out' heading='Featured Item'></SectionTitle>
            <div className="md:flex justify-center bg-slate-500 bg-opacity-40 items-center pb-20 pt-12 py-20 px-36">
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>May 23rd , 2023</p>
                    <p>Where can i gat some</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ad quasi soluta molestiae vero est, ea vitae voluptates tenetur, ducimus rerum praesentium error consequatur sunt id porro ab aspernatur rem explicabo quo ratione laboriosam eos? Aliquam est vitae, ad quasi quis pariatur doloribus ratione recusandae nam sit eveniet, nesciunt aspernatur.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 text-white hover:text-yellow-600">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;