import ReactDOM from "react-dom/client"
import "../index.css";
import Header from "./components/Header"; // For default imnport no need to include {}. For default export its not necessary to have the same name. It can be NewHeader instead of Header
import { Title } from "./components/Header"; // Named Import include {} otherwise you get errors.It seems like destructuring but  its not its known as extracting
import * as Obj from "./components/Header"; // If you want to import everything from Header.js and Use it like obj.Title
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/pages/About";
import Error from "./components/Error";
import Contact from "./components/pages/Contact";
import RestuarantMenu from "./components/RestuarantMenu";


// done by pure JS
// const heading = document.createElement("h1");
// heading.textContent = "I create this element through script.";
// const  root = document.getElementById("root");
// root.appendChild(heading)

// Now do the same with pure REACT
//const heading = React.createElement("h1", {id : "title"}, "hello world!"); // Here we just created a h1 element and its just in memory/free space let put this inside an element


// React.createElement() => gives  Object => this object get converted into HTML(DOM)
// the below line 15 to 18 is not the good way to write because its messed up and not readable at all. Use JSX instead.
// const heading1 = React.createElement("h1", {id: "title1", key: "h1"}, "Heading 1") //  React ELement
// const heading2 = React.createElement("h2", {id: "title2", key: "h2"}, "Heading 2")
// const heading3 = React.createElement("h2", {id: "title3", key: "h3"}, "Heading 3")
// const div = React.createElement("div", {id : "container", key: "top-root"}, [heading1,heading2])

// console.log(heading1);


// what is JSX: Some says HTML inside JS is JSX but its not. JSX is HTML like syntax, but its not HTML inside JS.
// JSX uses React.createElement() behind the scene and make Object => that converted into HTML and this HTML render in DOM.
// JSX syntex is converted  by the babel into the above line 15 like syntex.The line 26 becomes 15 like thing and these things going on.

// Here heading4 is React Element
// const heading4 = (
//                     <h4 id="h4" key={"heading12"}> 
//                       This is  HTML like code but NOT JSX. React Element. Heading 4
//                     </h4>
//                 ) // JSX expression

// const HeadingFive =  () => ( 
//                     <h4 id="h4" key={"heading12"}> 
//                       This is  HTML like code but NOT JSX. React Element. Heading 5
//                     </h4>
//                 ) // JSX expression


// React omponent -> everything is a component in REACT
// funcitonal component always starts with a capital letter. Not mandatory but a good practice or convension.

// fucntional component is a normal function it just returning normal JSX or React element
// const HeaderComponent = () => {
//   return (
//     <>
//       {/* this is the way to use React element inside the functional component. {} -> inside this we can write any JS code */}
//       {heading4}
//       {HeadingFive()} 
//       <HeadingFive/> {/* this is known as component compozition because we are using component inside a component */}
//       <h1>
//         My First functional component.
//       </h1>
//     </>
//   )
// }



// Code after 4th video(Talk is cheap)

/*
    Basic Design of our app

    Header
      - Logo
      - Nav items (Right side)
      - Cart
    
    Body 
      - Search Bar
      - Resturant List
        - Resturant Card
          - Image
          - Name
          - Rating
          - Cusin
    
    Footer
      - Links
      - Copy Rights      
       
*/


// Let access burger data dynamicaly (Not using this because we using Swiggy API)
// const burgerKing = {
//   name: "Burger King",
//   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyDcH_MxdsTsK6KMVon-Ybfa2WiT-R70ZjWw&s",
//   cousines: ["Burger", "American"],
//   rating: "4.2"
// }




const Applayout = () => {
  return (
    <>
      <>
      {/* <Obj.Title/>
      <Title/> */}
      <Header/>
      <Outlet/>
      <Footer/>
      </>
    </>
  )
}


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/restuarant/:restuarantId",
        element: <RestuarantMenu/>
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById("root")) // the root element for this h1 element is the div with id = root. and works aas root element for this h1 element
root.render(<RouterProvider router={appRouter} />) // this render function injects this heading elements inside the DOM and its render over the browser window. Render is used to modify our DOMand it overwrite the stuff inside root element.







/*

Config Driven UI 

const config = [
  {
    type: "carousel",
    cards: [
      {
        offerName: "50% off", // Suppose Panipat has this offer NOt is Delhi The backend will change  this accordingly via Config Driven UI
      },
      {
        offerName: "No Delivery Charges"
      }
    ]
  },
  {
    type: "resturants",
    cards: [
      {
        name: "Burger King",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyDcH_MxdsTsK6KMVon-Ybfa2WiT-R70ZjWw&s",
        cousines: ["Burger", "American"],
        rating: "4.2"
      },
      {
        name: "KFC",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyDcH_MxdsTsK6KMVon-Ybfa2WiT-R70ZjWw&s",
        cousines: ["Burger", "American"],
        rating: "4.2"
      },
      {
        name: "Burger Singh",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyDcH_MxdsTsK6KMVon-Ybfa2WiT-R70ZjWw&s",
        cousines: ["Burger", "American"],
        rating: "4.2"
      },
    ]
  }
]

*/