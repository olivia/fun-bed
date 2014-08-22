import Ember from 'ember';
import FileValidation from 'fun-bed/mixins/file-validation';

export default Ember.ObjectController.extend(FileValidation, {
  illegalList: ["Untitled", "Untitled_1"],
  newName: function(){
    return this.generateUntitledName();
  }.property()
});
