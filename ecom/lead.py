# from erpnext.crm.doctype.lead.lead import Lead
# class CustomLead(Lead):
class CustomLead():
    def set_full_name(self):
        if self.first_name:
            self.lead_name = " ".join(
                filter(None, [self.first_name])
            )