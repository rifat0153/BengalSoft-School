import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';

// function RenderCard({item}) {

//     return(
//         <Card>
//             <CardImg src={item.image} alt={item.name} />
//             <CardBody>
//             <CardTitle>{item.name}</CardTitle>
//             {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
//             <CardText>{item.description}</CardText>
//             </CardBody>
//         </Card>
//     );

// }

function Home(props) {
    return(
        <div className="container">
            <div className="row align-content-center">
                <text>This is Home</text>
            </div>
            
        </div>
    );
}

export default Home;