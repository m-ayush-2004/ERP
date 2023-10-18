frappe.ui.form.on("Sales Order", {
    refresh(frm) {

    }
})

frappe.ui.form.on("Sales Order Item", {
    item_code (frm, cdt, cdn) {
        get_tax_amount(frm, cdt, cdn)
    },
    qty(frm, cdt, cdn) {
        get_tax_amount(frm, cdt, cdn)
    },
    rate(frm, cdt, cdn) {
        get_tax_amount(frm, cdt, cdn)
    },
})


let get_tax_amount = async (frm, cdt, cdn) => {
    let item_row = frappe.model.get_doc(cdt, cdn);
    console.log(item_row)
    // frappe.model.set_value()
    frappe.model.set_value(cdt, cdn, 'custom_resrved_1', (item_row.actual_qty - item_row.projected_qty))
    frappe.model.set_value(cdt, cdn, 'ordered_qty', item_row.qty)
}