var fs = require('fs');

exports.getAllAlbums = function(callback){
    fs.readdir("./uploads", function(err, files){
        if(err){
            callback("没有找到uploads文件夹", null);
        }

        var allAlbums = [];

        (function iterator(i){
            if(i == files.length){
                //遍历结束
                console.log(allAlbums);
                return callback(null, allAlbums);
            }
            fs.stat("./uploads/" + files[i], function(err, stats){
                if(stats.isDirectory()){
                    allAlbums.push(files[i]);
                }
                iterator(i + 1);
            });
        })(0);
    })
}

//通过文件名得到所有图片
exports.getAllImagesByAlbumName = function(albumName, callback){
    fs.readdir('./uploads/'+ albumName, function(err, files){
        if(err){
            callback("没有找到" + albumName + "文件夹", null);
        }
        
        var allImages = [];

        (function iterator(i){
            if(i == files.length){
                //遍历结束
                console.log(allImages);
                return callback(null, allImages);
            }
            fs.stat("./uploads/" + albumName + '/' + files[i], function(err, stats){
                if(stats.isFile() && files[i]!=='.DS_Store'){
                    allImages.push(files[i]);
                }
                iterator(i + 1);
            });
        })(0);
    })
    
}