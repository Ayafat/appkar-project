const Role = {
    ADMIN : "manager",
    ADMIN1:"admin1",
    ADMIN2:"admin2",
    EXCLUSIVE_USER:"exclusive_user",
    BASIC_USER:"basic_user"

}
module.exports ={
    ROLE: ROLE,
    users:[
        { id:1, Name:'sara',role:Role.ADMIN},
        {id:2 , Name :'reza',role :Role.ADMIN1},
        {id:3 , Name :'mohammad',role:Role.ADMIN2},
        {id:4, Name:'saman',role:Role.EXCLUSIVE_USER},
        {id:5,Name:'mahnaz',role:Role.BASIC_USER}
    ],
    projects:[
        {id:1, Name:"sara's project",userId:1},
        {id:2 , Name :"reza's project",userId:2},
        {id:3 , Name :"mohammad's project",userId:3},
        {id:4, Name:"saman's project",userId:4},
        {id:5,Name:"mahnaz's project",userId:5}
    ]
    
}