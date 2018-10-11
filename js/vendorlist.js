$().ready(function() {

    var url = "http://localhost:8080/Vendor/List"

    $.getJSON(url)
        .then(function(jsonResponse)  {
                console.log(jsonResponse);
                render(jsonRepsonse);
        });

});

function render(jsonResponse)  {
    var tbody = $("#tbody");
    var vendors = jsonRepsonse.data;
    for(var vendor of vendors)  {
        var row = "<tr>";
        row += "<td>" + vendor.id + "</td>";
        row += "<td>" + vendor.name + "</td>";
        row += "<td>" + vendor.price + "</td>";
        row += "<td>" + vendor.vendor.name + "</td>";
        row += "</tr>";
        tbody.append(row);
    }
}