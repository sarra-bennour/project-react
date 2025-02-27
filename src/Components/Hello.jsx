// function Hello() {
//     return ( 
//         <div>
//             <h1>Hello 4TWIN7 !</h1> 
//         </div>
//      );
// }

import { useState } from "react";

// export default Hello;

// class Holle extends Component {
//     state = {  } 
//     render() { 
//         return (
//             <div>
// //             <h1>Hello 4TWIN7 !</h1> 
// //         </div>
//         );
//     }
// }
 
// export default Hello;

export default function Hello() {
    const [name] = useState("");
        return ( 
            <>
                <h1>Hello 4TWIN7 !{name}</h1> 
            </>
         );
    }   