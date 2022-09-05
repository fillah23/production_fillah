import React from 'react';

class ListMenuUtama extends React.Component{
    render(){
        return(
            <div>
                <center><h1>Selamat datang diwarung nusantara</h1></center>
                <center>
                    <img src={this.props.link} alt="Masakan Nusantara" />
                </center>
            </div>
        );
    }
}
export default ListMenuUtama;