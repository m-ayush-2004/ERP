frappe.ui.form.on("Sales Order", {
    refresh(frm) {
        // frappe.msgprint('hello')
    }
})

frappe.ui.form.on("Sales Order Item", {
    item_code (frm, cdt, cdn) {
        get_reserve(frm, cdt, cdn)
        let item_row = frappe.model.get_doc(cdt, cdn);
        console.log(item_row)
        frappe.call(
            {
                method: "ecom.check_length.get_projected_qty",
                args : {
                    item_row
                },
                callback: {
                    function(r){
                        console.log(r)
                    }
                }

            }
        )
        frm.refresh();
    },
    onload(frm, cdt, cdn) {
        get_reserve(frm, cdt, cdn)
        frm.refresh();
    },
    qty(frm, cdt, cdn) {
        get_reserve(frm, cdt, cdn)
        frm.refresh();
    },
    rate(frm, cdt, cdn) {
        get_reserve(frm, cdt, cdn)
        frm.refresh();
    },
})


let get_reserve = async (frm, cdt, cdn) => {
    let item_row = frappe.model.get_doc(cdt, cdn);
    console.log(item_row)
    // frappe.model.set_value()
    frappe.model.set_value(cdt, cdn, 'custom_resrved_1', (item_row.actual_qty - item_row.projected_qty))
    frappe.model.set_value(cdt, cdn, 'ordered_qty', item_row.qty)
    frappe.model.set_value(cdt, cdn, 'actual_qty',  item_row.projected_qty)
}