import React, { Component, Fragment } from 'react';
import './contact-item.css';

class ContactItem extends Component {

    state = {
        name: this.props.name,
        number: this.props.number,
        image: this.props.imge,
        gender: this.props.gender,
        isFavovite: this.props.isFavovite
    }


    setRandomImage = () => {
        var randomAvatar = Math.floor(Math.random() * Math.floor(99));
        this.setState({
            image: randomAvatar
        })
    }
    
    chnageFavorite = () => {
           this.setState({
               isFavovite: !this.state.isFavovite
           })
           console.log("isFavorite: ", this.state.isFavovite)
    }


    render() {

        const {name, number,image, gender} = this.state;
        const image_URL = `https://randomuser.me/api/portraits/${gender}/${image}.jpg`;

        var class_star = "favorite far fa-star fa-2x";
        if(this.state.isFavovite === true ) {
            class_star = "favorite fas fa-star fa-2x";
        }


        return (
              <Fragment>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12">

                  <div className=" card" >
                    <img src={image_URL}></img>
                    <div className="card-body">
                        <h3>{name}</h3>
                        <p>{number}</p>
                        <i onClick={this.chnageFavorite} class={class_star}></i>
                    </div>
                    <div className="card-footer">
                         <button onClick={this.setRandomImage.bind(this)}>Rendom image</button>
                    </div>
                  </div>
                  </div>

              </Fragment>

        )
    }
}

export default ContactItem;