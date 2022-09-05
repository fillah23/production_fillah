import React from "react";

class MenuTentangKami extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tentang : "Warung Nusantara adalah restoran yang bernuansa masakan nusantara, kami ada membuat anda menikmati masakan khas nusantara"
        }
    }
    render(){
        return(
            <div>
                <center>
                <p>Tentang kami</p> {this.state.tentang}
                </center>
            </div>
        )
    }
}
export default MenuTentangKami;