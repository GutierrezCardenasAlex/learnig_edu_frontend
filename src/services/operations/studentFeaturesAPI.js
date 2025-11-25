import { toast } from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { orderEndpoints } from "../apis";
import { resetCart } from "../../slices/cartSlice";

/*
    ======================================
      FLUJO DE COMPRA MANUAL (SIN RAZORPAY)
    ======================================
    1. El estudiante selecciona cursos
    2. Se crea una ORDÉN (pendiente)
    3. El admin la aprueba desde el panel
    4. Solo entonces se inscribe al estudiante
*/

// ================================
// Crear orden manual
// ================================
export async function createManualOrder(token, coursesId, navigate, dispatch) {
    const toastId = toast.loading("Enviando orden...");

    try {
        console.log("URL QUE SE USA PARA ORDEN:", orderEndpoints.CREATE_ORDER_API);

        const response = await apiConnector(
            "POST",
            orderEndpoints.CREATE_ORDER_API,     // ✔ Ruta correcta
            { courses: coursesId },              // Enviamos cursos
            { 
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        );

        if (!response?.data?.success) {
            throw new Error(response.data.message || "No se pudo crear la orden");
        }

        toast.success("Orden enviada al administrador.");

        // Vaciar carrito del estudiante
        dispatch(resetCart());

        // Redirigir a donde ve sus órdenes (o dashboard)
        navigate("/dashboard/orders");

    } catch (error) {
        console.log("ORDER CREATE ERROR:", error);
        toast.error(error.response?.data?.message || "Error al crear orden");
    }

    toast.dismiss(toastId);
}



// ================================
// Reemplazo de buyCourse
// ================================
// Mantienes el nombre para no romper el frontend,
// pero ahora usa la lógica de órdenes manuales
// ================================
export async function buyCourse(token, coursesId, userDetails, navigate, dispatch) {
    return createManualOrder(token, coursesId, navigate, dispatch);
}



// import { toast } from "react-hot-toast";
// import { studentEndpoints } from "../apis";
// import { apiConnector } from "../apiconnector";
// import rzpLogo from "../../assets/Logo/rzp_logo.png"
// import { setPaymentLoading } from "../../slices/courseSlice";
// import { resetCart } from "../../slices/cartSlice";


// const { COURSE_PAYMENT_API, COURSE_VERIFY_API, SEND_PAYMENT_SUCCESS_EMAIL_API } = studentEndpoints;

// function loadScript(src) {
//     return new Promise((resolve) => {
//         const script = document.createElement("script");
//         script.src = src;

//         script.onload = () => {
//             resolve(true);
//         }
//         script.onerror = () => {
//             resolve(false);
//         }
//         document.body.appendChild(script);
//     })
// }

// // ================ buyCourse ================ 
// export async function buyCourse(token, coursesId, userDetails, navigate, dispatch) {
//     const toastId = toast.loading("Loading...");

//     try {
//         //load the script
//         const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

//         if (!res) {
//             toast.error("RazorPay SDK failed to load");
//             return;
//         }

//         // initiate the order
//         const orderResponse = await apiConnector("POST", COURSE_PAYMENT_API,
//             { courses: coursesId },     // ⬅️ ESTA ES LA CORRECCI
//             {
//                 Authorization: `Bearer ${token}`,
//             })
//         // console.log("orderResponse... ", orderResponse);
//         if (!orderResponse.data.success) {
//             throw new Error(orderResponse.data.message);
//         }

//         const RAZORPAY_KEY = import.meta.env.VITE_APP_RAZORPAY_KEY;
//         // console.log("RAZORPAY_KEY...", RAZORPAY_KEY);

//         // options
//         const options = {
//             key: RAZORPAY_KEY,
//             currency: orderResponse.data.message.currency,
//             amount: orderResponse.data.message.amount,
//             order_id: orderResponse.data.message.id,
//             name: "StudyNotion",
//             description: "Thank You for Purchasing the Course",
//             image: rzpLogo,
//             prefill: {
//                 name: userDetails.firstName,
//                 email: userDetails.email
//             },
//             handler: function (response) {
//                 //send successful mail
//                 sendPaymentSuccessEmail(response, orderResponse.data.message.amount, token);
//                 //verifyPayment
//                 verifyPayment({ ...response, coursesId }, token, navigate, dispatch);
//             }
//         }

//         const paymentObject = new window.Razorpay(options);
//         paymentObject.open();
//         paymentObject.on("payment.failed", function (response) {
//             toast.error("oops, payment failed");
//             console.log("payment failed.... ", response.error);
//         })

//     }
//     catch (error) {
//         console.log("PAYMENT API ERROR.....", error);
//         toast.error(error.response?.data?.message);
//         // toast.error("Could not make Payment");
//     }
//     toast.dismiss(toastId);
// }


// // ================ send Payment Success Email ================
// async function sendPaymentSuccessEmail(response, amount, token) {
//     try {
//         await apiConnector("POST", SEND_PAYMENT_SUCCESS_EMAIL_API, {
//             orderId: response.razorpay_order_id,
//             paymentId: response.razorpay_payment_id,
//             amount,
//         }, {
//             Authorization: `Bearer ${token}`
//         })
//     }
//     catch (error) {
//         console.log("PAYMENT SUCCESS EMAIL ERROR....", error);
//     }
// }


// // ================ verify payment ================
// async function verifyPayment(bodyData, token, navigate, dispatch) {
//     const toastId = toast.loading("Verifying Payment....");
//     dispatch(setPaymentLoading(true));

//     try {
//         const response = await apiConnector("POST", COURSE_VERIFY_API, bodyData, {
//             Authorization: `Bearer ${token}`,
//         })

//         if (!response.data.success) {
//             throw new Error(response.data.message);
//         }
//         toast.success("payment Successful, you are addded to the course");
//         navigate("/dashboard/enrolled-courses");
//         dispatch(resetCart());
//     }
//     catch (error) {
//         console.log("PAYMENT VERIFY ERROR....", error);
//         toast.error("Could not verify Payment");
//     }
//     toast.dismiss(toastId);
//     dispatch(setPaymentLoading(false));
// }