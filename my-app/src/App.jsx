import './App.css';
import CardComponent from './components/GeneralCard.jsx';
// import Navbar from './components/Navbar.jsx';
import dessert1Image from './assets/not_you_cookie.jpg';
import dessert2Image from './assets/holiday_cookie.jpg';
import dessert3Image from './assets/strawberry.jpg';
import dessert4Image from './assets/tiramisu.jpg';

import pasta1Image from './assets/angry_pasta.jpg';
import pasta2Image from './assets/homemade.jpg';
import pasta3Image from './assets/alfredo.jpg';
import pasta4Image from './assets/tortellini.jpg';

import breaky1Image from './assets/blueberry.jpg';
import breaky2Image from './assets/bread.jpg';
import breaky3Image from './assets/egg.jpg';
import breaky4Image from './assets/calm.jpg';

import drink1Image from './assets/lemonade.jpg';
import drink2Image from './assets/cocktails.jpg';
import drink3Image from './assets/gross.jpg';
import drink4Image from './assets/artsy.jpg';

function App() {
  const desserts = [
    {
      title: "Not Your Mama's Cookies",
      subtitle: "$12.56 Recipe / $0.23 Serving",
      category: "Dessert",
      image: dessert1Image,
    },
    {
      title: "Santa's Holiday Cookies",
      subtitle: "$15.00 Recipe / $0.50 Serving",
      category: "Dessert",
      image: dessert2Image,
    },
    {
      title: "Strawberry Shortcake",
      subtitle: "$18.00 Recipe / $0.75 Serving",
      category: "Dessert",
      image: dessert3Image,
    },
    {
      title: "Tiramisu",
      subtitle: "$10.00 Recipe / $0.40 Serving",
      category: "Dessert",
      image: dessert4Image,
    },
  ];

  const pastas = [
    {
      title: "Spaghetti Carbonara",
      subtitle: "$8.99 Recipe / $1.50 Serving",
      category: "Pasta",
      image: pasta1Image,
    },
    {
      title: "Pasta Primavera",
      subtitle: "$9.50 Recipe / $1.75 Serving",
      category: "Pasta",
      image: pasta2Image,
    },
    {
      title: "Fettuccine Alfredo",
      subtitle: "$12.00 Recipe / $2.00 Serving",
      category: "Pasta",
      image: pasta3Image,
    },
    {
      title: "Penne Arrabbiata",
      subtitle: "$7.50 Recipe / $1.25 Serving",
      category: "Pasta",
      image: pasta4Image,
    },
  ];

  const breaky = [
    {
      title: "Delightful Blueberry Pancakes",
      subtitle: "$8.99 Recipe / $1.50 Serving",
      category: "Breakfast",
      image: breaky1Image,
    },
    {
      title: "Crusty Croissants",
      subtitle: "$9.50 Recipe / $1.75 Serving",
      category: "Breakfast",
      image: breaky2Image,
    },
    {
      title: "Eggs",
      subtitle: "$12.00 Recipe / $2.00 Serving",
      category: "Breakfast",
      image: breaky3Image,
    },
    {
      title: "Yogurt and Berries",
      subtitle: "$7.50 Recipe / $1.25 Serving",
      category: "Breakfast",
      image: breaky4Image,
    },
  ];

  const drinks = [
    {
      title: "When Life Gives You Lemons",
      subtitle: "$3.00 Recipe / $0.25 Serving",
      category: "Drinks",
      image: drink1Image,
    },
    {
      title: "Girls Night Out",
      subtitle: "$6.00 Recipe / $1.25 Serving",
      category: "Drinks",
      image: drink2Image,
    },
    {
      title: "Gin and Tonic",
      subtitle: "$28.00 Recipe / $28.00 Serving",
      category: "Drinks",
      image: drink3Image,
    },
    {
      title: "The Hardest (but Easiest) to Craft",
      subtitle: "$7.50 Recipe / $1.25 Serving",
      category: "Drinks",
      image: drink4Image,
    },
  ];

  return (
    <>
      <header>
        <h1>Recipe Catalog</h1>
      </header>

      <main>
        <div className="card-container">
          {desserts.map((dessert, index) => (
            <CardComponent key={index} {...dessert} />
          ))}
        </div>

        <div className="card-container">
          {pastas.map((pasta, index) => (
            <CardComponent key={index} {...pasta} />
          ))}
        </div>

        <div className="card-container">
          {breaky.map((breaky, index) => (
            <CardComponent key={index} {...breaky} />
          ))}
        </div>

        <div className="card-container">
          {drinks.map((drinks, index) => (
            <CardComponent key={index} {...drinks} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;