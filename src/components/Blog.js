
import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
// Import your CSS if you have one
  // Replace "cards" with your actual array of card data
  const cards = [
    {
      id: 1,
      image: 'https://picsum.photos/500/300/?image=10',
      tags: ['Student'],
      title: 'Card Grod Layout',
      text: 'Demo of pixel perfect pure CSS simple responsive card grid layout',
    },
    {
      id: 2,
      image: 'https://picsum.photos/500/300/?image=5',
      tags: ['Student'],
      title: 'Card Grid Layout',
      text: 'Demo of pixel perfect pure CSS simple responsive card grid layout',
    },
    {
      id: 3,
      image: 'https://picsum.photos/500/300/?image=11',
      tags: ['Student'],
      title: 'Card Grid Layout',
      text: 'Demo of pixel perfect pure CSS simple responsive card grid layout',
    },
    {
      id: 4,
      image: 'https://picsum.photos/500/300/?image=14',
      tags: ['Money'],
      title: 'Card Grid Layout',
      text: 'Demo of pixel perfect pure CSS simple responsive card grid layout',
    },
    {
      id: 5,
      image: 'https://picsum.photos/500/300/?image=17',
      tags: ['Money'],
      title: 'Card Grid Layout',
      text: 'Demo of pixel perfect pure CSS simple responsive card grid layout',
    },
    {
      id: 6,
      image: 'https://picsum.photos/500/300/?image=2',
      tags: ['AI'],
      title: 'Card Grid Layout',
      text: 'Demo of pixel perfect pure CSS simple responsive card grid layout',
    },
    {
      id: 7,
      image: 'https://picsum.photos/500/300/?image=11',
      tags: ['Student'],
      title: 'Card Grid Layout',
      text: 'Demo of pixel perfect pure CSS simple responsive card grid layout',
    },
    {
      id: 8,
      image: 'https://picsum.photos/500/300/?image=14',
      tags: ['Money'],
      title: 'Card Grid Layout',
      text: 'Demo of pixel perfect pure CSS simple responsive card grid layout',
    },
    {
      id: 9,
      image: 'https://picsum.photos/500/300/?image=17',
      tags: ['Money'],
      title: 'Card Grid Layout',
      text: 'Demo of pixel perfect pure CSS simple responsive card grid layout',
    },
    {
      id: 10,
      image: 'https://picsum.photos/500/300/?image=2',
      tags: ['AI'],
      title: 'Card Grid Layout',
      text: 'Demo of pixel perfect pure CSS simple responsive card grid layout',
    },
    {
      id: 11,
      image: 'https://picsum.photos/500/300/?image=17',
      tags: ['Money'],
      title: 'Card Grid Layout',
      text: 'Demo of pixel perfect pure CSS simple responsive card grid layout',
    },
    {
      id: 12,
      image: 'https://picsum.photos/500/300/?image=5',
      tags: ['Student'],
      title: 'Card Grid Layout',
      text: 'Demo of pixel perfect pure CSS simple responsive card grid layout',
    },
    {
      id: 13,
      image: 'https://picsum.photos/500/300/?image=11',
      tags: ['Student'],
      title: 'Card Grid Layout',
      text: 'Demo of pixel perfect pure CSS simple responsive card grid layout',
    },
    {
      id: 14,
      image: 'https://picsum.photos/500/300/?image=14',
      tags: ['Money'],
      title: 'Card Grid Layout',
      text: 'Demo of pixel perfect pure CSS simple responsive card grid layout',
    },
    {
      id: 15,
      image: 'https://picsum.photos/500/300/?image=17',
      tags: ['Money'],
      title: 'Card Grid Layout',
      text: 'Demo of pixel perfect pure CSS simple responsive card grid layout',
    },
    {
      id: 16,
      image: 'https://picsum.photos/500/300/?image=2',
      tags: ['AI'],
      title: 'Card Grid Layout',
      text: 'Demo of pixel perfect pure CSS simple responsive card grid layout',
    },
    {
      id: 17,
      image: 'https://picsum.photos/500/300/?image=11',
      tags: ['Student'],
      title: 'Card Grid Layout',
      text: 'Demo of pixel perfect pure CSS simple responsive card grid layout',
    },
    {
      id: 18,
      image: 'https://picsum.photos/500/300/?image=14',
      tags: ['Money'],
      title: 'Card Grid Layout',
      text: 'Demo of pixel perfect pure CSS simple responsive card grid layout',
    },
    {
      id: 19,
      image: 'https://picsum.photos/500/300/?image=17',
      tags: ['Money'],
      title: 'Card Grid Layout',
      text: 'Demo of pixel perfect pure CSS simple responsive card grid layout',
    },
    {
      id: 20,
      image: 'https://picsum.photos/500/300/?image=2',
      tags: ['AI'],
      title: 'Card Grid Layout',
      text: 'Demo of pixel perfect pure CSS simple responsive card grid layout',
    },
    {
      id: 21,
      image: 'https://picsum.photos/500/300/?image=17',
      tags: ['Money'],
      title: 'Card Grid Layout',
      text: 'Demo of pixel perfect pure CSS simple responsive card grid layout',
    },
  ];

  const Blog = () => {
    const [selectedTag, setSelectedTag] = useState('All');
    const [visibleCards, setVisibleCards] = useState(4);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [filteredCards, setFilteredCards] = useState(cards);
  
    const handleTagClick = (tag) => {
      setSelectedTag(tag);
      setVisibleCards(4);
      setIsLoading(true);
      setTimeout(() => {
        const filteredCards = tag === 'All'
         ? cards
          : cards.filter((card) => card.tags.includes(tag));
        setFilteredCards(filteredCards);
        setIsLoading(false);
      }, 1500);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [filteredCards]);
  
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20 &&!isLoading && hasMore) {
        loadMoreCards();
      }
    };
  
    const loadMoreCards = () => {
      setIsLoading(true);
      setTimeout(() => {
        const remainingCards = filteredCards.slice(visibleCards);
        if (remainingCards.length === 0) {
          setHasMore(false);
        }
        const newVisibleCards = visibleCards + Math.min(remainingCards.length, 8);
        setVisibleCards(newVisibleCards);
        setIsLoading(false);
      }, 1500);
    };
  
    return (
      <div>
        <div className="headcontent">
          <p>Welcome to our blog, sir!</p>
        </div>
        <div className="tags">
          <button onClick={() => handleTagClick('All')}>All</button>
          <button onClick={() => handleTagClick('AI')}>AI</button>
          <button onClick={() => handleTagClick('Money')}>Money</button>
          <button onClick={() => handleTagClick('Student')}>Student</button>
        </div>
        <div className="container">
          {/*... your other container content... */}
        </div>
        <div className="main">
          <h1>Responsive Card Grid Layout</h1>
          {filteredCards.length > 0 && (
            <ul className="cards">
              {filteredCards.slice(0, visibleCards).map((card) => (
                <li key={card.id} className="cards_item">
                  <div className="card">
                    <div className="card_image">
                      <img src={card.image} alt="Card" />
                    </div>
                    <div className="card_content">
                      <div className="tag">{card.tags[0]}</div>
                      <h2 className="card_title">{card.title}</h2>
                      <p className="card_text">{card.text}</p>
                      <Link to={`/blog/${card.id}`}>
                        <button className="btn card_btn">
                          Read More
                        </button>
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {filteredCards.length > 0 && isLoading && <p>Loading...</p>}
        </div>
      </div>
    );
  };
  
  export default Blog;