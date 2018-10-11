$().ready(function() {

    var url = "http://localhost:8080/Vendors/List"

    $.getJSON(url)
        .then(function(jsonResponse)  {
                console.log(jsonResponse);
                render(jsonResponse);
        });

});

function render(jsonResponse)  {
    var tbody = $("#tbody");
    var vendors = jsonResponse.Data;
    for(var vendor of vendors)  {
        var row = "<tr>";
        row += "<td>" + vendor.Id + "</td>";
        row += "<td>" + vendor.Code + "</td>";
        row += "<td>" + vendor.Name + "</td>";
        row += "<td>" + vendor.Address + "</td>";
        row += "<td>" + vendor.City + "</td>";
        row += "<td>" + vendor.State + "</td>";
        row += "<td>" + vendor.Zip + "</td>";
        row += "<td>" + vendor.Email + "</td>";
        row += "<td>" + vendor.PreApproved + "</td>";
        row += "</tr>";
        tbody.append(row);
    }
}