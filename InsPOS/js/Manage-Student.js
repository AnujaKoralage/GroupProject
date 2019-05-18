function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function listnerToTr() {
    $('tbody tr').off('click');
    $('tbody tr').click(function () {
        $('#studentid').val($(this).find('td:nth-child(1)').text());
        $('#exampleInputStudentName').val($(this).find('td:nth-child(2)').text());
        $('#courceid').val($(this).find('td:nth-child(3)').text());
        $('#exampleInputCourseName').val($(this).find('td:nth-child(4)').text());
        $('#batchid').val($(this).find('td:nth-child(5)').text());
        $('#exampleInputBatchName').val($(this).find('td:nth-child(6)').text());

        $("#btn-stu").text("Update Student");

    });
}

function addYpdate(){
    $('#btn-stu').click(function () {
        var id = $('#studentid').val();
        var name = $('#exampleInputStudentName').val();
        var courseID = $('#courceid').val();
        var courseName = $('#exampleInputCourseName').val();
        var batchId = $('#batchid').val();
        var batchName = $('#exampleInputBatchName').val();

        if ($('#btn-stu').text() === "Update Student"){
            console.log("lol");
            $('tbody tr td:first-child').each(function () {
                if ($(this).text() === id){
                    $(this).parent().find('td:nth-child(2)').text(name);
                    $(this).parent().find('td:nth-child(3)').text(courseID);
                    $(this).parent().find('td:nth-child(4)').text(courseName);
                    $(this).parent().find('td:nth-child(5)').text(batchId);
                    $(this).parent().find('td:nth-child(6)').text(batchName);

                    $('#studentid').val('');
                    $('#exampleInputStudentName').val('');
                    $('#courceid').val('');
                    $('#exampleInputCourseName').val('');
                    $('#batchid').val('');
                    $('#exampleInputBatchName').val('');

                    $("#btn-stu").text("Save");
                    return;

                }
            });
        }else{
            $('tbody').append('<tr><td>'+id+'</td><td>'+name+'</td><td>'+courseID+'</td><td>'+courseName+'</td><td>'+batchId+'</td><td>'+batchName+'</td></tr>');
            $('#studentid').val('');
            $('#exampleInputStudentName').val('');
            $('#courceid').val('');
            $('#exampleInputCourseName').val('');
            $('#batchid').val('');
            $('#exampleInputBatchName').val('');

            listnerToTr();
        }
    });
}

$(document).ready(function () {
    //load data to combo boxes
    for (var i=0;i<student.length;i++){
        $('#studentid').append('<option value='+student[i].id+'>'+student[i].id+'</option>');
    }
    for (var i=0;i<Courses.length;i++){
        $('#courceid').append('<option value='+Courses[i].id+'>'+Courses[i].id+'</option>');
    }
    for (var i=0;i<Batches.length;i++){
        $('#batchid').append('<option value='+Batches[i].id+'>'+Batches[i].id+'</option>');
    }
    $('#studentid').click(function () {
        for (var i=0 ; i<student.length;i++){
            if (student[i].id === $(this).val()){
                $('#exampleInputStudentName').val(student[i].name);
            }
        }
    });
    $('#courceid').click(function () {
        for (var i=0 ; i<Courses.length;i++){
            if (Courses[i].id === $(this).val()){
                $('#exampleInputCourseName').val(Courses[i].name);
            }
        }
    });
    $('#batchid').click(function () {
        for (var i=0 ; i<Batches.length;i++){
            if (Batches[i].id === $(this).val()){
                $('#exampleInputBatchName').val(Batches[i].name);
            }
        }
    });

    //load to table
    for (var i=0;i < Students.length;i++){
        $('tbody').append('<tr><td>'+Students[i].id+'</td><td>'+Students[i].name+'</td><td>'+Students[i].courseId+'</td><td>'+Students[i].courseName+'</td><td>'+Students[i].batchId+'</td><td>'+Students[i].batchName+'</td></tr>');
    }

    //tr listner
    listnerToTr();
    addYpdate();

    $('#addStu').click(function () {
        var id = $('#popupstudentid').val();
        var name = $('#popupstudentname').val();
        var cnum = $('#popupstudentcontactno').val();

        student.push({
            id:id,
            name:name,
            cnum:cnum
        });
            $('#studentid').append('<option value='+id+'>'+id+'</option>');
    });
});