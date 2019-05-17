function findCourseName(id){
    for (var i =0; i<Courses.length;i++){
        if (Courses[i].id === id){
            return Courses[i].name;
        }
    }
}

function generateBatchID(){
    var currentId = $('tbody tr:last-child td:first-child').text();
    var num = parseInt(currentId.substring(1.2));
    $('#exampleInputBatchId').val('B' + ++num);
}

function trListener(){
    $('tbody tr').off('click');
    $('tbody tr').click(function(){
        //set selected data to feilds
        $('#course-id-combo').val($(this).find('td:nth-child(3)').text());
        $('#exampleInputCourseName').val($(this).find('td:nth-child(4)').text());
        $('#exampleInputBatchId').val($(this).find('td:nth-child(1)').text());
        $('#exampleInputBatchName').val($(this).find('td:nth-child(2)').text());

        //change button to update
        $('#btn-batch').text("Update Batch");
    });
}

function validateForm() {
    var courseName = $('#exampleInputCourseName').val();
    var batchName = $('#exampleInputBatchName').val();
    var valid = true;

    if ($.trim(batchName).length === 0){
        $('#exampleInputBatchName').css('border-color','red');
        valid =  false;
    }
    if ($.trim(courseName).length === 0){
        $('#course-id-combo').css('border-color','red');
        valid = false;
    }
    return valid;
}
function clearAllFeilds() {
    $('#exampleInputBatchName').val('');
    $('#exampleInputCourseName').val('');
    $('#exampleInputBatchId').val('');
}

function InsertAndUpdate(){
    $('#btn-batch').click(function () {
        var buttonType = $('#btn-batch').text();

        var batchID = $('#exampleInputBatchId').val();
        var batchName = $('#exampleInputBatchName').val();
        var courseID = $('#course-id-combo').val();
        var courseName = $('#exampleInputCourseName').val();


        if (buttonType === "Update Batch") {
            var vali = validateForm();
            if (vali){
                $('tbody tr td:first-child').each(function () {
                    if ($(this).text() === batchID){
                        $(this).parent().find('td:nth-child(2)').text(batchName);
                        $(this).parent().find('td:nth-child(3)').text(courseID);
                        $(this).parent().find('td:nth-child(4)').text(courseName);

                        clearAllFeilds();
                        generateBatchID();
                        $('#btn-batch').text("Save");
                    }
                });
            }
        }
        else if(buttonType === "Save"){
            if (validateForm()){
                $('tbody').append('<tr><td>'+batchID+'</td><td>'+batchName+'</td><td>'+courseID+'</td><td>'+courseName+'</td></tr>');

                clearAllFeilds();
                generateBatchID();
            }
        }
    });
}

$(document).ready(function () {
    $('#exampleInputBatchName').click(function () {
        $(this).css('border-color',"black");
    });
    //load dummy data to table
    for (var i=0; i<Batches.length;i++){
        $('tbody').append('<tr><td>'+Batches[i].id+'</td><td>'+Batches[i].name+'</td><td>'+Batches[i].courseid+'</td><td>'+Batches[i].courcename+'</td></tr>');
    }

    //load data to  combobox
    for (var i=0 ;i<Courses.length ;i++){
        $('#course-id-combo').append('<option value='+Courses[i].id+'>'+Courses[i].id+'</option>');
    }

    //load selected name to feild
    $('#course-id-combo').click(function () {
        $(this).css('border-color',"black");
        var courseID = $('#course-id-combo').val();
        $('#exampleInputCourseName').val(findCourseName(courseID));
    });

    //load batch id
    generateBatchID();

    //listner for tr
    trListener();
    InsertAndUpdate();

    //delete row
});

