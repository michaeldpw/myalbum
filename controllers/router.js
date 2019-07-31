var file = require('../models/file');
var formidable = require('formidable');
var fs = require('fs');
var sd = require('silly-datetime');
var path = require('path');


//首页：展示所有文件夹
exports.showIndex = function(req, res){
   file.getAllAlbums(function(err, allAlbums){
       if(err){
           res.send(err);
           return; 
       }
        res.send(allAlbums);
   })
}

//文件夹页：展示所有图片
exports.showAlbum = function(req, res){
    var albumName = req.params['albumname'];
    file.getAllImagesByAlbumName(albumName, function(err, imageArray){
        if(err){
            res.send(err);
        }
        res.send(imageArray);
    }) 
}

//上传图片
exports.doPost = function(req,res){
    var form = new formidable.IncomingForm();
    form.uploadDir = __dirname + "/../temp_uploads/";
    form.parse(req, function(err, fields, files){
        console.log(fields);
        console.log(files);

        if(err){
            next();
            return;
        }
        //判断文件尺寸
        var size = files.image.size;
        if(size>7168){
            res.send("The size of the file should be no more than 7M.");
            //删除图片
            fs.unlink(files.image.path, function(){}); 
            return; 
        }
        //改名
        var ttt = sd.format(new Date(), 'YYYYMMDDHHmmss');
        var random = parseInt(Math.random() * 89999 + 10000);
        var extname = path.extname(files.image.name);
        var folderName = fields.folder;
        console.log(folderName);
        var oldPath = files.image.path;
        var newPath = __dirname + "/../uploads/" + folderName + '/' + ttt + random + extname;
        fs.rename(oldPath, newPath, function(err){
            if(err){
               res.send('shibai');
               console.log(err);
            }
            res.send("success");
        });
    });

    

    return;
}