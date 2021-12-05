//DOM loaded
document.addEventListener("DOMContentLoaded", function(event){
    //fetch JSON
    fetch("degrees.json")
    .then(response => response.json())
    .then(data => {
        console.log("My data", data);
        const table = document.createElement('table');
        let tr = document.createElement('tr');
        let th1 = document.createElement('th');
        let th2 = document.createElement('th');
        let th3 = document.createElement('th');
        let th4 = document.createElement('th');
        let th5 = document.createElement('th');
        let th6 = document.createElement('th');
      
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        let content = document.createTextNode('School');
        th1.appendChild(content);
        
        content = document.createTextNode('Major');
        th2.appendChild(content);
      
        content = document.createTextNode('Type');
        th3.appendChild(content);
      
        content = document.createTextNode('Year');
        th4.appendChild(content);
      
        content = document.createTextNode('GPA');
        th5.appendChild(content);
      
        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        tr.appendChild(th4);
        tr.appendChild(th5);
        table.appendChild(tr);
        
        data.movies.forEach((element, index) => {
          console.log('Row data ', element);  
          
          tr = document.createElement('tr');
          td1 = document.createElement('td');
          td2 = document.createElement('td');
          td3 = document.createElement('td');
          td4 = document.createElement('td');
          td5 = document.createElement('td');
          td6 = document.createElement('td');
          
          content = document.createTextNode(element.title);
          td1.appendChild(content);
          
          content = document.createTextNode(element.director);
          td2.appendChild(content);
          
          content = document.createTextNode(element.year);
          td3.appendChild(content);
          
          content = document.createTextNode(element.writers.join(', '));
          td4.appendChild(content);
          
          content = document.createTextNode(element.stars.join(', '));
          td5.appendChild(content);
          
          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          tr.appendChild(td4);
          tr.appendChild(td5);
          
          table.appendChild(tr);
          
        });
      
        document.body.appendChild(table);
      });
});