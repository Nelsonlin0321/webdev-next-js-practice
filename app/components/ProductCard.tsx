import React from "react";
import AddToCard from "./AddToCard";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.cardContainer}>
      <AddToCard />
    </div>
  );
};

export default ProductCard;
