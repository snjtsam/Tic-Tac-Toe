import React from "react";
import GridRow from "./GridIRow";
class Grid extends React.Component{
    render(){
        return(
            <div className="grid">
                <GridRow/>
                <GridRow/>
                <GridRow/>
            </div>
        );
    }
}
export default Grid;