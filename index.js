var data = require('./course-length-data');
module.exports = {
   find: find
};

var attributes = ['country', 'course',"isocode", "level", "course"];
function printUsage(){
   console.log("Usage: find('your_search_query', ['country' || 'course' || 'isocode' || 'level' ])"); 
}

function find(query, attribute){
   if (arguments.length > 2){
      console.error("Too many paramters");
      printUsage();
      return;
   }else{
      if (attribute){
         if(attributes.indexOf(attribute) === -1){
            console.error("Invalid attribute");
            printUsage();
            return;
         }
         if (typeof query !== 'string'){
               console.error("Search parameter needs to be a string.")
               printUsage();
               return;
         }
         return attributeSearch(query, attribute);
      }else{
         if (query){
            if (typeof query !== 'string'){
               console.error("Search parameter needs to be a string.")
               printUsage();
               return;
            }
            return basicSearch(query);
         }else{
            return data;
         }
      }
   }
}

function basicSearch(query){
   var result = data.filter(function(item){
      for (var i=0; i<attributes.length; i++){
         if (item[attributes[i]].indexOf(query) >= 0){
            return true;
         }
      }
      return false;
   });
   return result;
}

function attributeSearch(query, attribute){
   var result = data.filter(function(item){
      if (item[attribute].indexOf(query) >= 0){
         return true;
      }
      return false;
   });
   return result;
}
