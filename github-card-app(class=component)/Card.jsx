import React from 'react'
import {styled} from 'rect/styled-components'
const testData =[
    {name:"ann maina", avatar:"https://avatars.githubusercontent.com/u/810438?v=4",discription:"facebook"},
    {name:"kilonde aaron", avatar:"https://avatars.githubusercontent.com/u/810438?v=4",discription:"whatsapp"},
    {name:"ken wa maria", avatar:"https://avatars.githubusercontent.com/u/810438?v=4",discription:"twitter"}
]

const CardList=(props)=>{
    return(
        <Container>
            {testData.map(profile=><Card {...profile} />)}
        </Container>
    )
}

class Card extends React.Component {
    render() {
        const profile = this.props
        return(
            <Container>
                <Profile>
                    <img src={profile.avatar} />
                    <Info>
                        <div className="name">{profile.name}</div>
                        <div className="description">{profile.description}</div>
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
                <CardList />
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