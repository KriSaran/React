import CurrencyFormatter from "@/helpers/currencyFormatter";
import React from "react";

const HouseRow = ({house}) =>{
    return (
        <tr >
             <td>{house.address}</td>
             <td>{house.country}</td>
             <td>{CurrencyFormatter.format(house.price)}</td>
         </tr>
    );
}

const HouseRowMem = React.memo(HouseRow);

export default HouseRow;
export {HouseRowMem};