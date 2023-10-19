// Copyright (c) 2023, a and contributors
// For license information, please see license.txt

frappe.ui.form.on('ass1', {
	lastname: function(frm) {
		let x= frm.doc.firstname + frm.doc.lastname;
		// refresh();
		frm.set_value({'fname':frm.doc.firstname + frm.doc.lastname});
		console.log(frm.doc.firstname + frm.doc.lastname);
		// frm.refresh();
	},

	check: function(frm){
		console.log(frm.doc.check);
		if(frm.doc.check==0){
			console.log('function 0')
			frm.set_df_property(
				'fname', 'hidden',0
				)
			}
			else{
				console.log('function 0')
				frm.set_df_property(
				'fname', 'hidden',1
			)
		}
	}
});

frappe.ui.form.on("hobbies", {
    child_tab_add (frm, cdt, cdn) {
        get_tax_amount(frm,cdt, cdn)
    },
})


let get_tax_amount = async (frm, cdt, cdn) => {
    frappe.model.set_value(cdt, cdn, 'hobby', frm.doc.fname)
}