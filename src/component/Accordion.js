import ItemList from "./ItemList";
const Accordion = ({data,isOpen,setShowIndex,dummy})=>{
    const {title,itemCards,categoryId} = data;
    // const [isOpen, setIsOpen] = useState(false);
    // const toggleBtn = ()=>{setIsOpen(!isOpen);}
    const toggleFun = () => {
       setShowIndex();
    }
    return (
    <div className="accordion" id="accordionExample">
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" onClick={toggleFun} >
            {title} {itemCards.length}
        </button> 
        </h2>
        {isOpen && <div className="accordion-collapse"><ItemList key={categoryId} items={itemCards} dummy={dummy}/></div>}
    </div>
    </div>
    )
}

export default Accordion;