// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function()
 {
    const flightStatusnew = document.getElementById("flightStatus");
    const shuttleBackgroundnew=document.getElementById("shuttleBackground");
    const spaceShuttleHeightnew=document.getElementById("spaceShuttleHeight");
    //takeoff
    takeoff.addEventListener("click",function (event) 
    {
    let response = window.confirm("Are you sure you want to abort the mission?.");
         if (response) 
        {
        console.log("Mission aborted! Space shuttle returning home");

        flightStatusnew.innerHTML = "Shuttle in flight...";
        shuttleBackgroundnew.style.backgroundColor="blue";

        let i = Number(spaceShuttleHeight.innerHTML)+10000;
        spaceShuttleHeight.innerHTML =i;


        //spaceShuttleHeightnew.innerHTML =10000;
        //shuttleBackgroundnew.style.bottom='10px';
        
         }
         
        else
        {
        console.log("Oh well, let's code instead");
        }
  
    
    });
    //land
    landing.addEventListener("click",function (event) 
    {
        let alert = window.alert("The shuttle is landing. Landing gear engaged");
        flightStatusnew.innerHTML = "The shuttle has landed...";
        shuttleBackgroundnew.style.backgroundColor="green";
        spaceShuttleHeightnew.innerHTML =0;

    });
    //abort
    missionAbort.addEventListener("click",function (event) 
    {
    let responses = window.confirm("Confirm that you want to abort the mission");
         if (responses) 
        {
        console.log("Mission aborted! Space shuttle returning home");

        flightStatusnew.innerHTML = "Mission aborted...";
        shuttleBackgroundnew.style.backgroundColor="green";
        spaceShuttleHeightnew.innerHTML =0;
        
         }
         
        else
        {
        console.log("Oh well, let's code instead");
        }
  
    
    });
    //up
    const ups = document.getElementById("up");
    const downs = document.getElementById("down");
    const lefts = document.getElementById("left");
    const rights = document.getElementById("right");
    let rockets=document.getElementById("rocket");

    ups.addEventListener("click",function()
    {
        rockets.style.paddingTop='0px';
        rockets.style.paddingBottom='10px';
       
        let y = Number(spaceShuttleHeight.innerHTML)+10000;
        spaceShuttleHeight.innerHTML =y;

    });

    downs.addEventListener("click",function()
    {
        rockets.style.paddingTop='10px';
        rockets.style.paddingBottom='0px';

        let k = Number(spaceShuttleHeight.innerHTML)-10000;
        spaceShuttleHeight.innerHTML =k;

        //spaceShuttleHeightnew.innerHTML -=10000;
    });

    lefts.addEventListener("click",function()
    {
        rockets.style.paddingLeft='0px';
        rockets.style.paddingRight='10px';
    });

    rights.addEventListener("click",function()
    {
        rockets.style.paddingLeft='10px';
        rockets.style.paddingRight='0px';

       // rockets.style.marginLeft='10px';
       // rockets.style.marginRight='0px';
    });

});