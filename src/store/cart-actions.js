import uiActions from "./ui-slice";
import cartActions from "./cart-slice";
const fireBaseLink = `https://react-http-3f32a-default-rtdb.asia-southeast1.firebasedatabase.app/`;
const targetNode = `/cart.json`;

//
//
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data"
      })
    );
    const sendRequest = async () => {
      const response = await fetch(`${fireBaseLink}${targetNode}`, {
        method: "PUT",
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity
        })
      });
      // console.log(response);
      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }

      const responseData = await response.json();
      // console.log(responseData);
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "sucess",
          title: "Sucess!",
          message: "Sent cart data successfully"
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed"
        })
      );
    }
  };
};
//
//
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(`${fireBaseLink}${targetNode}`);
      if (!response.ok) {
        throw new Error("Failed to load cart Item");
      }
      const data = await response.json();

      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: error.message
        })
      );
    }
  };
};
