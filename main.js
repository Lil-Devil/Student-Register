var display_name_of_the_student_array=[];
function submit() {
    var display_name_of_the_student=[];
    for(var j=1; j<=4;j++) {
        var name_of_the_student=document.getElementById("name_of_the_student_"+j).value;
        console.log(name_of_the_student);
        display_name_of_the_student.push(name_of_the_student);
    }
console.log(display_name_of_the_student);
var length_display_name_of_the_student=display_name_of_the_student.length;
console.log(length_display_name_of_the_student);

for(var m=0; m<length_display_name_of_the_student;m++) {
    display_name_of_the_student_array.push("<h4>Name- "+display_name_of_the_student[m]+"</h4>");
    console.log(display_name_of_the_student_array);
}
console.log(display_name_of_the_student_array);
document.getElementById("display_name_with_commas").innerHTML=display_name_of_the_student_array;
var remove_commas=display_name_of_the_student_array.join(" ");
console.log (remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
document.getElementById("submit_button").style.display = "none"; document.getElementById("sort_button").style.display = "inline-block";
}
function sorting() {
    display_name_of_the_student_array.sort();
    console.log(display_name_of_the_student_array);
    var display_student_array_sorting=[];
    var length_display_name_of_the_student_array=display_name_of_the_student_array.length;
    console.log(length_display_name_of_the_student_array);

    for(var m=0; m<length_display_name_of_the_student_array;m++) {
        display_name_of_the_student_array.push("<h4>Name- "+display_name_of_the_student_array[m]+"</h4>");
        console.log(display_name_of_the_student_array);
    }
        var remove_commas=display_name_of_the_student_array.join(" ");
console.log (remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}
