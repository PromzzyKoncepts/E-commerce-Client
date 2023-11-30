import React from "react";
import faqs from "../assets/faq.webp";
import "../stylesheets/Faq.css"
import Footer from "./Footer"
const FAQ = () => {
    return (
        <>
            <div className="my-[40px] w-10/12  mx-auto ">
                <h1 className=" py-[40px]">Frequently Asked Questions</h1>
                <div className=" block rounded md:flex space-y-4 bg-amber-500 p-[40px] my-[40px]">
                    <p>
                        Get all the answers to the most frequently asked
                        questions (FAQs) regarding some of our popular
                        categories which include electronics, mobile phones,
                        computers, fashion, beauty products, home and
                        kitchen,building and construction materials and a whole
                        lot more from premium brands as well as managing your
                        account, payment, vouchers and much, much more.{" "}
                    </p>
                    <img src={faqs} alt="faq-img" />
                </div>
                <div className=" block rounded md:flex gap-7">
                    <div className=" sm:w-auto flex md:w-[70vw] bg-slate-100 rounded p-5 flex-col space-y-4">
                        <a href="#first_question" className="no-underline text-gray-400 hover:text-amber-500">Can I buy in bulk? </a>
                        <a href="#second_question" className="no-underline text-gray-400 hover:text-amber-500">
                            Will all of the items in my order arrive in a single
                            package?{" "}
                        </a>
                        <a href="#third_question" className="no-underline text-gray-400 hover:text-amber-500">
                            Why do I see different prices for the same product?{" "}
                        </a>
                        <a href="#fourth_question" className="no-underline text-gray-400 hover:text-amber-500">
                            What is buyer protection?{" "}
                        </a>
                        <a href="#fifth_question" className="no-underline text-gray-400 hover:text-amber-500">
                            Why does the estimated delivery time vary?{" "}
                        </a>
                        <a href="#sixth_question" className="no-underline text-gray-400 hover:text-amber-500">
                        What is the estimated delivery time?{" "}
                        </a>
                        <a href="#last_question" className="no-underline text-gray-400 hover:text-amber-500">Who will deliver my order? </a>
                    </div>
                    <div>
                        <h4 id="first_question" className="mt-3">Can I buy in bulk? </h4>
                        <p>
                        Absolutely! We welcome bulk orders on our platform. If you are interested in purchasing items in larger quantities, please reach out to our dedicated bulk order team or through our Contact Us page. Our team will be happy to assist you, provide information on available discounts, and ensure a smooth and efficient ordering process for your bulk purchase. Thank you for considering us for your larger quantity needs!{" "}
                        </p>
                        <h4 id="second_question" className="mt-3">
                            Will all of the items in my order arrive in a single
                            package?{" "}
                        </h4>
                        <p>
                            If your order consists of items from more than one
                            seller, your items will arrive separately. If your
                            order consists of items from a single seller, your
                            items may arrive together or separately. If your
                            orders arrive separately, be rest assured that the
                            remaining item(s) will be delivered shortly.
                        </p>
                        <h4 id="third_question"className="mt-3">
                            {" "}
                            Why do I see different prices for the same product?
                        </h4>
                        <p>
                            Aphia is your trusted online marketplace that
                            supports Nigerian entrepreneurs and we have many
                            different sellers competing for business. Therefore,
                            you may see the same product offered by different
                            sellers at different prices. We believe that by
                            supporting these 'third-party' sellers, we can offer
                            you a wider product selection, more choice,
                            increased convenience, and better pricing.
                        </p>
                        <h4 id="fourth_question" className="mt-3">What is buyer protection?</h4>
                        <p>
                            We offer all our customers ultimate peace of mind.
                            We have you covered 100% on every eligible purchase.
                        </p>
                        <h4 id="fifth-question" className="mt-3">What is the estimated delivery time?</h4>
                        <p>
                            Aphia delivers products to customers all over
                            Nigeria. Lagos 2-5, Rivers 3-7, Abuja 3-8 & other
                            states 4-9 days
                        </p>
                        <h4 id="sixth-question" className="mt-3">
                            Why does the estimated delivery time vary?
                        </h4>
                        <p>
                            Aphia is a true online marketplace that empowers
                            Nigerians across the country. This means that not
                            all products on aphia are sold or delivered by
                            aphia . In addition, aphia buyers and sellers are
                            found in every state in Nigeria. Given the various
                            factors involved (the time it takes a seller to
                            ship, the courier company used, the distance between
                            buyer and seller, and more) delivery times may vary.
                        </p>
                        <h4 id="last_question" className="mt-3"> Who will deliver my order?</h4>
                        <p>
                            {" "}
                            Your order may be delivered by KOS, by other courier
                            companies, or by the seller or the seller's agents,
                            depending on whether the item was sold by aphia or a
                            third-party seller and on the delivery method chosen
                            by a third-party seller. You may be called prior to
                            or on the same day as delivery to see if you are
                            available to receive your order.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default FAQ;
