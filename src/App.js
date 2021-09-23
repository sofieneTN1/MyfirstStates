import React, {Component} from 'react';

class App extends Component{
    
        constructor(){
          super()

          this.state = {
                    shows : true,
                    Person : {fullName:'Sofiene  FLISS', bio:'11/08/1990',imgSrc:'/myphoto.jpg',profession:'Expert en informatique'}
          }

          this.clickHandler = this.clickHandler.bind(this);

        } 


        clickHandler(){
            this.state.shows===true? this.setState({shows:false}) : this.setState({shows:true})
        }



        render(){

            return(

            <div className="container">
              <div  style={this.state.shows===true ? {} : { display: 'none' }}>
                              <img src={this.state.Person.imgSrc} alt="thismyphoto"/>
                              <h1>{this.state.Person.fullName}</h1>
                              <h1> {this.state.Person.bio}</h1>
                              <h3>{this.state.Person.profession}</h3>                   
              </div>
              <button onClick={this.clickHandler}>Show/Hide</button>
            </div> 
            )           
        }

}

export default App
