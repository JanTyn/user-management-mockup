/* Some user data for testing BEGIN */
var users = 
[
	{
		username: "kerttu@domain.com",
		role: "Sales person",
		first_name: "Kerttu",
		last_name: "Tervanen",
		is_active: true,
		last_login: "August 24, 2016, 11:12 am"
	},
	{
		username: "teppo@domain.com",
		role: "Manager",
		first_name: "Teppo",
		last_name: "Tervanen",
		is_active: true,
		last_login: "January 27, 2016, 01:12 am"
	},
	{
		username: "janne@domain.com",
		role: "Manager",
		first_name: "Janne",
		last_name: "Hamppainen",
		is_active: false,
		last_login: "September 12, 2015, 09:42 pm"
	},
	{
		username: "ritva@domain.com",
		role: "Manager",
		first_name: "Ritva",
		last_name: "Remppainen",
		is_active: true,
		last_login: "July 7, 2016, 06:54 am"
	},
	{
		username: "samu@domain.com",
		role: "Sales person",
		first_name: "Samu",
		last_name: "Herkonen",
		is_active: true,
		last_login: "December 24, 2015, 11:45 pm"
	},
]

var user_roles = 
[
	"Manager",
	"Sales person",
	"Worker"
]
/* test user data END */

/* custom methods BEGIN */

function is_new_value_in_array(array, value) {
	for (u=0; u < array.length; u++) {
		if (array[u] == value) 
			return false;
	}
	return true;
}

/* custom methods END */

/* Vue custom filters BEGIN */


/* Vue custom filters END */

/* Vue view models BEGIN */

var vm_user_list = new Vue({
  	el: '#user_list',
  	data: {
		users: users
	},
	computed: {
		get_roles: function() {

			roles = {}

			for (i=0; i < this.users.length; i++) {

				var role = this.users[i].role;

				if (role in roles) {
					roles[role]++;
				}
				else roles[role] = 1;
			}

			return roles;
		},
	}
})



/* Vue view models END */