var delet = document.getElementById("delet");
var deletall = document.getElementById("deletall");
delet.addEventListener("click",function(){
    var table = document.getElementById("record");
    var lastRowIndex = table.rows.length - 1;
    if (table.rows.length >= 1) {
        var recordId = table.rows[lastRowIndex].cells[0].innerText;
        deletesql(recordId);
        table.deleteRow(lastRowIndex);
    }
    
});
function deletesql(recordId) {
    fetch(`/delete_record/${recordId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.status === 'success') {
            var row = document.getElementById(`row_${recordId}`);
            if (row) {
                row.remove();
            }
        } else {
            console.error(data.message);
        }
    })
    .catch(error => console.error('Error:', error));
}
totalsumsure.addEventListener("click",function(){
    var table = document.getElementById("sum");
    var totalSum = 0;
    for (var i = 1; i < table.rows.length; i++) {
        var totalCellText = table.rows[i].cells[15].innerText;
        totalSum += parseInt(totalCellText);
    }
    totalsum.textContent = totalSum; 
});
var deletall = document.getElementById("deletall");
deletall.addEventListener("click", function () {
    var table = document.getElementById("record");
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }

    fetch('/delete_all_records', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.status === 'success') {
            console.log('所有數據刪除成功');
        } else {
            console.error(data.message);
        }
    })
    .catch(error => console.error('Error:', error));
});
