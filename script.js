//callback

 function mainFunction(callBacking){
     console.log('hi,how are you')

     callBacking();
 }

 function callBack(){
     console.log('i am fine ');
 }

 mainFunction(callBack)







//async\await
        function asyncoperation (){
        let first_promise = new Promise ((resolve,reject) => resolve(' Hello '));
        let second_promise = new Promise ((resolve,reject)=>{
            setTimeout(()=>{
            resolve(" kiranvvl.. ");
                
            },2000);
        });
        let combined_promise = Promise.all ([first_promise, second_promise]);
        return combined_promise;
        }
        async function display(){
            let data = await asyncoperation();
            console.log(data);
        } 
       display();

        //fetch method

        fetch(`index.txt`).then(res=>{
            console.log();
            return res.text();
        }).then(res =>{
            console.log(res);
        }).catch(rej =>{
            console.log(rej)
        });




        async function apicall () {
        let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
        let response = await fetch(url);//server interaction
    
        let commits = await response.json(); // read response body and parse as JSON
    
        return commits;
        }
  
        apicall() .then((commits)=>{
        console.log(commits);
        })
  
  



    