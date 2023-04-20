export default function Invitation(props){
    return(
        <div>
            <p>
            Subject :{props.subject}
            <br></br>
  To :{props.To}
  <br></br>
  Hi , {props.name} 
  <br></br>
  I am having a {props.lol} next Friday at my Home . Would you like to come ? It will be fun . Lots of people from my school are coming .
  <br></br>
  you know some of them - {props.lol1} .
  <br></br>
  
  My house is behind our school , near{props.lol2}  .
  <br></br>
  I hope you will come and see you soon .
  <br></br>
  
  from ,
  <br></br>
  {props.lol3}
 

            </p>
        </div>

    )
}