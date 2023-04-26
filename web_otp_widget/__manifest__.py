# Copyright 2023 Xuyen Bui
# License LGPL-3.0 or later (http://www.gnu.org/licenses/lgpl.html).

{
    "name": "OTP Widget",
    "summary": "Web Backend OTP Widget",
    "version": "12.0",
    "category": "Website",
    "website": "https://github.com/btxuyenhcmus/odoo/tree/12.0/web_otp_widget",
    "author": "Xuyen Bui",
    "license": "LGPL-3",
    "installable": True,
    "application": False,
    "depends": [],
    "data": [
        'assets.xml',
    ],
    "qweb": [
        'static/src/xml/otp_fields.xml',
    ],
    "images": ['static/description/icon.png']
}
