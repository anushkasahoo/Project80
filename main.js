var name_of_people_array = [];
function  submit()
{
     var display_people_array = [];
 
     for (var j = 1; j <= 1; j++)
 {
     var name_of_the_people = document.getElementById("guest_list").value;
     console.log(name_of_the_people);
     name_of_people_array.push(name_of_the_people);
  }
 console.log(name_of_people_array);
 
 var length_of_name_of_people_array = name_of_people_array.length;
 console.log(length_of_name_of_people_array);
 
var people_array=[];
 for (var k = 0; k < length_of_name_of_people_array; k++)
 {
      
people_array.push(name_of_people_array[k] + " ");
 }

     display_people_array.push("<h4> "+people_array  + "</h4>");
     console.log(display_people_array);
 
 
 console.log(display_people_array);
 document.getElementById("guest_list_with_commas").innerHTML = display_people_array; 
}
function showlist()
{
     var i = name_of_people_array.join("<br>");
     console.log(name_of_people_array);
     document.getElementById("guest_list_without_commas").innerHTML = i.toString();
}
function sorting()
{
     name_of_people_array.sort();
     var i = name_of_people_array.join("<br>");
     console.log(name_of_people_array);
     document.getElementById("sorted_guest_list").innerHTML = i.toString();
}
function search()
{
     var s = document.getElementById("search_the_name").value;
     var found = 0;
     var j;
     for(j=0; j < name_of_people_array.length; j++)
     {
          if(s==name_of_people_array[j]){
               found = found+1;
          }
     }
     document.getElementById("find_the_guest").innerHTML="name found "+found+" time/s";
     console.log("found name "+found+" time/s");
}
function clearspace()
{
     document.getElementById("guest_list").value = "";

}