import React from "react";
import GridItem from "./GridItem";

class GridRow extends React.Component{
    render(){
        return(
            <div className="grid-row">
                <GridItem/>
                <GridItem/>
                <GridItem/>
            </div>
        );
    }
}
export default GridRow;