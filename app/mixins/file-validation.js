import Ember from 'ember';

function validateRegex(regex){
  return function(text){
    return regex.test(text);
  };
}

export default Ember.Mixin.create({
  illegalList:null,
  untitledText: "Untitled_%@",
  validators:[
    validateRegex(/^[!|$]/)
  ],
     validateRegexList: function(text){
       for (var i = 0; i < this.validators; i++){
         if (!this.validators[i].call(this, text)){
          return false;
         }
       }
       return true;
     },
       checkIllegalList: function(text){
         return -1 === this.get('illegalList').indexOf(text);
       },
       generateUntitledName: function(){
          if (this.checkIllegalList("Untitled")){
            return "Untitled";
          }
          else {
            var index = 1;
            while (!this.checkIllegalList(this.get('untitledText').fmt(index))){
              index++;
            }
            return this.get('untitledText').fmt(index);
          }
       }
});
