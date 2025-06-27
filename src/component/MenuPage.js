
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import useRestuarntMenu from '../utlis/useRestuarntMenu';
import Shimmer from './Shimmer';
import Accordion from './Accordion';


const MenuPage = () => {  
  // const [resData, setResData] = useState(null);
  const {resId} = useParams();
  const resData = useRestuarntMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  const dummy = "dummy data";
if(resData === null) return <Shimmer/>;
 const {name,avgRating,cuisines} = resData?.cards[2]?.card?.card?.info;
 const itemsCards = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
 const catagories = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((x)=>{
  return x?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
 })
  return (
    <div className='menu-page'>
      <h1 className='resheading'>{name}</h1>
      <h2 className='resrating'>{avgRating}</h2>
      <h3 className='rescusian'>{cuisines.join(", ")}</h3>
       {/* <ul>
        {itemsCards.map(items => (
          <li key={items.card.info.id}>{items.card.info.name}</li>
        ))}
      </ul> */}
      {catagories.map((catagory, index) => {
      return (
        <Accordion
          key={index}
          data={catagory?.card?.card}
          isOpen={index === showIndex}
          setShowIndex={() =>
            setShowIndex(showIndex === index ? null : index)
          }
          dummy={dummy}
        />
      );
    })}
    </div>
  );
}
export default MenuPage;
