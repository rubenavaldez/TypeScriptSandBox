import React from "react";

class Demo extends React.Component{
sum(a:number,b:number):number{
    return a +b 
}
render(){
    return(
        <div>
            {this.sum(2,1)}
            <h1>Hello World</h1>
        </div>
    )
}


}
export default Demo;