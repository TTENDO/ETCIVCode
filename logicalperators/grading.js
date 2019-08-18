let students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
for (let i=0; i < students.length; i++) 
            {
                    marks = students[i][1];
                    name = students[i][0];
                    if (marks < 60){
                    console.log("Grade : F");      
                    } 
                    else if (marks < 70) 
                    {
                            console.log(name + " " + "has" + " " + "Grade D"); 
                    } 
                    else if (marks < 80) 
                    {
                            console.log(name + " " + "has" + " " + "Grade C"); 
                    } 
                    else if (marks < 90) 
                    {
                            console.log(name + " " + "has" + " " + "Grade B"); 
                    } 
                    else if (marks < 100) 
                    {
                            console.log(name + " " + "has" + " " + "Grade A"); 
                    }
            }
      