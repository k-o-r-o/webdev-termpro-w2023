$(document).ready(function() {
	$.getJSON("json/team.json", function(data) {
		// Loop through each employee object and create an HTML element
		$.each(data.employees, function(i, employee) {
			var $employeeElement = $("<div>", {"class": "employee"});
			$employeeElement.append($("<h3>").text(employee.Name));
			$employeeElement.append($("<p>").text("Title: " + employee.Title));
			$employeeElement.append($("<p>").text("Department: " + employee.Department));
			$employeeElement.append($("<p>").text("Bio: " + employee.Bio));
			$("#employee-list").append($employeeElement);
		});
	});
});
