import React from 'react'


export default function About(props) {
 // const [myStyle, setMyStyle = useState({
   // color: 'black',
    //backgroundColor:'white'
    //  })
  let myStyle={
    color: props.mode ==='dark'?'white' :'#042743',
    backgroundColor:props.mode ==='dark'?'rgb(36 74 104)':'white',
   
  }


    return (
      <div className="container" style={myStyle}>
<h1 className="my-2">About Us</h1>
      
      <div class="accordion" id="accordionExample">
      <div class="accordion-item" style={myStyle}>
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         <strong> Analyze your Text </strong>
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body" style={myStyle}>
          Textutils gives you a way to analyze your text quickly and efficiently,
          </div>
        </div>
      </div>
      <div class="accordion-item" style={myStyle}>
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
           <strong> Free to Use </strong>
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div class="accordion-body" style={myStyle}>
            textutils is a free character counter tool that provides instant character count & words count statistics for a given text.
       textutils report the number of words and character.thus it is suitable for writing text with word /character limit 
 
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          <strong> Browser compatibility  </strong>
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div class="accordion-body"style={myStyle}>
             this word counter software work in any browser such as chrome,firefox,explore,safari,opera.it suit to count character in facebook,blog,books,excel document,pdf document ,essays,etc
          </div>
        </div>
      </div>
    </div>
    </div>
    )
}