import { useState, useEffect } from "react"
import styles from "../../styles/FilteredOrders.module.css"

export default function FilteredOrders({ allOrders }) {
  const [filteredOrders, setFilteredOrders] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setFilteredOrders(
      allOrders.filter(all => all.userId === localStorage.getItem("userId"))
    )
    setLoading(false)
  }, [])

  return loading
    ? "Please Wait"
    : filteredOrders.length > 0
    ? filteredOrders.map(({ productTitle, productImg, orderId }) => (
        <a
          href={"/orders/" + orderId}
          key={orderId}
          className={styles.card + " card radius"}
        >
          <img
            src={productImg}
            width={75}
            className={styles.image}
            height={50}
          />

          <div className={styles.details}>
            <p>{productTitle}</p>
          </div>
        </a>
      ))
    : "You Haven't Ordered Anything Yet"
}
