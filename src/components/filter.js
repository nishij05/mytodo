import React from "react";

const Filtered = ({ remove, item, index }) => {
  //   const handlerDelete = () => {
  //     remove(index);
  //   };
  return (
  <div>
    <li className="list-item">
      {item}
     <div className="icons">
     <i
       className="fa-solid fa-trash icon-delete"
          onClick={() => remove(index)}></i>
     </div>
        
      
    </li>
  </div>
    
  );
};

export default Filtered;
