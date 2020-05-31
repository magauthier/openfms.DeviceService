import mongoose from 'mongoose';

let deviceSchema = new mongoose.Schema({
    deviceID:       { type: String },
    vehicleName:    { type: String }
});

export default mongoose.model('Device', deviceSchema);