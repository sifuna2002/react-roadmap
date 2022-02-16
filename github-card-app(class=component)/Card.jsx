import React from 'react'
import {styled} from 'rect/styled-components'
const testData =[
    {name:"ann maina", avatar:"https://avatars.githubusercontent.com/u/810438?v=4",discription:"facebook"},
    {name:"kilonde aaron", avatar:"https://avatars.githubusercontent.com/u/810438?v=4",discription:"whatsapp"},
    {name:"ken wa maria", avatar:"https://avatars.githubusercontent.com/u/810438?v=4",discription:"twitter"}
]
class Card extends React.Component {
    render() {
        return(
            <Container>
                <Profile>
                    <img src="https://placehold.it/75" />
                    <Info>
                        <div className="name">Name here</div>
                        <div className="description">Description here</div>
                    </Info>
                </Profile>
            </Container>
            
        )
    }
}

class App extends React.Component {
    render() {
        return(
             <div>
                <div className="header">{this.props.title}</div>
                <Card />
             </div>
             )
        
    }
}

React.render(
    <App title="The Github Card App" />,
    mountNode,
)
const Container=styled.div`
    margin:0;

`
const Profile=styled.div`
    margin:1rem;

`
const Info=styled.div`
    display:inline-block;
    margin-left:12px;
    img{
        width:75px;
    }
`