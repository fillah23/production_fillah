import React from "react";
import ListMakanan from "../ListData/ListMakanan";
class MenuMakanan extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            pesan:0
        }
        this.rubahPesanan=this.rubahPesanan.bind(this);
        this.pesanan=this.pesanan.bind(this);
    }
    rubahPesanan(){
        this.setState((state,props)=>{
            return{
                pesan: state.pesan +1
            }
        }
        );
    }
    pesanan(e){
        console.log(e.target.value)
    }
    render(){
        return(
            <div>
                <h3>Daftar Makanan yang kami sediakan : </h3>
                <table>
                    <tbody>
                        <tr>
                        <td>
                    <ListMakanan linkmenu ="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"></ListMakanan>
                    <center>
                    <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
                    </center>
                </td>
                <td>
                    <ListMakanan linkmenu ="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"></ListMakanan>
                    <center>
                    <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
                    </center>
                </td>
                <td>
                    <ListMakanan linkmenu ="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"></ListMakanan>
                    <center>
                    <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
                    </center>
                </td>
                <td>
                    <ListMakanan linkmenu ="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"></ListMakanan>
                    <center>
                    <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
                    </center>
                </td>
                <td>
                    <ListMakanan linkmenu ="https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg"></ListMakanan>
                    <center>
                    <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
                    </center>
                </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <input type="text" onChange={this.pesanan}/>
                <h3>Pesanan Anda : {this.state.pesan}</h3>
            </div>
        )
    }
}
export default MenuMakanan;