import React,{ useState } from 'react';

const headcategories =[
  {
    id: 1,
    title: 'Technology',
    quantity: '320',
    image: 'https://quarmecaptain.com/wp-content/uploads/2021/10/tech_gadgets_ghanaians.jpg?x43547'
  },
  {
    id: 2,
    title: 'Paramedical',
    quantity: '220',
    image: 'https://pharmacielesormeaux-clermontferrand.mesoigner.fr/uploads/a-propos/5e4ea32d76faa469057513.jpg'
  }
]

const categoriesTech = [
  {
    id: 1,
    title: 'Airpods',
    quantity: '20',
    image: 'https://www.cnet.com/a/img/resize/c84df1c1e1f3f582f26e6def2f803e4bcffe20cb/hub/2016/09/13/1d528046-b515-48e5-a170-b9895ec09e89/apple-airpods-2016-014.jpg?auto=webp&width=768'
  },
  {
    id: 2,
    title: 'Headphone',
    quantity: '20',
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    title: 'Laptop',
    quantity: '110',
    image: 'https://images.pexels.com/photos/968631/pexels-photo-968631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    title: 'Gamer Mouse',
    quantity: '50',
    image: 'https://images.pexels.com/photos/7047612/pexels-photo-7047612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 5,
    title: 'Microphone',
    quantity: '5',
    image: 'https://images.pexels.com/photos/2041381/pexels-photo-2041381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const categoriesPara = [
  {
    id: 1,
    title: 'Wheel chair',
    quantity: '20',
    image: 'https://www.cnet.com/a/img/resize/c84df1c1e1f3f582f26e6def2f803e4bcffe20cb/hub/2016/09/13/1d528046-b515-48e5-a170-b9895ec09e89/apple-airpods-2016-014.jpg?auto=webp&width=768'
  },
  {
    id: 2,
    title: 'Headphone',
    quantity: '20',
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    title: 'Laptop',
    quantity: '110',
    image: 'https://images.pexels.com/photos/968631/pexels-photo-968631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    title: 'Gamer Mouse',
    quantity: '50',
    image: 'https://images.pexels.com/photos/7047612/pexels-photo-7047612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 5,
    title: 'Microphone',
    quantity: '5',
    image: 'https://images.pexels.com/photos/2041381/pexels-photo-2041381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];


const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="headcontent">
        <p>Welcome to your Store, sir!</p>
      </div>
      <div className="why-choose-us">
        <h2>Why Choose Us</h2>
      </div>
      <div className="box-container">
        <div className="box">
          <i className="fas fa-truck"></i>
          <h3>Fast Delivery</h3>
          <p>Get your products delivered quickly and efficiently.</p>
        </div>
        <div className="box">
          <i className="fas fa-star"></i>
          <h3>High Quality</h3>
          <p>Experience products of the highest quality and craftsmanship.</p>
        </div>
        <div className="box">
          <i className="fas fa-dollar-sign"></i>
          <h3>Best Price</h3>
          <p>Find the best prices for the products you love and save money.</p>
        </div>
        <div className="box">
          <i className="fas fa-headset"></i>
          <h3>24/7 Customer Support</h3>
          <p>Get assistance and support whenever you need it.</p>
        </div>
      </div>
      <div className="category-section">
        <h2>Shop by Category</h2>
        <div className="category-container">
          {selectedCategory
           ? (selectedCategory.title === "Paramedical" ? categoriesPara : categoriesTech).map((category) => (
                <div
                  className="category-card"
                  key={category.id}
                  onClick={() => setSelectedCategory(null)}
                >
                  <img src={category.image} alt={category.title} />
                  <span>
                    <h3>{category.title}</h3>
                    <p style={{ fontSize: '20px' }}>{category.quantity}</p>
                  </span>
                </div>
              ))
            : headcategories.map((category) => (
                <div
                  className="category-card"
                  key={category.id}
                  onClick={() => handleCategoryClick(category)}
                >
                  <img src={category.image} alt={category.title} />
                  <span>
                    <h3>{category.title}</h3>
                    <p style={{ fontSize: '20px' }}>{category.quantity}</p>
                  </span>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
