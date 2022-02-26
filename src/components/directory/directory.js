import React from "react";
import MenuItems from "../menu-items/menu-item-component";
import './directory.scss'

class Directory extends React.Component {

    constructor(){
        super();
        this.state ={
            sections : [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://www.iwmbuzz.com/wp-content/uploads/2021/11/5-times-blackpink-lisa-was-an-absolute-visual-queen-in-the-prettiest-gowns-920x518.jpg',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://static.toiimg.com/photo/msid-87242700/87242700.jpg?47260',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
        }
    }


    render() {
        return(
        <div className="directory-menu">
            {
                this.state.sections.map(({title , imageUrl , id , size}) =>
                (
                    <MenuItems  key={id} title={title} imageUrl={imageUrl} size={size}/>
                ))
            }

        </div>
        );
    }
}

export default Directory;