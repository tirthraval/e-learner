import Cards from "./Cards";

const Home = () =>{
    return(
        <>
            <h1 style  ={{marginLeft : "267px", marginTop:"50px" }}> How do we work </h1>
            <div className="home"> 
        
                <Cards text = " We provide the solution in the Text form" title = "Step 1"/>
                <Cards text = "If it doesrnt work we you can try our video soultion" title = "Step 2"/>
                <Cards text = "We also provide the talk with exper option"  title = "Step 3"/>
        
            </div>
        </>

    );
}

export default Home;