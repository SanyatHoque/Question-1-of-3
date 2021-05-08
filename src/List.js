
function List(prop) {
    const tdclick =(idx) =>{
          var tab = document.getElementById("table"),
          tr = tab.getElementsByTagName("tr")[0];
          // tr.getElementsByTagName("td")[idx].innerHTML ="<td>" +"Y"+ "</td>";
          console.log("clicked",idx,tab,tr)
          
          for (let i=0;i<=prop.items.length-1;i++) {
            if (i===idx) {
                const A = tr.getElementsByTagName("td")[idx].innerHTML; 
                const A1 = tr.getElementsByTagName("td")[0].innerHTML;
                tr.getElementsByTagName("td")[0].innerHTML = "<td>" + A + "</td>"; 
                
                tr.getElementsByTagName("td")[idx].innerHTML = "<td>" + A1 + "</td>"; 
            } 
            
            
        }      
    }
    return(
      <table id='table'>
        <tbody>
          <tr>
            {prop.items.map((x1,idx)=>{
                  return(
                  <td key={idx} onClick={()=>tdclick(idx)}> 
                      {x1}
                  </td>
                  )
  
            })}
            
          </tr>
        </tbody>
      </table>
    )
  }
  
  export default List;