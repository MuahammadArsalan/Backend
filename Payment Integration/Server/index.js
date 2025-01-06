// import express from "express"
// import Stripe from "stripe"
// import cors from 'cors'

// const stripe = new Stripe(
//   'sk_test_51QctWgEbukeGB6mTaBPHbxKLfxRIgVoR25aMJJr6iLwmdn5Yu9azcm5p2mWl6lP4IR25VUkH3oXydeKghm3r6TiI00PlPcDnOh'
// )


// const app = express()
// const port =3000
// app.use(express.json())
// app.use(cors())


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


// app.post('/api/v1/checkout', async (req,res) => {

// const {CartItems} = req.body
// // console.log(CartItems);

// const lineItem =  CartItems.map((item)=>({
//   price_data:{
//     currency:"pkr",
//     product_data:{
//       name:item.name
//     },
//     unit_amount:item.price*100
//   },
//   quantity:item.quantity
// }))


// const session = await stripe.checkout.sessions.create({
//   payment_method_types:['card'],
//   line_items:"lineItem",
//   success_url:"http://localhost:5173/success",
//   cancel_url:"http://localhost:5173/cancel"
// })

// res.json({
//   message:"Session completed",
//   id:session.id
// })


// })


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })








import express from "express";
import cors from "cors";
import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51QctWgEbukeGB6mTaBPHbxKLfxRIgVoR25aMJJr6iLwmdn5Yu9azcm5p2mWl6lP4IR25VUkH3oXydeKghm3r6TiI00PlPcDnOh"
);

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/v1/checkout", async (req, res) => {
  const { products } = req.body;
  const lineItems = products.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: item.name,
      },
      unit_amount: item.price * 100,
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/cancel",
  });

  res.json({ message: "session completed", id: session.id });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});