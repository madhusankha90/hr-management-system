const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    contactsDetais:{
        address:{
            street1:{
                type: String,
                required:false
            },
            street2:{
                type: String,
                required:false
            },
            city:{
                type: String,
                required: false
            },
            state:{
                type: String,
                required: false
            },
            zip:{
                type: String,
                required: false
            },
            country:{
                type: String,
                requied: false
            }
        },
        telePhone:{
            home:{
                type:String,
                requied:false
            },
            mobile:{
                type:String,
                requied:false
            },
            work:{
                type:String,
                required:false
            }
        },
        email:{
            workEmail:{
                type:String,
                requied:true
            },
            otherEmail:{
                type:String,
                required:false
            }
        }
    }
});

const ContactDetail = mongoose.model('contactsDetails', contactSchema);

module.exports = ContactDetail;