import react from "react";
import Select from "react-select";
import {imageData} from "../image-data";
import {useState,useEffect} from "react";

const MedList = [
    {label:"Morning", value:1,id:1},
    {label:"Afternoon", value:2,id:1},
    {label:"Night", value:3,id:1},
]
const daytime = [
    {label:"Before Meal",value:1,id:2},
    {label:"After Meal",value:2,id:2},

]


const Home = ()=>{
    const[image,setImage]= useState([]);
    const [option1,setOption1] = useState("");
    const [option2,setOption2] = useState("");
    
    const handleChange = (options)=>{
        
        if(options.id===1){
            setOption1(options.label)
        }
        else{
            setOption2(options.label)
        }
     
        
    }
    // console.log(option1,option2)

   


    // useEffect(()=>{
    //     getImage();
    // },[])
    //  const getImage = ()=>{
    //     setImage(imageData);
    //     console.log(image);
    //  }

     const handleClick = ()=>{
        const newarr = imageData.filter(item=>item.time===option1);
        
        setImage([...newarr,imageData.filter(item=>item.instance===option2)]);
        console.log(newarr);
        // console.log(image);
     }
    return (
        <div>
            <h1>Med's Schedule</h1>
            <Select options = {MedList} onChange ={handleChange } />
            <Select options = {daytime} onChange ={handleChange } />
            <button onClick = {handleClick} >Submit</button>
            {
                image.map(item=>(
                    <img src = {item.url} style = {{width:"400px"}} />
                ))
            }
            
        </div>
    )
}

export default Home;