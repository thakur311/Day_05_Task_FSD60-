//Q1 Create your own resume in jason format
var resume=
{
    "name":"Chandan Thakur",
    "experience":
        {
            "role":"Site Engineering",
            "company":"Tulsi Weigh Solution Pvt.ltd",
            "start_date": "August 2023",
            "end_date": "Present",
            "responsibilities": [
                "Site Execution",
                "Drawing reading and explnation",
                "BOQ and Estimation",
            ]
        }
    ,
    "education":
        {
            "degree": "B.tech",
            "institution": "Calcutta Institutes of Engineering and Management",
            "start_date": "2019",
            "end_date": "2023"
        }
    ,
    "skills":[
        
        "Autocad",
        "Ms office",
        "Python Programming Language",
        
    ],

    "projects": 
        {
            "name": "ChatGPT Development",
            "description": "Participated in the development of GPT-4, focusing on enhancing natural language understanding and generation capabilities.",
            "technologies": ["Python", "TensorFlow", "PyTorch", "Machine Learning"]
        }
    ,
    "certifications":
        {
            "name": "Python Certification",
            "issuing_organization": "Amity Computer Acadmey",
            "issue_date": "8/6/2023",
        }

    ,
    "contact": {
        "email": "thakurchandan311@gmail.com",
        "phone": "8240119349",
        "address": {
            "street": "87b, Dr G S Bose Road",
            "city": "Kolkata",
            "state": "West Bengal",
            "zip_code": "700039",
            "country":"INDIA"
        }
    }
}
let abc=JSON.stringify(resume)
console.log(abc)
//Q2 For the above json,iterate over all for loops
// Using for loop
var resume=
{
    profiles:[],
    experience:[],
    education:[],
    skills:[],
    projects:[],
    certifications:[],

};

    var profiledata=[{"name":"Chandan Thakur"},
    {"email": "thakurchandan311@gmail.com"},
       { "phone": "8240119349"},
        {"address": {
            "street": "87b, Dr G S Bose Road",
            "city": "Kolkata",
            "state": "West Bengal",
            "zip_code": "700039",
            "country":"INDIA"
        } 
    } 
    ]
    for (let i = 0; i < profiledata.length; i++) {
        resume.profiles.push(profiledata[i]);
    }



    var  experiencedata=
        [
            {"role":"Site Engineering"},
            {"company":"Tulsi Weigh Solution Pvt.ltd"},
            {"start_date": "August 2023"},
            {"end_date": "Present"},
           { "responsibilities": [
                "Site Execution",
                "Drawing reading and explnation",
                "BOQ and Estimation",
            ]
            }
        ]
    
        for (let i = 0; i < experiencedata.length; i++) {
            resume.experience.push(experiencedata[i]);
        }

    
     var educationdata=
        [
            {"degree": "B.tech"},
            {"institution": "Calcutta Institutes of Engineering and Management"},
            {"start_date": "2019"},
            {"end_date": "2023"}
        ]
    
        for (let i = 0; i < educationdata.length; i++) {
            resume.education.push(educationdata[i]);
        }
     var skillsdata=[
        
        "Autocad",
        "Ms office",
        "Python Programming Language",
        
    ]

    for (let i = 0; i < skillsdata.length; i++) {
        resume.skills.push(skillsdata[i]);
    }


     var projectsdata = 
        [
            {"name": "Online calculator"},
            {"description": "Built a online calculator which can perform different calculations "},
            {"technologies": ["HTML","CSS","JAVA SCRIPT"]},

        ]
         for (let i = 0; i <projectsdata.length; i++) {
            resume.profiles.push(projectsdata[i]);
        }
    
     var certificationsdata =
        [
            {"name": "Python Certification",
            "issuing_organization": "Amity Computer Acadmey",
            "issue_date": "8/6/2023"}, 
        ]
        for (let i = 0; i < certificationsdata.length; i++) {
            resume.certifications.push(certificationsdata[i]);
        }
        let ac=JSON.stringify(resume)
        let xz=JSON.parse(ac)
        console.log(xz)
       



//Using for in
var resume=
{
    profiles:[],
    experience:[],
    education:[],
    skills:[],
    projects:[],
    certifications:[],

};

    var profiledata=[{"name":"Chandan Thakur"},
    {"email": "thakurchandan311@gmail.com"},
       { "phone": "8240119349"},
        {"address": {
            "street": "87b, Dr G S Bose Road",
            "city": "Kolkata",
            "state": "West Bengal",
            "zip_code": "700039",
            "country":"INDIA"
        } 
    } 
    ]
    for (let i in profiledata) {
        resume.profiles.push(profiledata[i]);
    }



    var  experiencedata=
        [
            {"role":"Site Engineering"},
            {"company":"Tulsi Weigh Solution Pvt.ltd"},
            {"start_date": "August 2023"},
            {"end_date": "Present"},
           { "responsibilities": [
                "Site Execution",
                "Drawing reading and explnation",
                "BOQ and Estimation",
            ]
            }
        ]
    
        for (let i in experiencedata) {
            resume.experience.push(experiencedata[i]);
        }

    
     var educationdata=
        [
            {"degree": "B.tech"},
            {"institution": "Calcutta Institutes of Engineering and Management"},
            {"start_date": "2019"},
            {"end_date": "2023"}
        ]
    
        for (let i in educationdata) {
            resume.education.push(educationdata[i]);
        }
     var skillsdata=[
        
        "Autocad",
        "Ms office",
        "Python Programming Language",
        
    ]

    for (let i in skillsdata) {
        resume.skills.push(skillsdata[i]);
    }


     var projectsdata = 
        [
            {"name": "Online calculator"},
            {"description": "Built a online calculator which can perform different calculations "},
            {"technologies": ["HTML","CSS","JAVA SCRIPT"]},

        ]
         for (let i in projectsdata) {
            resume.profiles.push(projectsdata[i]);
        }
    
     var certificationsdata =
        [
            {"name": "Python Certification",
            "issuing_organization": "Amity Computer Acadmey",
            "issue_date": "8/6/2023"}, 
        ]
        for (let i in certificationsdata) {
            resume.certifications.push(certificationsdata[i]);
        }
        var a=JSON.stringify(resume)
        var x=JSON.parse(a)
        console.log(x)

// Using for of
var resume=
{
    profiles:[],
    experience:[],
    education:[],
    skills:[],
    projects:[],
    certifications:[],

};

    var profiledata=[{"name":"Chandan Thakur"},
    {"email": "thakurchandan311@gmail.com"},
       { "phone": "8240119349"},
        {"address": {
            "street": "87b, Dr G S Bose Road",
            "city": "Kolkata",
            "state": "West Bengal",
            "zip_code": "700039",
            "country":"INDIA"
        } 
    } 
    ]
    for (let i of profiledata) {
        resume.profiles.push(i);
    }



    var  experiencedata=
        [
            {"role":"Site Engineering"},
            {"company":"Tulsi Weigh Solution Pvt.ltd"},
            {"start_date": "August 2023"},
            {"end_date": "Present"},
           { "responsibilities": [
                "Site Execution",
                "Drawing reading and explnation",
                "BOQ and Estimation",
            ]
            }
        ]
    
        for (let i of  experiencedata) {
            resume.experience.push(i);
        }

    
     var educationdata=
        [
            {"degree": "B.tech"},
            {"institution": "Calcutta Institutes of Engineering and Management"},
            {"start_date": "2019"},
            {"end_date": "2023"}
        ]
    
        for (let i of educationdata) {
            resume.education.push(i);
        }
     var skillsdata=[
        
        "Autocad",
        "Ms office",
        "Python Programming Language",
        
    ]

    for (let i of skillsdata) {
        resume.skills.push(i);
    }


     var projectsdata = 
        [
            {"name": "Online calculator"},
            {"description": "Built a online calculator which can perform different calculations "},
            {"technologies": ["HTML","CSS","JAVA SCRIPT"]},

        ]
         for (let i of projectsdata) {
            resume.profiles.push(i);
        }
    
     var certificationsdata =
        [
            {"name": "Python Certification",
            "issuing_organization": "Amity Computer Acadmey",
            "issue_date": "8/6/2023"}, 
        ]
        for (let i of certificationsdata) {
            resume.certifications.push(i);
        }
        var a=JSON.stringify(resume)
        var x=JSON.parse(a)
        console.log(x)

        
// Using for each loop
     var resume=
        {
            profiles:[],
            experience:[],
            education:[],
            skills:[],
            projects:[],
            certifications:[],
        
        };
        
            var profiledata=[{"name":"Chandan Thakur"},
            {"email": "thakurchandan311@gmail.com"},
               { "phone": "8240119349"},
                {"address": {
                    "street": "87b, Dr G S Bose Road",
                    "city": "Kolkata",
                    "state": "West Bengal",
                    "zip_code": "700039",
                    "country":"INDIA"
                } 
            } 
            ]
            profiledata.forEach(function(i) {
                resume.profiles.push(i);
            });
        
        
        
            var  experiencedata=
                [
                    {"role":"Site Engineering"},
                    {"company":"Tulsi Weigh Solution Pvt.ltd"},
                    {"start_date": "August 2023"},
                    {"end_date": "Present"},
                   { "responsibilities": [
                        "Site Execution",
                        "Drawing reading and explnation",
                        "BOQ and Estimation",
                    ]
                    }
                ]
            
                  experiencedata.forEach(function(i) {
                    resume.experience.push(i);
                })
        
            
             var educationdata=
                [
                    {"degree": "B.tech"},
                    {"institution": "Calcutta Institutes of Engineering and Management"},
                    {"start_date": "2019"},
                    {"end_date": "2023"}
                ]
            
                educationdata.forEach(function(i) {
                    resume.education.push(i);
                })
             var skillsdata=[
                
                "Autocad",
                "Ms office",
                "Python Programming Language",
                
            ]
        
             skillsdata.forEach(function(i) {
                resume.skills.push(i);
            })
        
        
             var projectsdata = 
                [
                    {"name": "Online calculator"},
                    {"description": "Built a online calculator which can perform different calculations "},
                    {"technologies": ["HTML","CSS","JAVA SCRIPT"]},
        
                ]
                  projectsdata.forEach(function(i) {
                    resume.profiles.push(i);
                })
            
             var certificationsdata =
                [
                    {"name": "Python Certification",
                    "issuing_organization": "Amity Computer Acadmey",
                    "issue_date": "8/6/2023"}, 
                ]
                certificationsdata.forEach(function(i) {
                    resume.certifications.push(i);
                })
                var a=JSON.stringify(resume)
                var x=JSON.parse(a)
                console.log(x)


             