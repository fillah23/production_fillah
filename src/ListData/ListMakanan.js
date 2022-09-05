import React from "react";

class ListMakanan extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            datalist :this.props.linkmenu
        }
    }
    render(){
        return(
            <div>
                <img src={this.state.datalist} alt="Product Makanan" width="150"/>
            </div>
        );
    }
}
export default ListMakanan;