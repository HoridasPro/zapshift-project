import React from "react";
import Banner from "../Components/Banner";
import WorkSection from "../Components/WorkSection";
import ServicesSection from "../Components/ServicesSection";
import Brands from "../Components/Brands";
import DeliverySection from "../Components/DeliverySection";
import CustomerSection from "../Components/CustomerSection";
import Reviews from "../Router/Reviews";
const reviewsPromise = fetch("./reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <WorkSection></WorkSection>
      <ServicesSection></ServicesSection>
      <Brands></Brands>
      <DeliverySection></DeliverySection>
      <CustomerSection></CustomerSection>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
    </div>
  );
};

export default Home;
