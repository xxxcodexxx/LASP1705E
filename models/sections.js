// grab the things we need
const mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    name : {
        type : String,
        index : true
    },
    description : {
        type : String
    },
    date_created : {
       type: Date,
		"default": Date.now
    },
    date_updated : {
        type: Date,
		"default": Date.now
    }

})
var sections = module.exports = mongoose.model('sections',userSchema);

module.exports = {
    addSection : function(req,res){
        var response = {};
        var sectionData = new sections();
        sectionData.name = req.body.name;
        sectionData.description = req.body.description;
        sectionData.date_created = new Date();
        sectionData.date_updated = new Date();
        sectionData.save(function(err){
            if (err) {
                response = { "error": true, "message": "Error adding data" };
            } else {
                res.redirect('/sections');
            }
        })

    },
    getAllSection : function(req,res){
        var response = {};
        sections.find(function(err,data){
              if (err) {
                response = { "Lỗi": true, "message": "Error fetching data" };
            }else{
                res.render('allSections', { sections: data });
            }
        })
    },
    deleteSection : function(req,res){
         var response = {};
        sections.findById(req.params.id, function (err) {
            if (err) {
                response = { "error": true, "message": "Error fetching data" };
            } else {
                sections.remove({ _id: req.params.id }, function (err) {
                    if (err) {
                        response = { "error": true, "message": "Error deleting data" };
                    } else {
                        res.redirect('/sections')
                    }

                })
            }
        })
    },
    getSectionById : function(req,res){
         var response = {};
        sections.findById({ _id: req.params.id }, function (err, data) {
            if (err) {
                response = { "error": true, "message": "Error fetching data" };
            } else {
                res.render('editSection', { sections: data })
            }

        })
    },
    updateSection : function(req,res){
        var response = {};
        sections.findById(req.params.id, function (err, dataSection) {
            if (err) {
                response = { "error": true, "message": "Error deleting data" };
            } else {
                dataSection.name = req.body.name;
                dataSection.description = req.body.description;
                dataSection.date_created = new Date();
                dataSection.date_updated = new Date();
                dataSection.save(function (err) {
                    if (err) {
                        response = { "error": true, "message": "Error deleting data" };
                    } else {
                        res.redirect('/allSection');
                    }

                })
            }
        })
    }
}