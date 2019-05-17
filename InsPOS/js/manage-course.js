
function generateCourseID(){
    var currentId = $('tbody tr:last-child td:first-child').text();
    var newId = parseInt(currentId.substring(1,2));
    return ++newId;
}

function fetchAllCourses(){
    for (var i=0;i<Courses.length;i++){
        $('tbody').append('<tr><td>'+Courses[i].id+'</td><td>'+Courses[i].name+'</td><td>'+Courses[i].description+'</td><td>'+Courses[i].duration+'</td></tr>');
    }
}

function eventToTr(){
    $('tbody tr').off('click');
    $('tbody tr').click(function () {
        $('#exampleInputCourseID').val($(this).find('td:nth-child(1)').text());
        $('#exampleInputCourseName').val($(this).find('td:nth-child(2)').text());
        $('#exampleInputCourseDescription').val($(this).find('td:nth-child(3)').text());
        $('#exampleInputCourseDuration').val($(this).find('td:nth-child(4)').text());

        $('#btn-course').text("Update Course");
    });
}

function validations() {
    var valid = true;
    if ($.trim($('#exampleInputCourseName').val()).length ===0){
        $('#exampleInputCourseName').css('border-color','red');
        valid =false;
    }
    if ($.trim($('#exampleInputCourseDescription').val()).length ===0){
        $('#exampleInputCourseDescription').css('border-color','red');
        valid =false;
    }
    if ($.trim($('#exampleInputCourseDuration').val()).length ===0){
        $('#exampleInputCourseDuration').css('border-color','red');
        valid =false;
    }
    return valid;
}

function saveUpdate(){
    $('#btn-course').click(function () {

        var courseId = $('#exampleInputCourseID').val();
        var courseNmae = $('#exampleInputCourseName').val();
        var courseDescription = $('#exampleInputCourseDescription').val();
        var courseDuration = $('#exampleInputCourseDuration').val();

        if ($('#btn-course').text() === "Update Course" && validations()){
            $('tbody tr td:first-child').each(function () {
                console.log(courseId);
                if ($(this).text() === courseId){

                    $(this).parent().find('td:nth-child(2)').text(courseNmae);
                    $(this).parent().find('td:nth-child(3)').text(courseDescription);
                    $(this).parent().find('td:nth-child(4)').text(courseDuration);

                    $('#exampleInputCourseID').val("C" + generateCourseID());
                    $('#exampleInputCourseName').val('');
                    $('#exampleInputCourseDescription').val('');
                    $('#exampleInputCourseDuration').val('');
                    $('#btn-course').text("Save Course");

                }
            });
        }
        else{
            if (validations()){
                $('tbody').append('<tr><td>'+courseId+'</td><td>'+courseNmae+'</td><td>'+courseDuration+'</td><td>'+courseDuration+'</td></tr>');
                $('#exampleInputCourseID').val("C" + generateCourseID());
                $('#exampleInputCourseName').val('');
                $('#exampleInputCourseDescription').val('');
                $('#exampleInputCourseDuration').val('');
                eventToTr();
            }
        }
    });
}

$(document).ready(function () {
    $('#exampleInputCourseDuration').click(function () {
        $(this).css('border-color','black');
    });
    $('#exampleInputCourseDescription').click(function () {
        $(this).css('border-color','black');
    });
    $('#exampleInputCourseName').click(function () {
        $(this).css('border-color','black');
    });

    //fetch all courses
    fetchAllCourses();

    //setID
    $('#exampleInputCourseID').val("C" + generateCourseID());

    //bind event to tr
    eventToTr();
    saveUpdate();
});