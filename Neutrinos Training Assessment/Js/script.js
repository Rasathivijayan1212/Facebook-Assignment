// Login Functionality//
function xyz(){
    var getAllUsers = localStorage.getItem("usersDetails");
    if(getAllUsers == null){
        var userArr=[{username:"Rasathi", email:"rasathivijayan@gmail.com", password:"Rasathi@123", birthCity:"Neyveli", currentCity:" Lives in Chennai", state:"Tamilnadu", country:"India", currentJobRole:"Android Developer", currentOrganization:"Enterprise Touch Pvt Ltd", college:"Paavai College of Engineering", school:"Jawahar Matriculation Higher Secondary School"},

   {username:"Karthick",email:"karthickj93@gmail.com", password:"karthi31495", birthCity:"kerela", currentCity:"Lives in Chennai", state:"Kerela", country:"India", currentJobRole:"Software engineer", currentOrganization:"Infosys", college:"Paavai College Of Engineering", school:"Liitle Angel Matriculation Higher Secondary School"},

    {username:"vaishnavi",email:"vaishu94@gmail.com", password:"vaishu31495", birthCity:"Kerela", currentCity:" Lives in Salem", state:"Tamilnadu", country:"India", currentJobRole:"BA Literature", currentOrganization:"WalMart", college:"Muthayammal College", school:"Little Angel Matriculation Higher Secondary  School"},

    {username:"Durairaj",email:"durairaj91@gmail.com", password:"durai31495", birthCity:"Neyveli", currentCity:" Lives in Chennai", state:"Tamilnadu", country:"India", currentJobRole:"Testing Engineer", currentOrganization:"Bakya", college:"IIT Delhi", school:"St.Bede's School"},

    {username:"Ramkumar",email:"ramu@gmail.com", password:"ramu31495", birthCity:"Neyveli", currentCity:" Lives in Dubai", state:"Tamilnadu", country:"India", currentJobRole:"mechanical Engineer", currentOrganization:"Infosys", college:"Arunai College of Engineering", school:"St John's School"},

    {username:"Vijayan",email:"vijayan@gmail.com", password:"vijayan31495", birthCity:"Chennai", currentCity:" Lives in bihar", state:"Orissa", country:"India", currentJobRole:"CEO", currentOrganization:"RR Companies", college:"SSR Coolege", school:"St.Ebbas School"},

    {username:"Kavitha",email:"kavitha@gmail.com", password:"kavitha31495", birthCity:"Jaipur", currentCity:"Lives in Noida", state:"Gurgaon", country:"India", currentJobRole:"Team Lead", currentOrganization:"Awata Software Services", college:"Ethiraj College", school:"Vel's School"},

    {username:"rahul",email:"rahul@gmail.com", password:"rahul31495", birthCity:"Mumbai", currentCity:"Lives in Pune", state:"Maharastra", country:"India", currentJobRole:"Designer", currentOrganization:"KK Fashions", college:"NIFT Chennai", school:"Montfort School"},


    {username:"kutty",email:"kutty@gmail.com", password:"rahul", birthCity:"Mumbai", currentCity:"Lives in Pune", state:"Maharastra", country:"India", currentJobRole:"Designer", currentOrganization:"KK Fashions", college:"NIFT Chennai", school:"Montfort School"}



    ];
    localStorage.setItem("usersDetails",JSON.stringify(userArr));
    }
    
}
var userDetailsArr = [];
function getUserDetails(){
    var getAllUDetails =JSON.parse(localStorage.getItem("usersDetails"));
    //console.log(getAllUDetails.length);
    var j=0;
    var emailId = document.getElementById("email").value;
    var pwd =   document.getElementById("pass").value;

    for(var i=0;i<getAllUDetails.length;i++){
      var res=getAllUDetails[i];
        //j++;
        console.log(res);
        if(res.email == emailId && res.password == pwd){
            var myObj = JSON.stringify({
                username : getAllUDetails[i].username,
                email : getAllUDetails[i].email,
                password : getAllUDetails[i].password,
                birthCity : getAllUDetails[i].birthCity,
                currentCity : getAllUDetails[i].currentCity,
                state : getAllUDetails[i].state,
                country : getAllUDetails[i].country,
                currentJobRole : getAllUDetails[i].currentJobRole,
                currentOrganization : getAllUDetails[i].currentOrganization,
                college : getAllUDetails[i].college,
                school : getAllUDetails[i].school

            });
            userDetailsArr.push(myObj);
            sessionStorage.setItem("loggedInUserDetails", JSON.stringify(userDetailsArr));
            sessionStorage.setItem("userindex",i);
            
            window.location.href = "Profile.html";
            return true;
            break;
        }
                //alert("invalid username and password");
            
        }
alert("invalid username and password");
    }


      // Ends//



      //Profile page Functionality starts//

      var getsession = JSON.parse(sessionStorage.getItem("loggedInUserDetails")) ;
      // if(getsession ==null){
      //   sessionStorage.removeItem("loggedInUserDetails");
      //   sessionStorage.clear();
      //   window.location.href = "Loginpage.html";
        
      // }
    $(document).ready(function(){

       var res = JSON.parse(localStorage.getItem('usersDetails'));   
       var uid = sessionStorage.getItem("userindex");

        
        var result=res[uid];

      var username=result.username;
      var birthcity= result.birthCity;
      var currentcity= result.currentCity;
      var state= result.state;
      var country= result.country;
      var Jobrole= result.currentJobRole;
      var Organization= result.currentOrganization;
      var School = result.school;
      var College= result.college;
      

      $('.uname').text(username);
      $('#u-name').text(username);
      $('.native').text(birthcity);
      $('.currentcity').text(currentcity);
      $('.country').text(', '+country);
      $('.currentjobrole').text(Jobrole);
      $('.currentorganization').text(Organization);
      $('.graduationdetails').text(School);
      $('.college').text(College);
    });
       function editicon(){
      window.location.href = "Editprofile.html";

         
       }


    
     
      function logout(){
        var today = new Date();
		    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();   
		    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var datetime = date +' - '+time;
        var getactivity=  JSON.parse(localStorage.getItem('ActivityLog'));
        if(getactivity == null){
          getactivity=[];
        }
        var datas={Title:'Logout',Datetimes:datetime,cdate:date};
        getactivity.push(datas);
            localStorage.setItem('ActivityLog',JSON.stringify(getactivity));
        sessionStorage.removeItem("usersDetails");
        sessionStorage.clear();
        document.location.href = "Loginpage.html";
        
      }


      //ends//



//script//





      
    
     
     



