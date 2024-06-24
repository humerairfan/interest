import inquirer from "inquirer";

class student {
    name:string
    constructor(n:string){
        this.name=n
    }
}

class person{
    students:student[]=[]
    addstudent(obj:student){
        this.students.push(obj)
    }
}

const persons = new person()

const programstart =async( persons:person)=>{}

    

    
    
    console.log("wellcome");
    const ans= await inquirer.prompt({
        name: 'select',
        type:"list",
        message:"whom would like to interact with?",
        choices:["staff","student","exit"]
    })
    if(ans.select == "staff"){
        console.log("you approach the staff room please feel free ask to any question.")
    }
    else if(ans.select =="student"){
        const ans= await inquirer.prompt({
            name:"student",
            type:"input",
            message:"Enter the student's name you wish to engage with:"
        })
        const student = persons.students .find(val =>val.name == ans.student)
    }
    if(!student){
        const name = new student(ans.student)
        persons.addstudent(name)
        console.log(`hello i am ${name.name}.nice to meet you!`);
        console.log("new student added");
        console.log("current student list:");
        console.log(persons.students);
        
        
        
        
    }else {
        console.log(`hello i am ${student.name}.nice to see you again`);
        console.log("exting student list:");
        console.log(persons.students);
      if(ans.select == "exit"){
        console.log("exiting the program...");
    }
    
}   

programstart(persons)
    



